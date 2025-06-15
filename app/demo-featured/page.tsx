import { FeaturedCard } from "@/components/ui/featured-card";
import { PRIORITY_THRESHOLDS } from "@/lib/featured-content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DemoFeaturedPage() {
  return (
    <div className="container py-16">
      {/* Page Header */}
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold">Featured Content Demo</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Showcase of all featured content variants and priority levels implemented across the site
        </p>
      </div>

      {/* Featured Cards - All Variants */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">FeaturedCard Variants</h2>
        
        {/* Hero Variant */}
        <div className="mb-12">
          <h3 className="mb-4 text-xl font-semibold">Hero Variant</h3>
          <FeaturedCard
            title="Hero Featured Content Example"
            description="This is a hero variant of the featured card, designed to be the main focal point on a page. It features larger text, more prominent styling, and is typically used for the most important content."
            image={{
              src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=400&fit=crop&q=80",
              alt: "Hero featured content"
            }}
            href="/demo-featured"
            date={new Date('2025-06-15')}
            readTime="Hero content"
            category="Demo"
            variant="hero"
            priority={PRIORITY_THRESHOLDS.FEATURED}
          />
        </div>

        {/* Default Variants with Different Priorities */}
        <div className="mb-12">
          <h3 className="mb-6 text-xl font-semibold text-muted-foreground">Default Variants - Priority Levels</h3>
          <div className="grid gap-6 lg:grid-cols-1 max-w-4xl mx-auto">
            <FeaturedCard
              title="Featured Priority Content (8+)"
              description="This content has a FEATURED priority (8+) and displays with an amber crown icon. This is the highest priority level, reserved for the most important content that needs maximum visibility."
              image={{
                src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&q=80",
                alt: "Featured priority content"
              }}
              href="/demo-featured"
              date={new Date('2025-06-15')}
              readTime="Featured"
              category="High Priority"
              priority={PRIORITY_THRESHOLDS.FEATURED} // 8+ Featured (amber crown)
            />

            <FeaturedCard
              title="Highlighted Priority Content (6-7)"
              description="This content has a HIGHLIGHTED priority (6-7) and displays with a blue star icon. This is for content that deserves attention but isn't at the highest priority level."
              image={{
                src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=250&fit=crop&q=80",
                alt: "Highlighted priority content"
              }}
              href="/demo-featured"
              date={new Date('2025-06-15')}
              readTime="Highlighted"
              category="Medium Priority"
              priority={6} // Below featured threshold
            />
          </div>
        </div>

      </section>


      {/* Priority System Explanation */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">Priority System</h2>
        <div className="grid gap-6 md:grid-cols-4">
          <Card className="border-amber-200 bg-gradient-to-br from-amber-50/50 to-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-700">
                <span>👑</span>
                Featured (8+)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Highest priority content with amber crown indicator. Reserved for the most important content.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-gradient-to-br from-blue-50/50 to-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-700">
                <span>⭐</span>
                Highlighted (6-7)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Important content with blue star indicator. For content that deserves attention.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-gray-700">
                Regular Content
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Content with priority below 8. No special indicators.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}