#!/bin/bash
cd /home/ayoub3bidi/projects/open-source/portfolio

# Clean install
echo "=== Cleaning up dependencies ==="
rm -rf node_modules pnpm-lock.yaml

echo "=== Installing dependencies ==="
pnpm install

echo "=== Running dev server ==="
pnpm dev
