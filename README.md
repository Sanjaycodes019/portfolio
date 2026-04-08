# Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

Responsive Design optimized for all devices (mobile, tablet, desktop)
Dark Mode toggle between light and dark themes
Smooth Animations scroll-triggered animations and micro-interactions
Contact Section enhanced contact information with copy-to-clipboard functionality
Project Showcase dynamic project cards with live links and GitHub repositories
Skills Display organized skill categories with visual progress indicators
Education and Achievements academic background and accomplishments
Social Links integrated social media profiles

## Tech Stack

### Frontend
React 19 UI framework
Vite build tool and development server
Tailwind CSS utility-first CSS framework
PostCSS CSS processing

### Icons and Assets
React Icons icon library
Custom SVGs custom illustrations and icons

## Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── certificates/      # Certificate PDF files
│   ├── profile.jpeg       # Profile image
│   └── resume.pdf         # Resume file
├── src/
│   ├── components/        # Reusable React components
│   │   ├── About.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   └── ...
│   ├── pages/             # Page components for routing
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   └── ...
│   ├── data/              # Static data
│   │   └── profile.js
│   ├── hooks/             # Custom React hooks
│   ├── contexts/          # React contexts
│   └── styles/            # Custom styles
├── index.html              # Main HTML file
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
└── tailwind.config.js     # Tailwind CSS configuration
```

## Getting Started

1. Clone the repository
2. Install dependencies with npm install
3. Start the development server with npm run dev
4. Open your browser and navigate to http://localhost:5173

## Available Scripts

npm run dev starts the development server
npm run build builds the project for production
npm run preview previews the production build
npm run analyze analyzes the bundle size

## Performance Optimizations

Code splitting with lazy loading for routes
Bundle optimization with manual chunks
SEO optimization with dynamic meta tags
Image optimization with lazy loading
Preloading of critical resources

## Browser Support

Chrome latest versions
Firefox latest versions
Safari latest versions
Edge latest versions

## License

MIT License
