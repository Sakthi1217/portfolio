# Deployment Guide - GitHub Pages

This guide provides step-by-step instructions to deploy your portfolio to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed locally
- Node.js and npm installed

## Step 1: Create a GitHub Repository

### Option A: Using a dedicated portfolio repository

1. Go to [github.com/new](https://github.com/new)
2. Create a new repository named `portfolio`
3. Set it to Public
4. Click "Create repository"

### Option B: Using your username repository

1. Create a repository named `yourusername.github.io`
2. This automatically becomes your GitHub Pages site

## Step 2: Update Configuration

Edit `package.json` with your correct homepage URL:

```json
{
  "homepage": "https://yourusername.github.io/portfolio"
}
```

Or if using the dedicated `yourusername.github.io` repo:

```json
{
  "homepage": "https://yourusername.github.io"
}
```

## Step 3: Initialize Git (if not already done)

```bash
# Navigate to your project
cd your-portfolio-location

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial portfolio commit"

# Add remote repository
git remote add origin https://github.com/yourusername/portfolio.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 4: Deploy to GitHub Pages

```bash
# Install dependencies (if not already done)
npm install

# Build the production version
npm run build

# Deploy using gh-pages
npm run deploy
```

This command will:
1. Build the React app for production
2. Create a new `gh-pages` branch
3. Push the build folder to GitHub Pages

## Step 5: Configure GitHub Pages

1. Go to your repository settings
2. Navigate to **Settings → Pages**
3. Under "Build and deployment" section:
   - Source: Select `Deploy from a branch`
   - Branch: Select `gh-pages`
   - Folder: Select `/root`
4. Click **Save**

## Step 6: Access Your Portfolio

Wait 2-5 minutes for GitHub Pages to process, then visit:

- `https://yourusername.github.io/portfolio` (for portfolio repo)
- `https://yourusername.github.io` (for yourusername.github.io repo)

## Updating Your Portfolio

After making changes:

```bash
# Make your changes to the code

# Commit your changes
git add .
git commit -m "Update portfolio content"

# Push to GitHub
git push

# Deploy the new version
npm run deploy
```

## Troubleshooting

### Deploy command not found
```bash
npm install --save-dev gh-pages
```

### Changes not appearing
1. Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
2. Wait 5 minutes for GitHub Pages to rebuild
3. Check if `gh-pages` branch exists in repository

### 404 Error
1. Verify `homepage` URL in `package.json`
2. Check GitHub Pages settings are correct
3. Ensure `gh-pages` branch is selected in Pages settings

### Custom domain setup

To use a custom domain (e.g., `www.arjundev.com`):

1. Create a `CNAME` file in `public/` folder with your domain:
```
www.arjundev.com
```

2. Update your domain DNS settings to point to GitHub Pages
3. Follow GitHub's [custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## Performance Tips

- The GitHub Pages deployment is cached and served via CDN
- Deployments are fast and reliable
- Site will be available worldwide

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Troubleshooting GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-common-issues-with-github-pages)

---

**Your portfolio is now live and accessible to the world!**
