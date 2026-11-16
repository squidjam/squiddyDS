/**
 * Quick test file to verify ESLint rules work correctly.
 * Run: npx eslint test/test-rules.ts
 */

// Test 1: Unknown component (should trigger no-unknown-component)
const bad1 = `<sq-butto>Click</sq-butto>`;

// Test 2: Invalid attribute value (should trigger no-invalid-attribute-values)
const bad2 = `<sq-button variant="red">Click</sq-button>`;

// Test 3: Unknown attribute (should trigger no-unknown-attributes)
const bad3 = `<sq-button vartiant="primary">Click</sq-button>`;

// Test 4: Valid usage (should NOT trigger any rules)
const good1 = `<sq-button variant="primary" size="lg">Click</sq-button>`;
const good2 = `<sq-card variant="elevated">Content</sq-card>`;
const good3 = `<sq-input label="Name" type="text" required></sq-input>`;
