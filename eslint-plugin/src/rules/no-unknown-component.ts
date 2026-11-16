/**
 * Rule: no-unknown-component
 *
 * Reports when an unknown sq-* element is used that is not part of Squiddy DS.
 * Helps catch typos in component names.
 */

import { TSESTree } from '@typescript-eslint/types';
import { ESLintUtils } from '@typescript-eslint/utils';
import { getAllTags } from '../components.js';

const rule = ESLintUtils.RuleCreator.withoutDocs({
  name: 'no-unknown-component',
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow unknown Squiddy DS components',
    },
    schema: [
      {
        type: 'object',
        properties: {
          ignoreTags: {
            type: 'array',
            items: { type: 'string' },
            description: 'Tags to ignore (e.g., custom sq-* components not in Squiddy DS)',
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      unknownComponent:
        'Unknown Squiddy DS component "{{tag}}". Did you mean "{{suggestion}}"? Available: {{available}}',
    },
    fixable: 'code',
  },
  defaultOptions: [],
  create(context) {
    const opts = context.options as unknown as Array<{ ignoreTags?: string[] }>;
    const options = opts[0] || {};
    const ignoreTags: string[] = options.ignoreTags || [];
    const validTags = getAllTags();

    function findSuggestion(tag: string): string | null {
      const tagLower = tag.toLowerCase();
      // Find closest match using Levenshtein distance
      let bestMatch: string | null = null;
      let bestDistance = Infinity;

      for (const valid of validTags) {
        const distance = levenshteinDistance(tagLower, valid);
        if (distance < bestDistance && distance <= 3) {
          bestDistance = distance;
          bestMatch = valid;
        }
      }

      return bestMatch;
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

    // Handle JSX elements
    function checkJSXElement(node: TSESTree.JSXOpeningElement) {
      if (!node.name) return;

      const tagName =
        node.name.type === 'JSXIdentifier'
          ? node.name.name
          : node.name.type === 'JSXMemberExpression'
            ? node.name.property.name
            : null;

      if (!tagName || !tagName.startsWith('sq-')) return;
      if (ignoreTags.includes(tagName)) return;

      if (!validTags.includes(tagName)) {
        const suggestion = findSuggestion(tagName);
        context.report({
          node,
          messageId: 'unknownComponent',
          data: {
            tag: tagName,
            suggestion: suggestion || '(none)',
            available: validTags.slice(0, 10).join(', ') + '...',
          },
          fix(fixer) {
            if (suggestion) {
              return fixer.replaceText(node.name, suggestion);
            }
            return null;
          },
        });
      }
    }

    // Handle template literals with HTML (Lit html`...`)
    function checkTemplateLiteral(node: TSESTree.TemplateLiteral) {
      const text = node.quasis.map(q => q.value.raw).join('');

      // Find all sq-* tags in the template
      const tagRegex = /<\s*(sq-[a-z0-9-]+)/g;
      let match;
      let reported = false;

      while ((match = tagRegex.exec(text)) !== null) {
        const tagName = match[1];
        if (ignoreTags.includes(tagName)) continue;

        if (!validTags.includes(tagName)) {
          if (!reported) {
            const suggestion = findSuggestion(tagName);
            context.report({
              node,
              messageId: 'unknownComponent',
              data: {
                tag: tagName,
                suggestion: suggestion || '(none)',
                available: validTags.slice(0, 10).join(', ') + '...',
              },
            });
            reported = true; // Report once per template literal to avoid noise
          }
        }
      }
    }

    return {
      JSXOpeningElement: checkJSXElement,
      TemplateLiteral: checkTemplateLiteral,
    };
  },
});

export default rule;
