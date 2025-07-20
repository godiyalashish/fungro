#!/usr/bin/env node
import { exec } from 'child_process';

// Start Vite with host and port configuration for Replit
const viteCommand = 'npx vite --host 0.0.0.0 --port 5000';

console.log('Starting Funngro Clone development server...');
console.log(`Running: ${viteCommand}`);

const viteProcess = exec(viteCommand, {
  cwd: process.cwd()
});

viteProcess.stdout.on('data', (data) => {
  process.stdout.write(data);
});

viteProcess.stderr.on('data', (data) => {
  process.stderr.write(data);
});

viteProcess.on('close', (code) => {
  console.log(`Vite server exited with code ${code}`);
  process.exit(code);
});

viteProcess.on('error', (err) => {
  console.error('Failed to start Vite server:', err);
  process.exit(1);
});