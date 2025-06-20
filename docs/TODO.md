# Sandzak Institut Website - Development Log & TODOs

## Tasks

### Current - Immediate Actions (Week 1)
- [ ] **Fix What's Broken** (8 hours)
  - [ ] Fix navigation constants and hash links
  - [x] Create `/o-nama/historija` page (2025-01-15)
  - [x] Add redirects for footer duplicates (2025-01-15)
  - [x] Implement `/vijesti/[slug]` dynamic routing (2025-01-15)
  - [x] Create 3 initial news articles (2025-01-15)
- [ ] **Critical Missing Features** (6 hours)
  - [ ] Contact form backend with Resend
  - [ ] Basic SEO (sitemap, robots.txt, meta tags)
  - [ ] Error handling (error.tsx, API try-catch)
- [ ] **Mobile & Deploy** (6 hours)
  - [ ] Test and fix mobile responsiveness
  - [ ] Set up Vercel deployment
  - [ ] Configure environment variables
  - [ ] Deploy to staging for client review


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

### Phase 3: Dynamic Features - Solo Dev Approach (Weeks 7-10)
- [ ] Supabase setup and integration
- [ ] **Smart Admin Panel** (60 hours total)
  - [ ] Week 1: Core Extensions (20h)
    - [ ] Universal content system (news, publications, books in one)
    - [ ] Simple file manager for PDFs/documents
    - [ ] Contact form viewer
    - [ ] Newsletter subscriber list with CSV export
  - [ ] Week 2: Essential Features (20h)
    - [ ] Unified content editor with type selector
    - [ ] Bulk operations (publish, delete, export)
    - [ ] Basic search and filters
    - [ ] Image optimization on upload
  - [ ] Week 3: Integration & Polish (20h)
    - [ ] Google Forms embed for event registration
    - [ ] Mailchimp API for newsletters
    - [ ] Google Analytics dashboard widget
    - [ ] FAQ as editable JSON
- [ ] **Simplified Features**
  - [ ] Event registration via Google Forms
  - [ ] Search with Algolia free tier
  - [ ] Download tracking (simple counter)
  - [ ] Skip complex features: workflow, comments, surveys
- [ ] Final testing and deployment

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
- [x] Created comprehensive admin panel analysis (2025-01-15)
- [x] Developed solo developer implementation strategy (2025-01-15)
- [x] Documented all missing features and gaps (2025-01-15)
- [x] Created `/o-nama/historija` page with official institute information (2025-01-15)
- [x] Implemented redirect pages for duplicate routes (2025-01-15)
- [x] Created dynamic routing structure for news articles at `/vijesti/[slug]` (2025-01-15)
- [x] Updated history page with BANU founding information from 2022 (2025-01-15)

## Notes

### Admin Panel Gap Analysis (2025-01-15)
The current admin implementation covers only 25% of required features. Critical missing components:
- **Content Management**: Publications, Books, Research Projects, Archive
- **Communication**: Newsletter system, Contact forms, FAQ management  
- **Advanced Features**: Grant management, Event registrations, Member system
- **System Features**: User management, Analytics, Multi-language support

**📋 Master Reference Document**: See `docs/20250115_comprehensive_admin_analysis.md` for complete analysis including:
- Full feature requirements with specifications
- Solo developer implementation strategy (60 hours)
- Technical architecture and database design
- Week-by-week implementation roadmap
- Cost estimates and risk mitigation

**🔍 Final Review**: See `docs/20250115_final_review_solo_dev.md` for:
- Critical items we missed (deployment, contact form backend, SEO)
- Realistic 80-hour timeline including testing and deployment
- Emergency shortcuts if running out of time
- The REAL minimum viable admin (40 hours)

Also see: `20250115_admin_panel_gap_analysis.md`, `20250115_admin_advanced_features.md`, `20250115_solo_dev_admin_strategy.md`

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
- **Redirect Strategy:** Created redirect pages for duplicate routes to maintain single source of truth (2025-01-15)
- **History Page:** Standalone page with expanded timeline instead of section on about page (2025-01-15)
- **News Architecture:** Dynamic [slug] routing for scalable news system with mock data ready for CMS (2025-01-15)

### Technical Approach
- Use shadcn/ui components to save development time
- Server components by default for better performance
- Markdown files for initial content management
- Progressive enhancement philosophy
- Mobile-first responsive design

### Technical Debt
- **Admin Panel**: Currently implements only 4/16 required features (News, Events, Team, Dashboard)
- **Missing Critical Features**: Publications, Books, Archive, Newsletter, Grants, Event Registration
- **Solo Developer Reality**: 60 hours over 4 weeks using smart shortcuts (see `20250115_solo_dev_admin_strategy.md`)
- Navigation inconsistencies between header and footer
- Need to standardize content management approach (currently mixed static/dynamic)

### Solo Developer Strategy (2025-01-15)
- **Smart Approach**: Unify content types into single flexible system
- **Time Savers**: Reuse components, leverage external services (Mailchimp, Google Forms)
- **Skip Complex Features**: No custom email, workflow, or survey builders
- **Realistic Timeline**: 4 weeks part-time (60 hours total)
- See `docs/20250115_solo_dev_admin_strategy.md` for pragmatic implementation plan

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