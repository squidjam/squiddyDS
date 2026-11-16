/**
 * Rule: no-unknown-attributes
 *
 * Reports when a Squiddy DS component has an attribute that doesn't exist.
 * Helps catch typos in attribute names.
 */

import { TSESTree } from '@typescript-eslint/types';
import { ESLintUtils } from '@typescript-eslint/utils';
import { getComponent } from '../components.js';

// Standard HTML attributes that are allowed on any element
const standardHtmlAttrs = new Set([
  'id', 'class', 'style', 'title', 'lang', 'dir', 'tabindex', 'hidden',
  'role', 'aria-', 'data-', 'slot', 'part', 'exportparts',
  'onclick', 'onchange', 'onsubmit', 'onfocus', 'onblur',
  'autofocus', 'disabled', 'readonly', 'required',
]);

function isStandardAttr(name: string): boolean {
  if (standardHtmlAttrs.has(name)) return true;
  if (name.startsWith('aria-')) return true;
  if (name.startsWith('data-')) return true;
  if (name.startsWith('on')) return true;
  return false;
}

function levenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1,
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

const rule = ESLintUtils.RuleCreator.withoutDocs({
  name: 'no-unknown-attributes',
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow unknown attributes on Squiddy DS components',
    },
    schema: [],
    messages: {
      unknownAttribute:
        'Unknown attribute "{{attr}}" on <{{tag}}>. Did you mean "{{suggestion}}"? Available: {{available}}',
    },
  },
  defaultOptions: [],
  create(context) {
    function findSuggestion(attr: string, validAttrs: string[]): string | null {
      let bestMatch: string | null = null;
      let bestDistance = Infinity;

      for (const valid of validAttrs) {
        const distance = levenshteinDistance(attr.toLowerCase(), valid.toLowerCase());
        if (distance < bestDistance && distance <= 3) {
          bestDistance = distance;
          bestMatch = valid;
        }
      }

      return bestMatch;
    }

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

      // Skip standard HTML attributes
      if (isStandardAttr(attrName)) return;

      // Check if attribute exists on the component
      const validAttrs = Object.keys(component.attributes);
      if (validAttrs.includes(attrName)) return;

      const suggestion = findSuggestion(attrName, validAttrs);
      context.report({
        node,
        messageId: 'unknownAttribute',
        data: {
          attr: attrName,
          tag: tagName,
          suggestion: suggestion || '(none)',
          available: validAttrs.join(', '),
        },
      });
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
        const attrRegex = /([a-z][a-z0-9-]*)(?:=(?:"[^"]*"|'[^']*'|[^\s>\/]+))?/g;
        let attrMatch;

        while ((attrMatch = attrRegex.exec(attrsStr)) !== null) {
          const attrName = attrMatch[1];

          // Skip standard HTML attributes
          if (isStandardAttr(attrName)) continue;

          const validAttrs = Object.keys(component.attributes);
          if (validAttrs.includes(attrName)) continue;

          const suggestion = findSuggestion(attrName, validAttrs);
          context.report({
            node,
            messageId: 'unknownAttribute',
            data: {
              attr: attrName,
              tag: tagName,
              suggestion: suggestion || '(none)',
              available: validAttrs.join(', '),
            },
          });
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
