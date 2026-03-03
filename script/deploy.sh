#!/bin/bash
echo "🚀 Deploying to Vercel..."

if [ -z "$VERCEL_DEPLOY_HOOK" ]; then
  echo "❌ Error: VERCEL_DEPLOY_HOOK is not set"
  exit 1
fi

response=$(curl -s -o /dev/null -w "%{http_code}" -X POST "$VERCEL_DEPLOY_HOOK")

if [ "$response" = "200" ] || [ "$response" = "201" ]; then
  echo "✅ Deploy triggered successfully! Check your Vercel dashboard for progress."
else
  echo "❌ Deploy failed with status code: $response"
  exit 1
fi
