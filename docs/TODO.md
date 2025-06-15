# Sandzak Institut Website - Development Log & TODOs

## Tasks

### Current - Fix Missing Links
- [ ] Create missing pages for broken links
  - [ ] Create `/o-nama/historija` page (History)
  - [ ] Create `/publikacije` page or redirect to `/istrazivanja/publikacije`
  - [ ] Create `/baza-podataka` page or redirect to `/istrazivanja/podaci`
- [ ] Implement dynamic routing for news articles
  - [ ] Create `/vijesti/[slug]` dynamic route structure
  - [ ] Create `/vijesti/demografska-studija` article
  - [ ] Create `/vijesti/konferencija-najava` article
  - [ ] Create `/vijesti/partnerstvo-univerzitet` article
- [ ] Fix navigation inconsistencies
  - [ ] Add `/partneri` to navigation or remove the page
  - [ ] Resolve hash link conflicts in constants (`#misija-vizija` vs `/o-nama/misija`)

### Phase 1: MVP (Weeks 1-3)
- [x] Set up Next.js project with TypeScript and Tailwind (2025-06-14)
- [x] Install and configure shadcn/ui components (2025-06-14)
- [x] Create responsive layout (header, footer, navigation) - IN BOSNIAN (2025-06-14)
- [x] Implement homepage with hero and key sections - IN BOSNIAN (2025-06-14)
- [x] Build About page with mission, vision, values, history - IN BOSNIAN (2025-06-14)
- [x] Create contact page with form - IN BOSNIAN (2025-06-14)
- [x] Audit all links in the application (2025-01-15)
- [ ] Set up blog/news system with Contentlayer
- [ ] Create contact form with Resend integration (backend)
- [ ] Mobile responsive testing
- [ ] Deploy to Vercel

### Phase 2: Content & Features (Weeks 4-6)
- [ ] Implement multi-language support (EN + BS/SR)
- [ ] Add research/publications section
- [ ] Create events calendar page
- [ ] Newsletter integration (ConvertKit/Mailchimp)
- [ ] SEO optimization (meta tags, sitemap, robots.txt)
- [ ] Basic search functionality
- [ ] Social media integration
- [ ] Performance optimization
- [ ] **Book Release Feature** - Digital library for selling/distributing books
  - [ ] Book catalog with cover images
  - [ ] PDF preview functionality
  - [ ] Purchase/download system
  - [ ] Author profiles
  - [ ] Book categories and search

### Phase 3: Dynamic Features (Weeks 7-10)
- [ ] Supabase setup and integration
- [ ] Basic admin panel for content management
- [ ] Dynamic blog post creation
- [ ] Enhanced search with Algolia
- [ ] Event registration system
- [ ] Download tracking
- [ ] Comment system (moderated)
- [ ] Final testing and polish

### Done
- [x] Created comprehensive business specification document (2025-06-14)
- [x] Created realistic solo developer specification (2025-06-14)
- [x] Created product requirements document (2025-06-14)
- [x] Set up initial project structure with docs folder (2025-06-14)
- [x] Created TODO.md for development tracking (2025-06-14)
- [x] Implemented Bosnian language website with core pages (2025-06-14)
- [x] Audit all links in the application - found missing pages (2025-01-15)
- [x] Identified missing pages and broken links (2025-01-15)
- [x] Document navigation structure and inconsistencies (2025-01-15)

## Notes

### Missing Links Analysis (2025-01-15)

#### Missing Static Pages:
1. **`/o-nama/historija`** - History page
   - Referenced in: `components/layout/header.tsx:84`
   - Desktop navigation dropdown under "O nama"

2. **`/publikacije`** - Standalone publications page
   - Referenced in: `components/layout/footer.tsx:89`
   - Duplicate of `/istrazivanja/publikacije`
   - Decision needed: Create redirect or separate page

3. **`/baza-podataka`** - Standalone database page
   - Referenced in: `components/layout/footer.tsx:94`
   - Duplicate of `/istrazivanja/podaci`
   - Decision needed: Create redirect or separate page

#### Missing Dynamic Routes:
1. **News Articles** - Need dynamic routing like events
   - `/vijesti/demografska-studija` (app/page.tsx:127)
   - `/vijesti/konferencija-najava` (app/page.tsx:147)
   - `/vijesti/partnerstvo-univerzitet` (app/page.tsx:167)

#### Navigation Inconsistencies:
1. **Orphaned Page**: `/partneri` exists but not linked in any navigation
2. **Hash vs Page Links**: Constants define `#misija-vizija` and `#historija` but actual pages exist
3. **Footer vs Header**: Different paths for same content (publikacije, baza-podataka)

### Development Decisions
- **Solo Developer Approach:** Revised from team-based to realistic solo implementation (2025-06-14)
- **MVP First:** 3-week MVP, then iterate based on feedback (2025-06-14)
- **Tech Stack:** Next.js 14 + Tailwind + shadcn/ui for rapid development (2025-06-14)
- **Content Strategy:** Start with Markdown/Contentlayer, migrate to Supabase later (2025-06-14)
- **Hosting:** Vercel free tier initially, upgrade as needed (2025-06-14)

### Technical Approach
- Use shadcn/ui components to save development time
- Server components by default for better performance
- Markdown files for initial content management
- Progressive enhancement philosophy
- Mobile-first responsive design

### MVP Priorities
1. Professional appearance and credibility
2. Fast loading and good SEO
3. Easy content management
4. Multi-language support (at least 2 languages)
5. Contact functionality

### Budget Reality Check
- Development: $40,000 - $60,000 (400 hours)
- Monthly costs: < $100 initially
- Using free tiers wherever possible
- Scaling costs as traffic grows

### Risk Management
- Scope creep: Stick to phased approach
- Translations: Start with 2 languages, add more later
- Performance: Monitor from day 1
- Content bottleneck: Train client early on Markdown

### Success Metrics (Realistic)
- Month 1: 500 unique visitors
- Month 6: 2,500 unique visitors
- Year 1: 10,000 unique visitors/month
- Focus on engagement over traffic initially

### Next Immediate Steps
1. Create Next.js project
2. Set up GitHub repository  
3. Configure Vercel deployment
4. Install dependencies (shadcn/ui, Contentlayer, etc.)
5. Create basic layout components