# Arjun Dev - AI Systems Developer Portfolio

A modern, responsive personal portfolio website built with React and Tailwind CSS, showcasing AI/GenAI expertise and projects.

## ✨ Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern Dark Theme**: Professional dark theme with cyan-emerald color scheme
- **Smooth Animations**: Implemented using Framer Motion for engaging interactions
- **Sticky Navigation**: Fixed navbar with smooth scrolling navigation
- **Interactive Sections**: 
  - Hero section with CTA buttons and social links
  - About me with professional summary and stats
  - Categorized skills with proficiency visualization
  - Featured projects with problem-solution-impact format
  - Achievements and technical milestones
  - Contact form and multiple contact methods
  - Footer with quick links
- **SEO Optimized**: Meta tags and proper semantic HTML
- **Performance Optimized**: Lazy loaded components and optimized animations

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory**
```bash
cd your-portfolio-location
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm start
```

The application will open at `http://localhost:3000`

### Available Scripts

- `npm start` - Run the development server
- `npm build` - Build the production-ready application
- `npm test` - Run tests
- `npm run deploy` - Deploy to GitHub Pages

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html                 # Main HTML file
├── src/
│   ├── components/
│   │   ├── Navbar.js             # Navigation bar with mobile menu
│   │   ├── Hero.js               # Hero section with intro
│   │   ├── About.js              # About me section
│   │   ├── Skills.js             # Skills and expertise
│   │   ├── Projects.js           # Featured projects
│   │   ├── Achievements.js       # Achievements and timeline
│   │   ├── Contact.js            # Contact form and info
│   │   └── Footer.js             # Footer with links
│   ├── App.js                     # Main application component
│   ├── index.js                   # React entry point
│   └── index.css                  # Global styles with Tailwind
├── tailwind.config.js             # Tailwind CSS configuration
├── postcss.config.js              # PostCSS configuration
├── package.json                   # Dependencies and scripts
└── README.md                      # This file
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** - Update name and tagline in `src/components/Hero.js`
```javascript
<motion.h1>Arjun Dev</motion.h1>
<motion.p>AI & GenAI Systems Developer</motion.p>
```

2. **About Section** - Update bio in `src/components/About.js`

3. **Skills** - Modify skill categories in `src/components/Skills.js`

4. **Projects** - Update project details in `src/components/Projects.js`

5. **Contact Links** - Update URLs in:
   - `src/components/Hero.js` (GitHub, LinkedIn, Email)
   - `src/components/Contact.js` (Contact form and links)
   - `src/components/Footer.js` (Social links)

### Customize Colors

Edit `tailwind.config.js` to modify the color scheme:
```javascript
colors: {
  cyan: {
    400: "#22D3EE",
    500: "#06B6D4",
  },
  emerald: {
    500: "#10B981",
  },
}
```

### Update Favicon

1. Generate a favicon from your initials or logo
2. Place it in `public/favicon.ico`
3. Update the path in `public/index.html` if needed

## 🌐 Deployment

### GitHub Pages Deployment

1. **Fork or create a new repository** on GitHub named `portfolio` or `yourusername.github.io`

2. **Update `package.json`** homepage field:
```json
"homepage": "https://yourusername.github.io/portfolio"
```
(Or just `https://yourusername.github.io` if using `yourusername.github.io` repository)

3. **Install gh-pages** (already included):
```bash
npm install --save-dev gh-pages
```

4. **Deploy to GitHub Pages**:
```bash
npm run deploy
```

5. **Enable GitHub Pages** in repository settings:
   - Go to Settings → Pages
   - Select `gh-pages` branch as the source
   - Save

6. **Access your portfolio**:
   - `https://yourusername.github.io/portfolio` (if using separate repo)
   - Or `https://yourusername.github.io` (if using dedicated repo)

### Alternative: Vercel Deployment

1. Connect your GitHub repository to [Vercel](https://vercel.com)
2. Vercel will automatically deploy on every push
3. Configure domain settings if needed

### Alternative: Netlify Deployment

1. Push code to GitHub
2. Connect repository to [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `build`

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

The portfolio is fully responsive across all breakpoints.

## 🔍 SEO Optimization

- Meta tags for description and theme color
- Semantic HTML structure
- Fast loading animations
- Proper heading hierarchy

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📦 Dependencies

- **react** - UI framework
- **react-dom** - React DOM rendering
- **framer-motion** - Animation library
- **react-scroll** - Smooth scrolling
- **react-icons** - Icon library (FiIcons)
- **tailwindcss** - Utility-first CSS framework

## 🛠️ Development Tips

### Adding New Sections

1. Create a new component in `src/components/`
2. Import in `App.js`
3. Add section ID for navigation
4. Use Framer Motion for animations
5. Maintain consistent styling with Tailwind

### Animation Best Practices

- Use `initial`, `animate`, and `whileInView` for Framer Motion
- Set `viewport={{ once: true }}` for performance
- Use `transition` for smooth animations
- Stagger children animations for visual appeal

### Performance Optimization

- Code splitting with React.lazy (optional)
- Lazy loading images
- Optimized animations to reduce jank
- Efficient re-renders with React optimization

## 📝 Content Guidelines

- Keep project descriptions concise and impactful
- Use action-oriented language (Built, Designed, Developed)
- Highlight impact and real-world use cases
- Include specific technologies used
- Add demo/GitHub links for projects

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
# Kill the process or use a different port
npm start -- --port 3001
```

### Build fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm build
```

### Deployment issues
- Ensure `homepage` is correctly set in package.json
- Check GitHub Pages settings
- Clear cache in browser (Ctrl+Shift+Delete)

## 📞 Contact & Support

For portfolio customization help, refer to the customization section above.

## 📄 License

This portfolio template is open source and available under the MIT License.

---

**Built with ❤️ using React, Tailwind CSS, and Framer Motion**
