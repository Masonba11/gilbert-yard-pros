#!/bin/bash
# Quick fix script for when styles disappear in Next.js

echo "Stopping all Next.js processes..."
pkill -9 -f "next" 2>/dev/null
sleep 2

echo "Clearing all caches..."
rm -rf .next node_modules/.cache .swc 2>/dev/null

echo "Starting dev server..."
npm run dev

