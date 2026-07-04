#!/bin/sh
set -eu
mkdir -p /github/workspace/.fidelity
printf 'main|env=%s|arg=%s\n' "${MANIFEST_ENV:-}" "${1:-}" >> /github/workspace/.fidelity/lifecycle.log
