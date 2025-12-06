# Deployment Instructions

## GitHub Repository Setup

1. **Create a new GitHub repository:**

   - Go to https://github.com/new
   - Repository name: `gilbert-yard-pros` (or your preferred name)
   - Description: "Professional landscaping services website for Gilbert, Arizona"
   - Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
   - Click "Create repository"

2. **Push code to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/gilbert-yard-pros.git
   git branch -M main
   git push -u origin main
   ```

## Vercel Deployment

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel:**

   - Visit https://vercel.com
   - Sign in with your GitHub account

2. **Import Project:**

   - Click "Add New..." → "Project"
   - Import your `gilbert-yard-pros` repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Configure Settings:**

   - Framework Preset: Next.js (auto-detected)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

4. **After Deployment:**
   - Vercel will provide a URL like: `https://gilbert-yard-pros.vercel.app`
   - Copy this URL

### Option 2: Deploy via Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts to link your project.

## Update GitHub Repository About Section

1. **Go to your GitHub repository**
2. **Click the gear icon** next to "About" on the right sidebar
3. **Add Website URL:**
   - Paste your Vercel deployment URL (e.g., `https://gilbert-yard-pros.vercel.app`)
   - Click "Save changes"

The URL will now appear in the repository's About section.

## Environment Variables (if needed)

If you need to add environment variables later:

- Go to Vercel Dashboard → Your Project → Settings → Environment Variables
- Add any required variables

## Custom Domain (Optional)

To add a custom domain:

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your domain
3. Follow DNS configuration instructions

