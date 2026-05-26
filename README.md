# Digital Art Showcase

A modern, responsive portfolio website for digital artists built with Next.js, React, and Tailwind CSS.

## Features

✨ **Modern Design**
- Clean, oldrich-inspired dark theme
- Smooth animations with Framer Motion
- Fully responsive design (mobile, tablet, desktop)
- Gradient accents and custom styling

🎨 **Sections**
- **Home**: Hero section with featured works and about preview
- **Gallery**: Filterable portfolio grid with categories
- **About**: Detailed artist information and experience
- **Contact**: Contact form and information

🚀 **Technical Stack**
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- React Icons

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/thana012222/digital-art-showcase.git
cd digital-art-showcase

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── gallery/
│   │   └── page.tsx        # Gallery page
│   ├── about/
│   │   └── page.tsx        # About page
│   └── contact/
│       └── page.tsx        # Contact page
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── FeaturedWorks.tsx   # Featured works grid
│   ├── About.tsx           # About section
│   ├── CTA.tsx             # Call-to-action
│   └── Footer.tsx          # Footer
```

## Customization

### Colors
Edit colors in `tailwind.config.js`:
- Change `accent` color to your brand color
- Modify `dark` and `dark-light` for theme background

### Content
- Update artwork data in `src/components/FeaturedWorks.tsx`
- Modify artist info in About pages
- Update contact information in `src/app/contact/page.tsx`

### Images
Replace placeholder images with your artwork in:
- `src/components/FeaturedWorks.tsx`
- `src/app/gallery/page.tsx`

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Click Deploy

### Alternative Hosting
- Netlify
- GitHub Pages
- Any Node.js hosting provider

## Future Enhancements

- [ ] Backend API for dynamic artwork uploads
- [ ] Admin panel for content management
- [ ] Comment system on artworks
- [ ] Dark/Light mode toggle
- [ ] Search and advanced filtering
- [ ] Social media integration
- [ ] Newsletter subscription
- [ ] Analytics integration

## License

MIT License - feel free to use this template for your portfolio

## Support

If you have questions or need help customizing this template, feel free to open an issue!
