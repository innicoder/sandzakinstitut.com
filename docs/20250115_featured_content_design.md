# Featured Content Design System

## UI/UX Design Principles

### Visual Hierarchy
1. **Size differentiation**: Hero items are 2-3x larger than regular items
2. **Color emphasis**: Featured badge with primary color and sparkle icon
3. **Elevation**: Higher priority items have subtle ring effects
4. **Position**: Most important content placed top-left (F-pattern reading)

### Interaction Design
1. **Hover states**:
   - Subtle scale transformation (1.01x) to prevent jarring motion
   - Image zoom (1.05x) creates depth without distraction
   - Shadow elevation (shadow-lg) provides feedback
   - CTA underline animation guides action
   - All transitions use 200ms duration for snappy feel

2. **Focus states**:
   - Ring indicators for keyboard navigation
   - Proper focus-within styling
   - ARIA labels for screen readers

3. **Loading performance**:
   - Priority loading for hero images
   - Staggered animations prevent layout shift
   - Responsive image sizes optimize bandwidth

### Responsive Design
1. **Mobile-first approach**:
   - Stack layouts on small screens
   - Touch-friendly tap targets (min 44px)
   - Reduced animations for performance

2. **Breakpoint strategy**:
   - Mobile: Single column
   - Tablet: 2 columns
   - Desktop: Hero + sidebar or 3-column grid

### Accessibility Features
1. **Semantic HTML**: article, time, nav elements
2. **ARIA landmarks**: labeled sections
3. **Keyboard navigation**: full support
4. **Screen reader optimization**: descriptive labels
5. **Color contrast**: WCAG AA compliant

## Component Architecture

### FeaturedCard Variants
- **Hero**: Large, prominent display with horizontal layout option
- **Default**: Standard card in grid
- **Compact**: Minimal version for sidebars

### Layout Patterns
1. **Hero Grid**: One large item + 3 supporting items
2. **Grid**: Equal-sized featured items
3. **Hero Sidebar**: 2/3 hero + 1/3 compact items

### Animation Strategy
- No entrance animations to prevent layout shift
- Smooth transitions (200ms) for micro-interactions
- Reduced motion respects user preferences
- No pulsing animations to avoid distraction
- Focus on subtle, purposeful feedback

## Implementation Guidelines

### Data Structure
```typescript
interface FeaturedContent {
  featured: boolean;
  featuredPriority: number; // 1-10
  featuredUntil?: Date; // Auto-expire
  featuredType: 'hero' | 'highlight' | 'sticky';
}
```

### Priority Levels
- 10: Breaking news/major announcements (ring-2 ring-destructive/20)
- 8-9: Important publications/events (ring-1 ring-primary/20)
- 6-7: Regular featured content (shadow-sm)
- 1-5: Supporting featured items (no additional styling)

### Visual Indicators
- Featured badges only shown for priority >= 8
- "HITNO" label for priority >= 10
- "Izdvojeno" label for priority 8-9
- Subtle ring effects instead of heavy shadows

### Performance Optimization
1. Use Next.js Image with priority for above-fold
2. Implement Intersection Observer for view tracking
3. Lazy load below-fold content
4. CSS containment for layout stability

## Usage Examples

### Homepage Hero Section
```tsx
<FeaturedSection
  title="Najnovije vijesti"
  layout="hero-grid"
  items={featuredNews}
/>
```

### Publications Page
```tsx
<FeaturedSection
  title="Izdvojene publikacije"
  layout="hero-sidebar"
  items={featuredPublications}
  viewAllHref="/istrazivanja/publikacije"
/>
```

### Events Listing
```tsx
<FeaturedSection
  title="Predstoje??i doga??aji"
  layout="grid"
  items={upcomingEvents}
/>
```