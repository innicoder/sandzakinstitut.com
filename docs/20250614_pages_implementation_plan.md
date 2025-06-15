# Sandzak Institut Website - Pages Implementation Plan

## Overview
Plan for implementing remaining pages following established patterns and maintaining consistency with existing Bosnian language content.

## Page Hierarchy & URLs

### 1. Research Section (/istrazivanja)
- **Main page** `/istrazivanja` - Overview of research activities
- **Publications** `/istrazivanja/publikacije` - List of research papers and studies
- **Projects** `/istrazivanja/projekti` - Current and past research projects
- **Database** `/istrazivanja/podaci` - Statistical data about the region
- **Collaboration** `/istrazivanja/saradnja` - Partnership opportunities

### 2. News Section
- **News listing** `/vijesti` - Blog/news articles with pagination
- **Individual articles** `/vijesti/[slug]` - Dynamic route for articles

### 3. Events Section
- **Events listing** `/dogadjaji` - Upcoming and past events

### 4. About Sub-pages
- **Mission & Vision** `/o-nama/misija` - Detailed mission/vision (redirect to main about)
- **Team** `/o-nama/tim` - Staff profiles and expertise
- **History** `/o-nama/historija` - Detailed timeline (redirect to main about)

### 5. Footer Pages
- **Media** `/mediji` - Press kit and media resources
- **Newsletter** `/newsletter` - Newsletter subscription page
- **Privacy Policy** `/privatnost` - Legal privacy policy
- **FAQ** `/pitanja` - Frequently asked questions

## Implementation Priority

### Phase 1: Core Content Pages (High Priority)
1. `/istrazivanja` - Research main page
2. `/istrazivanja/publikacije` - Publications listing
3. `/vijesti` - News listing
4. `/dogadjaji` - Events page
5. `/o-nama/tim` - Team page

### Phase 2: Supporting Pages (Medium Priority)
1. `/istrazivanja/projekti` - Projects page
2. `/mediji` - Media resources
3. `/privatnost` - Privacy policy
4. `/pitanja` - FAQ page

### Phase 3: Feature Pages (Lower Priority)
1. `/istrazivanja/podaci` - Database page
2. `/istrazivanja/saradnja` - Collaboration page
3. `/newsletter` - Newsletter subscription
4. Individual news article pages

## Design Patterns to Follow

### Page Structure
```tsx
<>
  {/* Hero Section */}
  <section className="bg-muted/50 py-16 md:py-24">
    <div className="container">
      <div className="mx-auto max-w-3xl text-center">
        <h1>Page Title</h1>
        <p>Page description</p>
      </div>
    </div>
  </section>

  {/* Main Content */}
  <section className="py-16 md:py-24">
    <div className="container">
      {/* Content here */}
    </div>
  </section>

  {/* CTA Section (if needed) */}
  <section className="bg-primary py-16 text-primary-foreground">
    {/* Call to action */}
  </section>
</>
```

### Component Usage
- Use `Card` components for content blocks
- Use `Button` with consistent variants
- Icons from `lucide-react`
- Consistent spacing: `py-16 md:py-24` for sections
- Container max widths: `max-w-3xl` for centered content, `max-w-4xl` for wider

### Typography
- H1: `text-4xl font-bold tracking-tight md:text-5xl`
- H2: `text-3xl font-bold md:text-4xl`
- H3: `text-2xl font-bold`
- Body: Default or `text-muted-foreground`
- Links: `text-primary hover:underline`

### Color Usage
- Primary sections: `bg-primary text-primary-foreground`
- Muted sections: `bg-muted/50`
- Cards: Default card styling
- CTAs: Primary buttons

## Content Requirements

### Publications Page
- Filter by year, author, topic
- Download links for PDFs
- Citation information
- Abstract preview

### News Page
- Grid layout (3 columns on desktop)
- Date, title, excerpt
- Category tags
- Pagination or load more

### Events Page
- Upcoming events (highlighted)
- Past events (archive)
- Registration CTAs
- Calendar view option

### Team Page
- Grid of team members
- Photo, name, title, bio
- Contact information
- Areas of expertise

## Implementation Notes
- All content in Bosnian language
- Maintain mobile-first approach
- Use static data initially (can migrate to CMS later)
- Keep consistent with existing navigation structure
- Add proper meta tags for SEO
- Ensure all links in header/footer work