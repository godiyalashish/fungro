#!/bin/bash
# Start the development server with the port from environment
echo "Starting Funngro Clone development server..."
echo "Using PORT=${PORT:-5000}"

# Use the PORT environment variable if set, otherwise default to 5000
VITE_PORT=${PORT:-5000}

npx vite --host 0.0.0.0 --port $VITE_PORT