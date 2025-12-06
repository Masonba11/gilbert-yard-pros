# Gilbert Yard Pros

A professional Next.js website for Gilbert Yard Pros, offering landscaping and yard maintenance services in Gilbert, Arizona.

## Features

- **Homepage** with hero section, services grid, testimonials, and FAQ
- **Services Page** listing all available services
- **15 Service Detail Pages** with comprehensive content, FAQs, and schema markup
- **Service Area Page** for Gilbert, Arizona
- **SEO Optimized** with proper meta tags, schema markup, and internal linking
- **Responsive Design** with Tailwind CSS
- **White + Green Theme** matching Yard Pros branding

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── page.tsx                    # Homepage
│   ├── layout.tsx                  # Root layout with header/footer
│   ├── globals.css                 # Global styles
│   ├── services/
│   │   ├── page.tsx               # Services listing page
│   │   └── [service]-gilbert/     # Individual service pages
│   ├── service-areas/
│   │   └── gilbert/
│   │       └── page.tsx           # Gilbert service area page
│   ├── sitemap.ts                 # Dynamic sitemap
│   └── robots.ts                  # Robots.txt
├── components/
│   ├── Header.tsx                 # Site header/navigation
│   ├── Footer.tsx                 # Site footer
│   ├── ServiceCard.tsx            # Service card component
│   ├── Breadcrumbs.tsx            # Breadcrumb navigation
│   └── InternalLinks.tsx          # Internal linking component
└── public/                        # Static assets (images, etc.)
```

## Services Included

1. Pavers
2. Artificial Turf
3. Irrigation System Installations
4. Lawn Mowing
5. Tree Trimming
6. Yard Clean Up
7. Weed Control
8. Shrub Trimming
9. Landscape Maintenance
10. Lawn Care
11. Landscape Design
12. Hardscaping
13. Landscape Lighting
14. Landscape Rock

## SEO Features

- Optimized title tags and meta descriptions
- H1 tags with target keywords
- Schema markup (LocalBusiness, Service, BreadcrumbList, WebSite)
- Internal linking structure
- Sitemap.xml
- Robots.txt

## Styling

The site uses Tailwind CSS with a custom color palette:

- Primary Green: #2E7D32
- Primary Green Dark: #1B5E20
- Primary Green Light: #4CAF50

## Notes

- Placeholder images are used throughout. Replace with actual service images in the `public` directory.
- Phone number is set to (480) 555-0123 - update with actual business number.
- Update the base URL in sitemap.ts and robots.ts when deploying.
