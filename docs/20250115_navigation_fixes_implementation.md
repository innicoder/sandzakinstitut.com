# Navigation Fixes Implementation Guide

## Executive Summary
This guide provides an expert solo developer with the most efficient approach to fix all navigation inconsistencies and missing pages found during the link audit. Estimated time: 4-6 hours.

## Priority Order (Start → Finish)

### Phase 1: Quick Wins (30 minutes)
1. **Fix Navigation Constants** - Update hash links to match actual pages
2. **Add Redirects** - Handle duplicate paths with Next.js redirects
3. **Update Footer Links** - Align with header navigation

### Phase 2: Static Pages (1-2 hours)
1. **Create History Page** - `/o-nama/historija`
2. **Handle Partners Page** - Add to navigation or remove

### Phase 3: Dynamic News System (2-3 hours)
1. **Create Dynamic Route** - `/vijesti/[slug]`
2. **Add Sample Articles** - Create initial content
3. **Update Homepage Links** - Point to dynamic routes

## Detailed Implementation

### 1. Fix Navigation Constants (10 min)

**File:** `lib/constants.ts`

```typescript
export const NAV_LINKS = {
  about: {
    main: '/o-nama',
    mission: '/o-nama/misija',      // Remove hash link
    team: '/o-nama/tim',
    history: '/o-nama/historija'    // Remove hash link
  },
  research: {
    main: '/istrazivanja',
    publications: '/istrazivanja/publikacije',
    projects: '/istrazivanja/projekti',
    database: '/istrazivanja/podaci',
    collaboration: '/istrazivanja/saradnja'
  },
  news: '/vijesti',
  events: '/dogadjaji',
  contact: '/kontakt',
  media: '/mediji',
  newsletter: '/newsletter',
  privacy: '/privatnost',
  faq: '/pitanja',
  partners: '/partneri'  // Add this
}
```

### 2. Add Redirects (10 min)

**File:** `next.config.js`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/publikacije',
        destination: '/istrazivanja/publikacije',
        permanent: true,
      },
      {
        source: '/baza-podataka',
        destination: '/istrazivanja/podaci',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
```

### 3. Update Footer Links (10 min)

**File:** `components/layout/footer.tsx`

```tsx
// Update Resources section to match header navigation
<div>
  <h3 className="font-semibold mb-4">Resursi</h3>
  <ul className="space-y-2">
    <li>
      <Link href="/istrazivanja/publikacije" className="hover:text-gray-300">
        Publikacije
      </Link>
    </li>
    <li>
      <Link href="/istrazivanja/podaci" className="hover:text-gray-300">
        Baza podataka
      </Link>
    </li>
    <li>
      <Link href="/mediji" className="hover:text-gray-300">
        Za medije
      </Link>
    </li>
    <li>
      <Link href="/partneri" className="hover:text-gray-300">
        Za partnere
      </Link>
    </li>
    <li>
      <Link href="/newsletter" className="hover:text-gray-300">
        Newsletter
      </Link>
    </li>
    <li>
      <Link href="/privatnost" className="hover:text-gray-300">
        Politika privatnosti
      </Link>
    </li>
  </ul>
</div>
```

### 4. Create History Page (30 min)

**File:** `app/o-nama/historija/page.tsx`

```tsx
import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Section } from '@/components/ui/section'
import { OptimizedImage } from '@/components/ui/optimized-image'

export const metadata: Metadata = {
  title: 'Historija - Institut za istraživanje Sandžaka',
  description: 'Povijest Instituta za istraživanje Sandžaka od osnivanja do danas'
}

export default function HistoryPage() {
  return (
    <div className="min-h-screen">
      <Section className="pt-24 pb-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Naša historija</h1>
          <p className="text-xl text-gray-600">
            Putovanje kroz godine rada i razvoja Instituta
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
              
              {[
                {
                  year: '2020',
                  title: 'Osnivanje Instituta',
                  description: 'Institut za istraživanje Sandžaka osnovan je sa misijom očuvanja kulturnog naslijeđa i promovisanja naučnih istraživanja.'
                },
                {
                  year: '2021',
                  title: 'Prvi istraživački projekti',
                  description: 'Pokrenuti prvi projekti iz oblasti demografije i socijalne historije Sandžaka.'
                },
                {
                  year: '2022',
                  title: 'Međunarodna saradnja',
                  description: 'Uspostavljene partnerske veze sa univerzitetima iz regiona i Evrope.'
                },
                {
                  year: '2023',
                  title: 'Digitalna arhiva',
                  description: 'Pokrenuta digitalna arhiva dokumenata i fotografija iz historije Sandžaka.'
                },
                {
                  year: '2024',
                  title: 'Proširenje djelatnosti',
                  description: 'Institut proširuje svoje aktivnosti na obrazovne programe i publikacije.'
                }
              ].map((item, index) => (
                <div key={index} className="relative flex items-start mb-8">
                  <div className="absolute left-8 w-4 h-4 bg-primary rounded-full -translate-x-1/2"></div>
                  <div className="ml-20">
                    <span className="text-sm text-primary font-semibold">{item.year}</span>
                    <h3 className="text-xl font-semibold mt-1 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
```

### 5. Handle Partners Page (10 min)

**Option A: Add to Mobile Navigation**

**File:** `components/layout/header.tsx`

```tsx
// Add to mobile navigation
<MobileNavLink href="/partneri" onClick={() => setIsOpen(false)}>
  Partneri
</MobileNavLink>
```

**Option B: Add to Desktop Navigation (if preferred)**

```tsx
// Add to desktop navigation items
<Link href="/partneri" className="text-sm font-medium hover:text-primary">
  Partneri
</Link>
```

### 6. Create Dynamic News Route (1 hour)

**File:** `app/vijesti/[slug]/page.tsx`

```tsx
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft, Calendar, User, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Section } from '@/components/ui/section'
import { OptimizedImage } from '@/components/ui/optimized-image'

// Temporary news data - replace with CMS/database later
const newsArticles = {
  'demografska-studija': {
    title: 'Nova demografska studija Sandžaka',
    excerpt: 'Institut predstavlja sveobuhvatnu demografsku analizu regije',
    content: `
      <p>Institut za istraživanje Sandžaka sa ponosom predstavlja rezultate najnovije demografske studije koja pruža detaljan uvid u populacijske trendove našeg regiona.</p>
      
      <h2>Ključni nalazi</h2>
      <p>Studija pokazuje značajne demografske promjene u posljednjih 20 godina, uključujući migracije, starosnu strukturu i obrazovne trendove.</p>
      
      <h2>Metodologija</h2>
      <p>Istraživanje je sprovedeno korištenjem najnovijih statističkih metoda i analiza podataka iz različitih izvora.</p>
      
      <h2>Značaj za zajednicu</h2>
      <p>Ovi podaci će pomoći lokalnim vlastima i organizacijama u planiranju budućih projekata i politika.</p>
    `,
    date: '2024-03-15',
    author: 'Dr. Amina Hadžić',
    image: '/images/demographic-study.jpg',
    category: 'Istraživanja'
  },
  'konferencija-najava': {
    title: 'Međunarodna konferencija o kulturnom naslijeđu',
    excerpt: 'Institut organizuje dvodnevnu konferenciju o očuvanju kulturne baštine',
    content: `
      <p>Institut za istraživanje Sandžaka sa zadovoljstvom najavljuje međunarodnu konferenciju "Kulturno naslijeđe Sandžaka: Prošlost, sadašnjost i budućnost".</p>
      
      <h2>O konferenciji</h2>
      <p>Konferencija će okupiti istraživače, akademike i stručnjake iz oblasti kulturologije, historije i antropologije iz cijelog regiona.</p>
      
      <h2>Teme konferencije</h2>
      <ul>
        <li>Materijalno kulturno naslijeđe</li>
        <li>Nematerijalna kulturna baština</li>
        <li>Digitalizacija i prezervacija</li>
        <li>Edukacija i prenošenje znanja</li>
      </ul>
      
      <h2>Kako učestvovati</h2>
      <p>Pozivamo sve zainteresovane da se registruju putem našeg sajta. Broj mjesta je ograničen.</p>
    `,
    date: '2024-02-20',
    author: 'Institut za istraživanje Sandžaka',
    image: '/images/conference.jpg',
    category: 'Događaji'
  },
  'partnerstvo-univerzitet': {
    title: 'Novo partnerstvo sa Univerzitetom u Novom Pazaru',
    excerpt: 'Potpisali smo sporazum o saradnji na istraživačkim projektima',
    content: `
      <p>Institut za istraživanje Sandžaka i Univerzitet u Novom Pazaru potpisali su sporazum o dugoročnoj saradnji na istraživačkim i obrazovnim projektima.</p>
      
      <h2>Oblasti saradnje</h2>
      <p>Partnerstvo će obuhvatiti zajedničke istraživačke projekte, razmjenu stručnjaka i organizaciju naučnih skupova.</p>
      
      <h2>Benefiti za studente</h2>
      <p>Studenti će imati priliku da učestvuju u istraživačkim projektima i koriste resurse Instituta za svoje radove.</p>
      
      <h2>Budući projekti</h2>
      <p>Prvi zajednički projekat biće lansiran već u aprilu i fokusiraće se na digitalizaciju historijskih dokumenata.</p>
    `,
    date: '2024-01-10',
    author: 'Institut za istraživanje Sandžaka',
    image: '/images/partnership.jpg',
    category: 'Saradnja'
  }
}

export async function generateStaticParams() {
  return Object.keys(newsArticles).map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = newsArticles[params.slug as keyof typeof newsArticles]
  
  if (!article) {
    return {
      title: 'Vijest nije pronađena',
    }
  }

  return {
    title: `${article.title} - Institut za istraživanje Sandžaka`,
    description: article.excerpt,
  }
}

export default function NewsArticle({ params }: { params: { slug: string } }) {
  const article = newsArticles[params.slug as keyof typeof newsArticles]

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Section className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <Link href="/vijesti">
            <Button variant="ghost" className="mb-6">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Nazad na vijesti
            </Button>
          </Link>

          <article>
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                  {article.category}
                </span>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <time>{new Date(article.date).toLocaleDateString('bs-BA')}</time>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{article.author}</span>
                </div>
              </div>
              
              <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
              <p className="text-xl text-gray-600">{article.excerpt}</p>
            </header>

            {article.image && (
              <div className="mb-8 rounded-lg overflow-hidden">
                <OptimizedImage
                  src={article.image}
                  alt={article.title}
                  width={800}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            )}

            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            <footer className="mt-12 pt-8 border-t">
              <div className="flex items-center justify-between">
                <Button variant="outline">
                  <Share2 className="h-4 w-4 mr-2" />
                  Podijeli
                </Button>
              </div>
            </footer>
          </article>

          {/* Related articles */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Povezane vijesti</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {Object.entries(newsArticles)
                .filter(([slug]) => slug !== params.slug)
                .slice(0, 2)
                .map(([slug, article]) => (
                  <Card key={slug}>
                    <Link href={`/vijesti/${slug}`}>
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-2 hover:text-primary">
                          {article.title}
                        </h3>
                        <p className="text-sm text-gray-600">{article.excerpt}</p>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
```

### 7. Update Homepage News Links (30 min)

**File:** `app/page.tsx`

Update the news section to use slugs instead of full paths:

```tsx
// Update news data
const newsItems = [
  {
    slug: 'demografska-studija',
    title: 'Nova demografska studija Sandžaka',
    excerpt: 'Institut predstavlja sveobuhvatnu demografsku analizu...',
    date: '15. mart 2024',
    category: 'Istraživanja'
  },
  {
    slug: 'konferencija-najava',
    title: 'Međunarodna konferencija o kulturnom naslijeđu',
    excerpt: 'Dvodnevna konferencija okupiće stručnjake...',
    date: '20. februar 2024',
    category: 'Događaji'
  },
  {
    slug: 'partnerstvo-univerzitet',
    title: 'Novo partnerstvo sa Univerzitetom',
    excerpt: 'Potpisali smo sporazum o saradnji...',
    date: '10. januar 2024',
    category: 'Saradnja'
  }
]

// Update links in the render
{newsItems.map((item, index) => (
  <Card key={index}>
    <CardContent className="p-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-primary">{item.category}</span>
        <span className="text-sm text-gray-500">{item.date}</span>
      </div>
      <h3 className="text-xl font-semibold mb-3">
        <Link href={`/vijesti/${item.slug}`} className="hover:text-primary">
          {item.title}
        </Link>
      </h3>
      <p className="text-gray-600 mb-4">{item.excerpt}</p>
      <Link 
        href={`/vijesti/${item.slug}`}
        className="text-primary font-medium hover:underline inline-flex items-center"
      >
        Pročitaj više
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </CardContent>
  </Card>
))}
```

## Testing Checklist

1. ✓ All navigation links work correctly
2. ✓ Redirects function properly
3. ✓ News articles display correctly
4. ✓ 404 pages work for non-existent articles
5. ✓ Mobile navigation includes all pages
6. ✓ Breadcrumbs show correct paths
7. ✓ SEO metadata is correct for all pages

## Future Improvements

1. **CMS Integration** - Replace hardcoded news with Contentlayer/MDX
2. **Search Functionality** - Add search for news articles
3. **Categories/Tags** - Implement filtering system
4. **RSS Feed** - Add RSS for news articles
5. **Social Sharing** - Implement proper social media sharing

## Time Summary

- Phase 1 (Quick Wins): 30 minutes
- Phase 2 (Static Pages): 1-2 hours  
- Phase 3 (Dynamic News): 2-3 hours
- Testing: 30 minutes

**Total: 4-6 hours**

## Notes

- Start with Phase 1 for immediate impact
- History page content can be expanded later
- News system is ready for CMS integration
- All solutions follow Next.js best practices
- SEO-friendly with proper metadata