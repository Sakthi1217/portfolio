# Quick Setup Guide

Get your portfolio running in 5 minutes!

## Prerequisites Check

Ensure you have:
- Node.js (v14+) - [Download](https://nodejs.org/)
- npm (comes with Node.js)
- Git (optional, for GitHub deployment) - [Download](https://git-scm.com/)

Verify installation:
```bash
node --version
npm --version
```

## Step 1: Install Dependencies (1 minute)

```bash
npm install
```

This installs all required packages:
- React
- Tailwind CSS
- Framer Motion
- React Icons
- React Scroll
- gh-pages (for deployment)

## Step 2: Start Development Server (1 minute)

```bash
npm start
```

The portfolio opens automatically at `http://localhost:3000`

## Step 3: Customize Your Content (2 minutes)

Open the following files and add your information:

1. **Your Name & Title**
   - File: `src/components/Hero.js`
   - Lines: 25-32

2. **About You**
   - File: `src/components/About.js`
   - Lines: 25-50

3. **Your Skills**
   - File: `src/components/Skills.js`
   - Lines: 10-35

4. **Your Projects**
   - File: `src/components/Projects.js`
   - Lines: 10-50

5. **Contact Information**
   - File: `src/components/Contact.js`
   - Lines: 10-35

See `CUSTOMIZATION.md` for detailed instructions.

## Step 4: Deploy to GitHub Pages (1 minute)

### Setup GitHub Repository

1. Create a repository on GitHub:
   - Go to [github.com/new](https://github.com/new)
   - Name it `portfolio`
   - Make it Public

2. Update `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/portfolio"
   ```

3. Push code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/yourusername/portfolio.git
   git branch -M main
   git push -u origin main
   ```

### Deploy

```bash
npm run deploy
```

### Enable on GitHub

1. Go to repository Settings → Pages
2. Select `gh-pages` branch
3. Save

Your portfolio is now live at: `https://yourusername.github.io/portfolio`

## Common Commands

```bash
# Start development server
npm start

# Build for production
npm build

# Deploy to GitHub Pages
npm run deploy

# Install new package
npm install package-name
```

## File Structure

```
src/
├── components/
│   ├── Navbar.js           # Navigation menu
│   ├── Hero.js             # Your intro
│   ├── About.js            # About section
│   ├── Skills.js           # Skills display
│   ├── Projects.js         # Projects showcase
│   ├── Achievements.js     # Achievements
│   ├── Contact.js          # Contact form
│   └── Footer.js           # Footer
├── App.js                  # Main component
├── index.js                # React entry point
└── index.css               # Global styles
```

## Troubleshooting

### Port 3000 in use
```bash
npm start -- --port 3001
```

### Dependency issues
```bash
rm -rf node_modules package-lock.json
npm install
```

### Changes not showing after deploy
```bash
# Hard refresh browser
Ctrl+Shift+Delete (Windows)
Cmd+Shift+Delete (Mac)
```

## Next Steps

1. ✅ Install dependencies
2. ✅ Run development server
3. ✅ Customize content
4. ✅ Build and deploy
5. ✅ Share your portfolio!

## Additional Resources

- **Detailed Deployment**: See `DEPLOYMENT.md`
- **Full Customization**: See `CUSTOMIZATION.md`
- **Main README**: See `README.md`

## Need Help?

- Check `CUSTOMIZATION.md` for content updates
- Check `DEPLOYMENT.md` for deployment issues
- Review component files for structure
- Visit project GitHub: [github.com/yourusername/portfolio](https://github.com/yourusername)

---

**Your portfolio is now ready to showcase your AI/GenAI expertise to the world!** 🚀
