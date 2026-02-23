#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="/Users/adamkrueger/Project Files/Codex Projects/KRUXD v2"
PORT="${1:-4321}"

cd "$PROJECT_DIR"

echo "Starting KRUXD locally at http://localhost:${PORT}/"
npm run dev -- --port "$PORT"
