# Hoor Fayaz - AI/ML Engineer Portfolio

A premium, highly visual, modern personal portfolio website for Hoor Fayaz, an AI/ML Engineer specializing in Computer Vision, Deep Learning, and LLM/RAG applications.

## 🚀 Tech Stack

- **Framework**: Next.js 16.3.6 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React + Custom SVG Icons
- **Deployment**: Ready for Vercel

## ✨ Features

- **Premium Dark Theme**: Sophisticated near-black background with electric blue/violet accents
- **Interactive Neural Network Visualization**: Canvas-based animated background in hero section
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion-powered micro-interactions and page transitions
- **Project Showcase**: Featured projects with case study modals
- **Technical Skills Visualization**: Interactive skill categories
- **Experience Timeline**: Vertical timeline with alternating layout
- **SEO Optimized**: Proper meta tags and Open Graph metadata
- **Accessibility**: ARIA labels, keyboard navigation, and reduced-motion support
- **Performance**: Optimized build with static generation

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and theme variables
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── Navigation.tsx       # Sticky navigation with mobile menu
│   ├── Hero.tsx             # Hero section with neural network visualization
│   ├── SelectedWork.tsx     # Project showcase with case studies
│   ├── Experience.tsx      # Experience timeline
│   ├── About.tsx            # About section with ML lifecycle
│   ├── Skills.tsx           # Technical skills visualization
│   ├── Education.tsx        # Education and certifications
│   ├── Achievements.tsx     # Awards and volunteer work
│   ├── TechnicalStats.tsx   # Metrics strip
│   ├── Contact.tsx          # Contact section
│   ├── Footer.tsx           # Footer component
│   └── icons/
│       ├── GitHubIcon.tsx   # Custom GitHub icon
│       └── LinkedInIcon.tsx # Custom LinkedIn icon
```

## 🎨 Design System

### Colors
- **Background**: `#070707` (Near-black)
- **Primary Text**: `#F5F5F5` (Soft off-white)
- **Secondary Text**: `#A1A1AA` (Muted gray)
- **Borders**: `rgba(255,255,255,0.08)` (Subtle white)
- **Accent Primary**: `#6366f1` (Electric blue)
- **Accent Secondary**: `#8b5cf6` (Violet)
- **Accent Gradient**: Linear gradient from `#6366f1` to `#8b5cf6`

### Typography
- **Font Family**: Geist Sans (system-ui fallback)
- **Headings**: Large, bold, editorial style
- **Body**: Clean, readable with proper line height
- **Monospace**: Geist Mono for technical labels

### Visual Elements
- **Noise Texture**: Subtle SVG-based noise overlay
- **Glass Effects**: Backdrop blur for navigation and modals
- **Gradients**: Sophisticated accent gradients
- **Borders**: Thin, subtle borders with hover states
- **Animations**: Smooth, intentional micro-interactions

## 🛠️ Development

### Prerequisites
- Node.js 20+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

### Development Server

The development server runs on `http://localhost:3000` by default.

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Deploy with one click

### Manual Deployment

```bash
# Build the project
npm run build

# The output will be in the .next directory
# Deploy the .next directory and public folder to your hosting provider
```

## 🌐 Environment Variables

No environment variables are required for basic functionality. The following can be added for future enhancements:

```env
# Optional: Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Optional: Contact Form
CONTACT_FORM_ENDPOINT=your-form-endpoint
```

## 📝 Content Management

### Personal Information
Update personal details in:
- `src/app/layout.tsx` - Metadata and SEO
- Component files - Contact information and social links

### Projects
Update project data in `src/components/SelectedWork.tsx`:
- Add new projects to the `projects` array
- Update GitHub URLs when available
- Add demo URLs when available

### Experience
Update experience data in `src/components/Experience.tsx`:
- Add new positions to the `experiences` array
- Update company information and periods

### Skills
Update skills in `src/components/Skills.tsx`:
- Modify the `skillCategories` array
- Add new skill categories as needed

## 🎯 Performance Optimization

- **Static Generation**: Pages are pre-rendered at build time
- **Image Optimization**: Next.js Image component (when images are added)
- **Code Splitting**: Automatic code splitting by Next.js
- **Tree Shaking**: Unused code is eliminated during build
- **CSS Optimization**: Tailwind CSS purges unused styles

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators
- Reduced motion support via `prefers-reduced-motion`
- Sufficient color contrast
- Screen reader friendly

## 🔒 Security

- No sensitive data in client-side code
- Secure external links with `rel="noopener noreferrer"`
- Proper meta tags for security
- CSP headers can be added via Next.js config

## 📄 License

This portfolio is built for personal use. All content and code are the property of Hoor Fayaz.

## 🤝 Contributing

This is a personal portfolio and is not currently accepting contributions. However, feel free to use this as a template for your own portfolio.

## 📧 Contact

- **Email**: hoorf2004@gmail.com
- **LinkedIn**: https://linkedin.com/in/hoor-fayaz
- **GitHub**: https://github.com/Hoor-Fayaz

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS