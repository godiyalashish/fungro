#!/bin/bash
export PORT=5000
export HOST=0.0.0.0
export VITE_PORT=5000
export VITE_HOST=0.0.0.0

echo "Starting development server with port 5000..."
exec npx vite --host 0.0.0.0 --port 5000