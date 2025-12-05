# INVENTUM 2K26 - React Website 

Modern React + Vite website for INVENTUM 2K26 college fest with Stranger Things theme.

##  Features

-  Built with React 19 & Vite
-  Stranger Things dark theme with red neon effects
-  Fast hot module replacement (HMR)
-  Fully responsive design
-  Live countdown timer to event
-  React Router for smooth navigation
-  Dynamic event listings
-  Photo gallery with animations

##  Project Structure

\\\
inventum-react/
 public/
    images/          # All event images
 src/
    pages/           # Page components
       Index.jsx    # Landing page with countdown
       Dashboard.jsx
       Tech.jsx     # Technical events
       Talent.jsx   # Talent expo events
       Gallery.jsx
       Contact.jsx
    styles/          # CSS files
       global.css
       index.css
       dashboard.css
       tech.css
       gallery.css
       contact.css
    App.jsx          # Main app with routing
    main.jsx         # Entry point
 package.json

\\\

##  Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn

### Installation

1. **Install dependencies:**
   \\\ash
   npm install
   \\\

2. **Start development server:**
   \\\ash
   npm run dev
   \\\

3. **Open in browser:**
   Navigate to \http://localhost:5173\

### Build for Production

\\\ash
npm run build
\\\

Preview production build:
\\\ash
npm run preview
\\\

##  Pages

- **/** - Landing page with countdown timer
- **/dashboard** - Main navigation hub
- **/tech** - Technical events (ML Hackathon, Coding, Projects)
- **/talent** - Talent expo (Ad Mad, Photography, Art)
- **/gallery** - Photo gallery
- **/contact** - Contact info & location map

##  Theme Features

### Stranger Things Aesthetic
- Deep black backgrounds (#000000)
- Red neon glow effects (#ff0000)
- Flickering text animations
- Scanline overlay effects
- Dark atmospheric gradients
- Retro 80s typography

##  Tech Stack

- **React 19** - UI library
- **Vite** - Build tool & dev server
- **React Router DOM** - Client-side routing
- **CSS3** - Styling with animations
- **ESLint** - Code quality

##  Deployment

### Deploy to Vercel

1. Install Vercel CLI:
   \\\ash
   npm install -g vercel
   \\\

2. Deploy:
   \\\ash
   vercel
   \\\

### Deploy to Netlify

1. Build the project:
   \\\ash
   npm run build
   \\\

2. Deploy \dist/\ folder to Netlify

### Deploy to GitHub Pages

1. Install gh-pages:
   \\\ash
   npm install --save-dev gh-pages
   \\\

2. Add to package.json:
   \\\json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   \\\

3. Deploy:
   \\\ash
   npm run deploy
   \\\

##  Event Details

- **Date:** January 8 & 9, 2026
- **Venue:** ANITS Campus
- **Events:** 10+ technical & talent competitions

##  Contact

- **Rahul varma mudunuru:** 9640422382

- **Email:** inventum@anits.edu.in

##  Development

### Available Scripts

- \
pm run dev\ - Start dev server
- \
pm run build\ - Build for production
- \
pm run preview\ - Preview production build
- \
pm run lint\ - Run ESLint

### Hot Module Replacement

Vite provides instant HMR - your changes appear immediately without full page reload!

##  Future Enhancements

- [ ] Add event registration forms
- [ ] Integrate backend API
- [ ] Add animation library (Framer Motion)
- [ ] PWA support
- [ ] Dark/Light mode toggle
- [ ] Admin dashboard

##  License

MIT License - feel free to use for your college fest!

---

**Built with  for INVENTUM 2K26**
