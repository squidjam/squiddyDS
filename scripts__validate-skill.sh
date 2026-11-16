#!/usr/bin/env bash
set -euo pipefail

TARGET_FILE="${1:-skill.md}"
MISSING=0

if [[ ! -f "$TARGET_FILE" ]]; then
  echo "Missing file: $TARGET_FILE"
  exit 1
fi

require_line() {
  local PATTERN="$1"
  if ! grep -q "$PATTERN" "$TARGET_FILE"; then
    echo "Missing required pattern: $PATTERN"
    MISSING=1
  fi
}

require_line "^---$"
require_line "^name: design-system-"
require_line "^description: "
require_line "^## Mission$"
require_line "^## Style Foundations$"
require_line "^## Accessibility$"
require_line "^## Rules: Do$"
require_line "^## Rules: Don't$"
require_line "WCAG 2.2 AA"
require_line "focus-visible"
require_line "must "

LINE_COUNT="$(wc -l < "$TARGET_FILE" | tr -d ' ')"
if [[ "$LINE_COUNT" -gt 500 ]]; then
  echo "Warning: skill.md has $LINE_COUNT lines (target is under 500 when possible)."
fi

if [[ "$MISSING" -eq 1 ]]; then
  echo "Validation failed."
  exit 1
fi

echo "Validation passed."
