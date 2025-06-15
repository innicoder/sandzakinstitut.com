# Admin Panel Gap Analysis & Extended Features

## Executive Summary
The current admin panel covers basic content management but is missing 60% of required features for a comprehensive research institute website. This document identifies gaps and provides implementation priorities.

## Current Coverage Analysis

### ✅ Currently Implemented (4/16 features)
1. **News/Blog Management** - Basic CRUD operations
2. **Events Management** - Event creation and management
3. **Team Members** - Staff profiles
4. **Basic Dashboard** - Simple statistics

### ❌ Missing Critical Features (12/16 features)

## Missing Features by Priority

### Priority 1: Content Management (Must Have)

#### 1. Publications Management System
**Purpose**: Manage academic papers, research documents, reports
```typescript
// Database schema needed
CREATE TABLE publications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  authors TEXT[] NOT NULL,
  abstract TEXT,
  publication_date DATE,
  publication_type TEXT, -- paper, report, policy-brief
  file_url TEXT,
  external_url TEXT,
  doi TEXT,
  categories TEXT[],
  tags TEXT[],
  download_count INTEGER DEFAULT 0,
  featured BOOLEAN DEFAULT false,
  language TEXT DEFAULT 'bs',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### 2. Books/E-books Management (NEW FEATURE)
**Purpose**: Release and sell books, manage digital library
```typescript
CREATE TABLE books (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  isbn TEXT UNIQUE,
  title TEXT NOT NULL,
  subtitle TEXT,
  authors TEXT[] NOT NULL,
  description TEXT,
  cover_image TEXT,
  pdf_preview_url TEXT,
  full_pdf_url TEXT,
  price DECIMAL(10,2),
  pages INTEGER,
  publication_year INTEGER,
  publisher TEXT,
  language TEXT DEFAULT 'bs',
  categories TEXT[],
  featured BOOLEAN DEFAULT false,
  available_formats TEXT[], -- pdf, epub, print
  stock_quantity INTEGER,
  sales_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE book_orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  book_id UUID REFERENCES books(id),
  customer_email TEXT NOT NULL,
  customer_name TEXT NOT NULL,
  quantity INTEGER DEFAULT 1,
  total_amount DECIMAL(10,2),
  payment_status TEXT DEFAULT 'pending',
  delivery_status TEXT DEFAULT 'pending',
  order_date TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### 3. Research Projects Management
**Purpose**: Track ongoing research initiatives
```typescript
CREATE TABLE research_projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  start_date DATE,
  end_date DATE,
  status TEXT DEFAULT 'active', -- active, completed, pending
  lead_researcher TEXT,
  team_members TEXT[],
  funding_source TEXT,
  budget DECIMAL(12,2),
  outcomes TEXT,
  related_publications UUID[],
  project_url TEXT,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### 4. Database/Archive Management
**Purpose**: Historical documents, datasets, research archives
```typescript
CREATE TABLE archive_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  item_type TEXT, -- document, dataset, image, audio, video
  file_url TEXT,
  metadata JSONB, -- flexible metadata storage
  collection TEXT,
  date_created DATE,
  date_archived DATE DEFAULT CURRENT_DATE,
  access_level TEXT DEFAULT 'public', -- public, registered, restricted
  tags TEXT[],
  download_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Priority 2: Communication & Engagement

#### 5. Newsletter Subscriber Management
**Purpose**: Manage email lists, send newsletters
```typescript
CREATE TABLE newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  language_preference TEXT DEFAULT 'bs',
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  unsubscribed_at TIMESTAMP WITH TIME ZONE,
  status TEXT DEFAULT 'active', -- active, unsubscribed, bounced
  tags TEXT[],
  source TEXT -- website, event, import
);

CREATE TABLE newsletter_campaigns (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  subject TEXT NOT NULL,
  content TEXT NOT NULL,
  sent_at TIMESTAMP WITH TIME ZONE,
  recipient_count INTEGER DEFAULT 0,
  open_rate DECIMAL(5,2),
  click_rate DECIMAL(5,2),
  status TEXT DEFAULT 'draft' -- draft, scheduled, sent
);
```

#### 6. Contact Form Submissions
**Purpose**: Track and respond to inquiries
```typescript
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new', -- new, read, responded, archived
  responded_at TIMESTAMP WITH TIME ZONE,
  responded_by UUID REFERENCES profiles(id),
  response_text TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### 7. FAQ Management
**Purpose**: Manage frequently asked questions
```typescript
CREATE TABLE faqs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  category TEXT,
  order_index INTEGER DEFAULT 0,
  published BOOLEAN DEFAULT true,
  language TEXT DEFAULT 'bs',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Priority 3: Extended Features

#### 8. Media/Press Kit Management
```typescript
CREATE TABLE media_assets (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  asset_type TEXT, -- logo, photo, video, press-release
  file_url TEXT,
  thumbnail_url TEXT,
  usage_rights TEXT,
  credit TEXT,
  tags TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### 9. Partners Management
```typescript
CREATE TABLE partners (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  logo_url TEXT,
  website TEXT,
  description TEXT,
  partnership_type TEXT, -- academic, funding, project, media
  active BOOLEAN DEFAULT true,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### 10. File/Document Library
```typescript
CREATE TABLE documents (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  file_name TEXT NOT NULL,
  file_url TEXT NOT NULL,
  file_size INTEGER,
  mime_type TEXT,
  category TEXT,
  description TEXT,
  download_count INTEGER DEFAULT 0,
  uploaded_by UUID REFERENCES profiles(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Priority 4: System Features

#### 11. User Management
**Admin UI needed for**:
- Creating new admin/editor accounts
- Managing permissions
- Activity logs
- Password resets

#### 12. Site Settings
```typescript
CREATE TABLE site_settings (
  key TEXT PRIMARY KEY,
  value JSONB NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Example settings:
-- contact_email, phone_number, address
-- social_media_links
-- google_analytics_id
-- maintenance_mode
-- default_language
```

#### 13. Advanced Analytics
- Page view tracking
- Download statistics
- User engagement metrics
- Content performance
- Geographic distribution

#### 14. Multi-language Support
Every content table needs:
```typescript
-- Add to all content tables
language TEXT DEFAULT 'bs',
translations JSONB, -- or separate translation tables
```

#### 15. Comments/Feedback System
```typescript
CREATE TABLE comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  content_type TEXT, -- news, publication, event
  content_id UUID,
  author_name TEXT,
  author_email TEXT,
  comment_text TEXT,
  approved BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### 16. Backup/Export Functionality
- Export data to CSV/JSON
- Scheduled backups
- Data migration tools

## Implementation Roadmap

### Phase 1: Essential Content (Week 1)
1. Publications Management
2. Books/E-books System
3. Research Projects
4. Archive/Database

### Phase 2: Communication (Week 2)
5. Newsletter System
6. Contact Submissions
7. FAQ Management
8. Media/Press Kit

### Phase 3: Extended Features (Week 3)
9. Partners Management
10. Document Library
11. User Management
12. Site Settings

### Phase 4: Advanced Features (Week 4)
13. Analytics Dashboard
14. Multi-language Support
15. Comments System
16. Backup/Export Tools

## Admin Navigation Structure Update

```typescript
const menuItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  
  // Content Management
  { 
    label: 'Sadržaj', 
    icon: FileText,
    submenu: [
      { href: '/admin/news', label: 'Vijesti' },
      { href: '/admin/publications', label: 'Publikacije' },
      { href: '/admin/books', label: 'Knjige' },
      { href: '/admin/projects', label: 'Projekti' },
      { href: '/admin/archive', label: 'Arhiva' },
    ]
  },
  
  // Events & Activities
  { href: '/admin/events', label: 'Događaji', icon: Calendar },
  
  // People & Organizations
  {
    label: 'Ljudi i organizacije',
    icon: Users,
    submenu: [
      { href: '/admin/team', label: 'Tim' },
      { href: '/admin/partners', label: 'Partneri' },
      { href: '/admin/subscribers', label: 'Newsletter' },
    ]
  },
  
  // Communication
  {
    label: 'Komunikacija',
    icon: Mail,
    submenu: [
      { href: '/admin/contact', label: 'Kontakt forme' },
      { href: '/admin/faq', label: 'Česta pitanja' },
      { href: '/admin/comments', label: 'Komentari' },
    ]
  },
  
  // Media & Files
  {
    label: 'Mediji',
    icon: Image,
    submenu: [
      { href: '/admin/media', label: 'Press kit' },
      { href: '/admin/documents', label: 'Dokumenti' },
    ]
  },
  
  // System
  {
    label: 'Sistem',
    icon: Settings,
    submenu: [
      { href: '/admin/users', label: 'Korisnici' },
      { href: '/admin/settings', label: 'Postavke' },
      { href: '/admin/analytics', label: 'Analitika' },
      { href: '/admin/backup', label: 'Backup' },
    ]
  },
]
```

## Database Schema Summary

**Total new tables needed: 16**
1. publications
2. books
3. book_orders
4. research_projects
5. archive_items
6. newsletter_subscribers
7. newsletter_campaigns
8. contact_submissions
9. faqs
10. media_assets
11. partners
12. documents
13. site_settings
14. comments
15. page_views (analytics)
16. activity_logs

## Estimated Development Time

### Current Implementation: 11-14 hours
### Additional Features: 40-50 hours

**Total for Complete Admin Panel: 51-64 hours**

### Breakdown:
- Publications & Books: 8 hours
- Research & Archive: 6 hours
- Newsletter System: 6 hours
- Contact & FAQ: 4 hours
- Media & Partners: 4 hours
- User Management: 4 hours
- Settings & Analytics: 8 hours
- Multi-language Support: 6 hours
- Testing & Polish: 4 hours

## Critical Recommendations

1. **Start with Publications & Books** - Core business need
2. **Implement file storage strategy** - Many features need file uploads
3. **Plan for multi-language early** - Affects all content tables
4. **Use consistent UI patterns** - Reuse components across sections
5. **Implement proper search** - Essential with growing content
6. **Add audit logs** - Track all admin actions
7. **Set up automated backups** - Critical for data safety

## Next Steps

1. Update TODO.md with book feature
2. Prioritize which missing features to implement first
3. Create detailed specs for Publications and Books modules
4. Plan database migrations strategy
5. Consider using a headless CMS for some content types