# Featured Content Usage Examples

## 1. Inline Featured Indicators (Recommended)

Instead of creating separate featured sections, add indicators to existing content:

```tsx
// In news cards
{article.isFeatured && (
  <FeaturedIndicator priority={article.priority} size="sm" />
)}
```

## 2. Homepage Integration

```tsx
// On homepage, just mark the first news item as featured
const featuredNews = newsArticles
  .filter(article => article.isFeatured && article.priority >= 8)
  .slice(0, 1);
```

## 3. Event Page with Sticky Featured

```tsx
// For events, show urgent ones at top
const urgentEvents = events.filter(e => e.priority >= 10);
if (urgentEvents.length > 0) {
  return (
    <Alert variant="destructive" className="mb-6">
      <AlertTitle>Hitni događaji</AlertTitle>
      <AlertDescription>
        {urgentEvents.map(event => (
          <Link key={event.id} href={`/dogadjaji/${event.id}`}>
            {event.title} - {event.date}
          </Link>
        ))}
      </AlertDescription>
    </Alert>
  );
}
```

## 4. Publication Highlights

```tsx
// Simple border highlight for featured publications
<Card className={cn(
  "hover:shadow-md transition-shadow",
  publication.isFeatured && "border-primary"
)}>
  {/* Card content */}
</Card>
```

## Design Principles

1. **Subtle is better**: Use borders and small badges, not large banners
2. **Context matters**: Featured news needs urgency, featured publications need authority
3. **Don't duplicate**: Show featured indicators on existing content, don't create separate sections
4. **Performance**: No heavy animations or complex layouts
5. **Accessibility**: Ensure featured content is announced to screen readers