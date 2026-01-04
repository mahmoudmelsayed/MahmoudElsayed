# Mahmoud Elsayed — Personal Website

A minimalist, scholarly personal website built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add your images to `public/images/`:
   - `headshot.jpg` — Your professional headshot (recommended: 512x512px or larger, square aspect ratio)
     - **Required**: Replace the placeholder file with your actual headshot
   - `civi.jpg` — CIVI initiative image (recommended: 1200x600px or similar)
     - **Required**: Replace the placeholder file with your actual CIVI image
   - `BTR.jpg` — Already added (The Bitter Truth of Reality cover)
   - `certainityTrip.jpeg` — Already added (The Trip of Certainty cover)

   **Note**: The placeholder image files are empty and must be replaced with actual image files for the site to display correctly.

3. Update `content/site.ts` with your actual email address (currently set to a placeholder).

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
npm run build
npm start
```

## Content Management

All site content, links, and configuration are managed through the `content/site.ts` file. To update:

- **Personal information**: Edit the `siteConfig` object in `content/site.ts`
- **Social links**: Update the `social` object
- **Books**: Modify the `books` array
- **Resources**: Update the `resources` array (for CIVI documents)
- **Positions**: Edit the `positions` array

### Adding New Content

- **New pages**: Create new route files in the `app/` directory
- **New images**: Add to `public/images/` and reference in content config
- **New documents**: Add PDFs to `public/` and reference in `resources` array

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/
│   ├── contact/
│   ├── projects/
│   ├── writings/
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── robots.ts          # Robots.txt
│   └── sitemap.ts         # Sitemap
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ThemeToggle.tsx
├── content/               # Content configuration
│   └── site.ts            # Main content config file
├── public/                # Static assets
│   ├── images/           # Image files
│   └── *.pdf, *.docx    # Documents
└── package.json
```

## Features

- ✅ Next.js 14 App Router with TypeScript
- ✅ Tailwind CSS for styling
- ✅ Light/dark mode toggle
- ✅ Fully responsive design
- ✅ SEO optimised (metadata, OpenGraph, sitemap, robots.txt)
- ✅ Accessible (semantic HTML, keyboard navigation, ARIA labels)
- ✅ Image optimisation (next/image)
- ✅ Content-driven architecture (easy to update via config file)

## Customisation

### Colours and Typography

Edit `tailwind.config.ts` and `app/globals.css` to customise the design system.

### Theme

The site uses a class-based dark mode. The theme toggle component saves user preference to localStorage.

### Metadata

Update SEO metadata in `app/layout.tsx` and individual page metadata objects.

## Deployment

This site can be deployed to any platform that supports Next.js:

- **Vercel** (recommended): Connect your Git repository
- **Netlify**: Use the Next.js build preset
- **Self-hosted**: Run `npm run build` and `npm start`

## Notes

- All content uses British English spelling
- Content is written in first-person voice
- The design maintains a calm, scholarly, minimalist aesthetic
- Images should be optimised before adding (consider using tools like ImageOptim or Squoosh)

"# MahmoudElsayed" 
