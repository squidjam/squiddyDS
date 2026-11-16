/**
 * Rule: no-invalid-attribute-values
 *
 * Reports when a Squiddy DS component attribute has an invalid value.
 * For example, variant="red" on sq-button when only 'primary', 'secondary', etc. are valid.
 */

import { TSESTree } from '@typescript-eslint/types';
import { ESLintUtils } from '@typescript-eslint/utils';
import { getComponent } from '../components.js';

const rule = ESLintUtils.RuleCreator.withoutDocs({
  name: 'no-invalid-attribute-values',
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow invalid attribute values for Squiddy DS components',
    },
    schema: [],
    messages: {
      invalidAttributeValue:
        'Invalid value "{{value}}" for "{{attr}}" on <{{tag}}>. Valid values: {{valid}}',
    },
  },
  defaultOptions: [],
  create(context) {
    // Handle JSX attributes
    function checkJSXAttribute(
      node: TSESTree.JSXAttribute,
      tagName: string,
    ) {
      const component = getComponent(tagName);
      if (!component) return;

      const attrName =
        node.name.type === 'JSXIdentifier' ? node.name.name : null;
      if (!attrName) return;

      const attrDef = component.attributes[attrName];
      if (!attrDef || !attrDef.values) return;

      // Get the attribute value
      let value: string | null = null;
      if (node.value) {
        if (node.value.type === 'Literal') {
          value = String(node.value.value);
        } else if (node.value.type === 'JSXExpressionContainer') {
          // Skip dynamic expressions
          return;
        }
      }

      if (value && !attrDef.values.includes(value)) {
        context.report({
          node,
          messageId: 'invalidAttributeValue',
          data: {
            value,
            attr: attrName,
            tag: tagName,
            valid: attrDef.values.join(', '),
          },
        });
      }
    }

    // Handle template literals with HTML (Lit html`...`)
    function checkTemplateLiteral(node: TSESTree.TemplateLiteral) {
      const text = node.quasis.map(q => q.value.raw).join('');

      // Find all sq-* tags with their attributes
      const tagRegex = /<\s*(sq-[a-z0-9-]+)([\s\S]*?)\s*\/?>|<\s*(sq-[a-z0-9-]+)([\s\S]*?)\s*>/g;
      let match;

      while ((match = tagRegex.exec(text)) !== null) {
        const tagName = match[1] || match[3];
        const attrsStr = match[2] || match[4] || '';
        const component = getComponent(tagName);
        if (!component) continue;

        // Find all attributes in the tag
        const attrRegex = /([a-z][a-z0-9-]*)(?:=(?:"([^"]*)"|'([^']*)'|([^\s>\/]+)))?/g;
        let attrMatch;

        while ((attrMatch = attrRegex.exec(attrsStr)) !== null) {
          const attrName = attrMatch[1];
          const value = attrMatch[2] || attrMatch[3] || attrMatch[4] || null;

          const attrDef = component.attributes[attrName];
          if (!attrDef || !attrDef.values || !value) continue;

          if (!attrDef.values.includes(value)) {
            // Report on the template literal node
            context.report({
              node,
              messageId: 'invalidAttributeValue',
              data: {
                value,
                attr: attrName,
                tag: tagName,
                valid: attrDef.values.join(', '),
              },
            });
          }
        }
      }
    }

    return {
      JSXOpeningElement(node) {
        if (!node.name || node.name.type !== 'JSXIdentifier') return;
        const tagName = node.name.name;
        if (!tagName.startsWith('sq-')) return;

        for (const attr of node.attributes) {
          if (attr.type === 'JSXAttribute') {
            checkJSXAttribute(attr, tagName);
          }
        }
      },
      TemplateLiteral: checkTemplateLiteral,
    };
  },
});

export default rule;
