# Sandzak Institut Website - Quick Reference Guide

## 🎯 Project Summary
**Goal:** Professional website for regional research institute  
**Approach:** MVP-first, solo developer  
**Timeline:** 10 weeks total (3-week MVP)  
**Budget:** $40-60k development + <$100/month hosting

## 🛠 Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + shadcn/ui
- **Content:** Markdown → Contentlayer → Supabase
- **Hosting:** Vercel
- **Email:** Resend
- **Search:** Basic → Algolia
- **i18n:** next-intl

## 📅 Development Phases

### Week 1-3: MVP Launch ✅
```
✓ Static site with core pages
✓ Blog/news system  
✓ Contact form
✓ Mobile responsive
✓ Deploy to production
```

### Week 4-6: Enhancements 🚀
```
+ Multi-language (EN + local)
+ Research/publications
+ Events calendar
+ Newsletter signup
+ SEO optimization
```

### Week 7-10: Dynamic Features ⚡
```
+ Supabase integration
+ Admin panel
+ User comments
+ Advanced search
+ Analytics
```

## 📁 Project Structure
```
sandzakinstitut.com/
├── docs/
│   ├── TODO.md ← Development log
│   ├── 20250614_business_specification.md
│   ├── 20250614_solo_developer_specification.md
│   ├── 20250614_product_requirements.md
│   └── 20250614_quick_reference.md ← You are here
└── src/ (coming soon)
```

## 🎨 Design Principles
- **Clean & Professional** - Academic credibility
- **Mobile-First** - 60%+ mobile traffic expected
- **Fast Loading** - < 3s on 3G
- **Accessible** - WCAG 2.1 AA
- **Multi-lingual** - Start with 2, expand later

## 📊 Success Metrics
| Timeframe | Visitors | Newsletter | Downloads |
|-----------|----------|------------|-----------|
| Month 1   | 500      | 50         | 10        |
| Month 6   | 2,500    | 500        | 100       |
| Year 1    | 10,000   | 2,000      | 500       |

## 🚀 Next Steps
1. ```bash
   npx create-next-app@latest sandzak-institut --typescript --tailwind --app
   ```
2. Install shadcn/ui
3. Create layout components
4. Implement homepage
5. Deploy to Vercel

## ⚠️ Key Constraints
- **Solo developer** - Keep it simple
- **Limited budget** - Use free tiers
- **Content-heavy** - Plan for easy updates
- **Multi-language** - Design for it from start
- **Performance** - Monitor continuously

## 📝 Important Notes
- **Content First:** Get content from client ASAP
- **MVP Focus:** Launch fast, iterate based on feedback
- **Documentation:** Update TODO.md daily
- **Testing:** Manual testing sufficient for MVP
- **Backups:** Use git, deploy often

## 🔗 Quick Links
- [Full Business Specification](./20250614_business_specification.md)
- [Solo Developer Specification](./20250614_solo_developer_specification.md)
- [Product Requirements](./20250614_product_requirements.md)
- [Development TODO](./TODO.md)

---

**Remember:** Ship early, get feedback, iterate. Perfect is the enemy of good.