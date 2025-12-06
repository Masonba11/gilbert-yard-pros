#!/bin/bash
# Script to push code to GitHub

echo "🚀 Pushing Gilbert Yard Pros to GitHub..."
echo ""
echo "Before running this script:"
echo "1. Create a new repository on GitHub at https://github.com/new"
echo "2. Name it: gilbert-yard-pros (or your preferred name)"
echo "3. DO NOT initialize with README, .gitignore, or license"
echo "4. Copy the repository URL (e.g., https://github.com/YOUR_USERNAME/gilbert-yard-pros.git)"
echo ""
read -p "Enter your GitHub repository URL: " REPO_URL

if [ -z "$REPO_URL" ]; then
  echo "❌ No URL provided. Exiting."
  exit 1
fi

echo ""
echo "📦 Adding remote origin..."
git remote add origin "$REPO_URL" 2>/dev/null || git remote set-url origin "$REPO_URL"

echo "📤 Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
  echo ""
  echo "✅ Successfully pushed to GitHub!"
  echo ""
  echo "Next steps:"
  echo "1. Go to https://vercel.com and sign in with GitHub"
  echo "2. Click 'Add New...' → 'Project'"
  echo "3. Import your 'gilbert-yard-pros' repository"
  echo "4. Click 'Deploy' (Vercel will auto-detect Next.js)"
  echo "5. After deployment, copy the Vercel URL"
  echo "6. Go to your GitHub repo → Click gear icon next to 'About'"
  echo "7. Paste the Vercel URL in the 'Website' field"
  echo "8. Click 'Save changes'"
else
  echo "❌ Failed to push. Please check your repository URL and try again."
fi


