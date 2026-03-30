# Customization Guide

This guide explains how to personalize every aspect of your portfolio to match your profile.

## 📝 Content Updates

### 1. Hero Section

**File**: `src/components/Hero.js`

Update your name, title, and tagline:

```javascript
// Line ~25 - Name
<motion.h1>
  <span className="gradient-text">Your Name</span>
</motion.h1>

// Line ~28 - Title
<motion.p className="text-2xl sm:text-3xl text-cyan-400">
  Your Job Title
</motion.p>

// Line ~32 - Tagline
<motion.p className="text-lg sm:text-xl text-slate-300">
  Your professional tagline/summary
</motion.p>
```

Update social links:

```javascript
// GitHub link (Line ~42)
<a href="https://github.com/yourusername">Visit GitHub</a>

// LinkedIn link (Line ~56)
<a href="https://linkedin.com/in/yourusername">

// Email (Line ~64)
<a href="mailto:your.email@example.com">
```

### 2. About Section

**File**: `src/components/About.js`

Replace the about text (lines ~25-50):

```javascript
<p>
  Write your professional summary here. 
  Include your experience, specialties, and what drives you.
</p>
```

Update statistics (lines ~60-67):

```javascript
{ number: 'X+', label: 'Your Metric' }
```

### 3. Skills Section

**File**: `src/components/Skills.js`

Modify skill categories (lines ~10-35):

```javascript
const skillCategories = [
  {
    title: 'Your Category',
    skills: ['Skill 1', 'Skill 2', 'Skill 3'],
    color: 'from-cyan-500 to-cyan-600',
  },
  // Add more categories...
];
```

Update proficiency items (lines ~110-120):

```javascript
{ label: 'Your Skill', percentage: 90 }
```

### 4. Projects Section

**File**: `src/components/Projects.js`

Update projects array (lines ~10-50):

```javascript
const projects = [
  {
    id: 1,
    title: 'Project Title',
    problem: 'What problem did you solve?',
    solution: 'How did you solve it?',
    tech: ['Tech 1', 'Tech 2'],
    impact: 'What was the impact?',
    github: 'https://github.com/yourusername/project-name',
    demo: 'https://project-demo.com',
    color: 'from-cyan-500 to-blue-500',
  },
];
```

### 5. Achievements Section

**File**: `src/components/Achievements.js`

Update achievements (lines ~10-30):

```javascript
const achievements = [
  {
    title: 'Your Achievement',
    description: 'Description of what you achieved',
    icon: FiAward,
    color: 'from-cyan-500 to-blue-500',
  },
];
```

Update timeline milestones (lines ~85-95):

```javascript
{ year: '2024', milestone: 'Your milestone here' }
```

### 6. Contact Section

**File**: `src/components/Contact.js`

Update contact methods (lines ~10-35):

```javascript
const contactMethods = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'your.email@example.com',
    link: 'mailto:your.email@example.com',
    color: 'from-cyan-500 to-blue-500',
  },
  // Update other contacts...
];
```

Update form handling (lines ~7-30) if needed for backend form submission.

### 7. Footer Section

**File**: `src/components/Footer.js`

Update footer description (lines ~20-25):

```javascript
<p className="text-slate-400 text-sm leading-relaxed">
  Your personal description here...
</p>
```

Update social links (lines ~41-46):

```javascript
{ icon: FiGithub, label: 'GitHub', link: 'https://github.com/yourusername' }
```

## 🎨 Design Customization

### Color Scheme

**File**: `tailwind.config.js`

Modify colors section (lines ~10-25):

```javascript
colors: {
  slate: {
    900: "#0F172A",  // Background
    800: "#1E293B",
    700: "#334155",
  },
  cyan: {
    400: "#22D3EE",  // Primary highlight
    500: "#06B6D4",
  },
  emerald: {
    500: "#10B981",  // Secondary accent
  },
}
```

### Fonts

Add custom fonts in `public/index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@400;700&display=swap" rel="stylesheet">
```

Then update `src/index.css`:

```css
body {
  font-family: 'Your Font', sans-serif;
}
```

### Spacing & Layout

Edit `tailwind.config.js` theme section to adjust:
- Padding: `padding`, `space`
- Margins: `margin`
- Gaps: `gap`

## 🖼️ Assets

### Favicon

1. Generate a favicon from your name or logo
   - Use: [favicon-generator.org](https://www.favicon-generator.org/)
   - Or: [realfavicongenerator.net](https://realfavicongenerator.net/)

2. Place `favicon.ico` in `public/` folder

3. Update reference in `public/index.html`:
```html
<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
```

### Profile Image (Optional)

To add a profile picture:

1. Create `public/profile.jpg`

2. Add to Hero section in `src/components/Hero.js`:
```javascript
<motion.img
  src="/profile.jpg"
  alt="Profile"
  className="w-40 h-40 rounded-full border-4 border-cyan-500"
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
/>
```

## 🔗 Links & URLs

Replace all placeholder URLs:

**Find and replace**:
- `yourusername` → Your GitHub username
- `your.email@example.com` → Your email
- `https://linkedin.com/in/yourusername` → Your LinkedIn profile
- `#` → Actual demo link (for projects)

Quick list of places to update:
- `src/components/Hero.js` - Social links and CTA buttons
- `src/components/Projects.js` - Project links
- `src/components/Contact.js` - Contact methods
- `src/components/Footer.js` - Social links
- `package.json` - Homepage URL

## 📱 Responsive Adjustments

For mobile-specific styling, use Tailwind breakpoints:

```javascript
// sm: (640px), md: (768px), lg: (1024px), xl: (1280px)
<div className="text-sm sm:text-base md:text-lg">
  Text that scales based on screen size
</div>
```

## 🎬 Animation Tweaks

Adjust animation timings in components:

```javascript
motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}  // Change this value
  viewport={{ once: true }}
```

## ✅ Verification Checklist

After customizing, verify:

- [ ] Name and title are correct
- [ ] All social links work
- [ ] Email form sends correctly
- [ ] Project links point to real repositories
- [ ] No broken images
- [ ] Responsive on mobile (use DevTools)
- [ ] All text is spell-checked
- [ ] Color scheme looks professional
- [ ] Navigation links work smoothly
- [ ] Footer links are updated

## 🚀 Getting Feedback

Before deploying:

1. Share locally: `npm start` and test all links
2. Check on multiple devices
3. Test contact form
4. Verify speed with DevTools Lighthouse
5. Ask for feedback from colleagues

## 📚 Additional Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [React Icons Gallery](https://react-icons.github.io/react-icons/)

---

**Done customizing? Time to deploy!** 🎉

See `DEPLOYMENT.md` for deployment instructions.
