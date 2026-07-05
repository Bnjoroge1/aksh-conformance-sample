#!/bin/sh
set -eu

MESSAGE="${1:-missing-message}"

echo "docker action message: ${MESSAGE}"

if [ -z "${GITHUB_OUTPUT:-}" ]; then
  echo "GITHUB_OUTPUT is missing" >&2
  exit 1
fi

echo "docker-result=${MESSAGE}" >> "$GITHUB_OUTPUT"

echo "PASS: docker action ran"
echo "PASS: docker action wrote output"
