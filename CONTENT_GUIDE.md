# Content Editing Guide

This guide explains how to update content on your website without touching component code.

## Main Configuration File

All content is managed in `content/site.ts`. Open this file to update:

### Personal Information

```typescript
name: "Mahmoud Elsayed",
title: "Mahmoud Elsayed — Neuroscientist, Writer, Researcher",
description: "Your site description here",
url: "https://mahmoudelsayed.com",
email: "your.email@example.com", // ⚠️ UPDATE THIS with your actual email
```

### Social Links

Update the `social` object:

```typescript
social: {
  linkedin: "https://www.linkedin.com/in/elsayedmahmoud/",
  googleScholar: "https://scholar.google.com/...",
  instagram: "https://www.instagram.com/...",
  // Optional:
  github: "https://github.com/...",
  twitter: "https://twitter.com/...",
}
```

### Books

Add or edit books in the `books` array:

```typescript
books: [
  {
    title: "Book Title",
    description: "2-3 sentence description",
    purchaseLink: "https://...", // Optional
    goodreadsLink: "https://...", // Optional
    videoLink: "https://...", // Optional
    coverImage: "/images/book-cover.jpg",
  },
]
```

**To add a new book:**
1. Add the cover image to `public/images/`
2. Add a new object to the `books` array
3. Reference the image path (e.g., `/images/newbook.jpg`)

### Resources (CIVI Documents)

Add PDFs or other resources:

```typescript
resources: [
  {
    title: "Resource Title",
    url: "/filename.pdf", // Must be in public/ folder
    description: "Optional description",
  },
]
```

**To add a new resource:**
1. Place the PDF/document in the `public/` folder
2. Add a new object to the `resources` array
3. Reference the file path (e.g., `/new-document.pdf`)

### Positions & Affiliations

Update the `positions` array:

```typescript
positions: [
  "PhD Candidate in Neuroscience",
  "Research Associate, St. Joseph's Healthcare Hamilton",
  // Add or remove positions as needed
]
```

## Images

### Required Images

Place these in `public/images/`:

- **headshot.jpg** — Your professional headshot (square, 512x512px or larger)
- **civi.jpg** — CIVI initiative image (1200x600px recommended)

### Book Covers

- Already added: `BTR.jpg`, `certainityTrip.jpeg`
- Add new book covers to `public/images/` and reference in the books array

## Page-Specific Content

Most content is in `content/site.ts`, but some page-specific text is in the page files:

- **Home page text**: `app/page.tsx` (first-person bio text)
- **About page text**: `app/about/page.tsx` (about section text)
- **Projects/CIVI text**: `app/projects/page.tsx` (CIVI description)
- **Writings page**: Pulls from `siteConfig.books`

To update these texts, edit the respective page files directly.

## After Making Changes

1. Save the file
2. The development server will automatically reload (if running `npm run dev`)
3. Check your browser to see the changes

## Need Help?

- See `README.md` for installation and development instructions
- Check the Next.js documentation for component structure
- All styling uses Tailwind CSS classes

