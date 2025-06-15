import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FeaturedCard } from "@/components/ui/featured-card";
import Link from "next/link";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { PRIORITY_THRESHOLDS } from "@/lib/featured-content";

// Mock news data
const newsArticles = [
  {
    id: 1,
    title: "Nova studija o demografskim promjenama",
    excerpt: "Institut je objavio sveobuhvatnu analizu demografskih trendova u regiji Sandžak tokom posljednjih deset godina. Studija pokazuje značajne promjene u starosnoj strukturi stanovništva...",
    date: "14. juni 2025",
    author: "Redakcija",
    category: "Istraživanja",
    readTime: "3 min čitanja",
    imageUrl: "/api/placeholder/400/300",
    slug: "demografska-studija-2025",
    isFeatured: true,
    priority: PRIORITY_THRESHOLDS.FEATURED,
  },
  {
    id: 2,
    title: "Međunarodna konferencija o kulturnom nasljeđu",
    excerpt: "U oktobru organizujemo dvodnevnu konferenciju sa učešćem istraživača iz regiona i Evrope. Tema konferencije je 'Kulturno nasljeđe Sandžaka: Očuvanje i promocija'...",
    date: "10. juni 2025",
    author: "Dr. Mehmed Nukić",
    category: "Događaji",
    readTime: "2 min čitanja",
    imageUrl: "/api/placeholder/400/300",
    slug: "konferencija-kulturno-nasljedje",
  },
  {
    id: 3,
    title: "Partnerstvo sa Univerzitetom u Novom Pazaru",
    excerpt: "Potpisali smo sporazum o saradnji koji omogućava zajedničke istraživačke projekte i razmjenu stručnjaka. Saradnja će biti fokusirana na ekonomski razvoj regije...",
    date: "5. juni 2025",
    author: "Redakcija",
    category: "Saradnja",
    readTime: "4 min čitanja",
    imageUrl: "/api/placeholder/400/300",
    slug: "partnerstvo-univerzitet",
  },
  {
    id: 4,
    title: "Uspješno završena radionica o digitalnim vještinama",
    excerpt: "Preko 50 mladih ljudi učestvovalo je u trodnevnoj radionici o digitalnim vještinama. Učesnici su imali priliku da nauče osnove web dizajna i programiranja...",
    date: "28. maj 2025",
    author: "Amina Hasić",
    category: "Edukacija",
    readTime: "3 min čitanja",
    imageUrl: "/api/placeholder/400/300",
    slug: "radionica-digitalne-vjestine",
  },
  {
    id: 5,
    title: "Predstavljen izvještaj o ekonomskim prilikama",
    excerpt: "Na današnjoj konferenciji za medije predstavljen je izvještaj o ekonomskim prilikama u regionu. Analiza pokazuje potencijal za razvoj malih i srednjih preduzeća...",
    date: "20. maj 2025",
    author: "Mr. Emir Kurtić",
    category: "Ekonomija",
    readTime: "5 min čitanja",
    imageUrl: "/api/placeholder/400/300",
    slug: "ekonomske-prilike-izvjestaj",
  },
  {
    id: 6,
    title: "Poziv za učešće u programu stipendiranja",
    excerpt: "Institut raspisuje konkurs za dodjelu stipendija studentima master i doktorskih studija. Prioritet imaju kandidati čiji rad doprinosi razvoju regije...",
    date: "15. maj 2025",
    author: "Redakcija",
    category: "Obrazovanje",
    readTime: "2 min čitanja",
    imageUrl: "/api/placeholder/400/300",
    slug: "konkurs-stipendije-2025",
  },
];

const categories = ["Sve vijesti", "Istraživanja", "Događaji", "Saradnja", "Edukacija", "Ekonomija", "Obrazovanje"];

export default function NewsPage() {
  // Featured article (first one)
  const featuredArticle = newsArticles[0];
  const otherArticles = newsArticles.slice(1);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Vijesti
            </h1>
            <p className="text-lg text-muted-foreground">
              Pratite najnovije aktivnosti, događaje i postignuća
              Instituta Sandžak
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b pb-8 pt-6">
        <div className="container">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Sve vijesti" ? "default" : "outline"}
                size="sm"
                className="shrink-0"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="py-16">
        <div className="container">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Izdvojene vijesti</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Najvažnije vijesti i najnoviji događaji iz našeg instituta
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <FeaturedCard
              title="Nova studija o demografskim promjenama u regionu Sandžak"
              description="Institut je objavio sveobuhvatnu analizu demografskih trendova u regiji Sandžak tokom posljednjih deset godina. Studija pokazuje značajne promjene u starosnoj strukturi stanovništva i otkriva ključne faktore koji utiču na migracione tokove."
              image={{
                src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&q=80",
                alt: "Demografska studija Sandžak"
              }}
              href="/vijesti/demografska-studija-2025"
              date={new Date('2025-06-14')}
              readTime="3 min čitanja"
              category="Istraživanja"
              priority={PRIORITY_THRESHOLDS.FEATURED} // Featured (amber crown)
            />

            <FeaturedCard
              title="Međunarodna konferencija o kulturnom nasljeđu"
              description="U oktobru organizujemo dvodnevnu konferenciju sa učešćem istraživača iz regiona i Evrope. Tema konferencije je 'Kulturno nasljeđe Sandžaka: Očuvanje i promocija'."
              image={{
                src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=250&fit=crop&q=80",
                alt: "Konferencija o kulturnom nasljeđu"
              }}
              href="/vijesti/konferencija-kulturno-nasljedje"
              date={new Date('2025-06-10')}
              readTime="2 min čitanja"
              category="Događaji"
              priority={6} // Below featured threshold
            />
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="container">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="aspect-[16/9] bg-muted md:aspect-auto">
                <div className="flex h-full items-center justify-center text-muted-foreground">
                  Slika članka
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {featuredArticle.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {featuredArticle.date}
                  </span>
                </div>
                <h2 className="mb-3 text-2xl font-bold md:text-3xl">
                  {featuredArticle.title}
                </h2>
                <p className="mb-4 text-muted-foreground">
                  {featuredArticle.excerpt}
                </p>
                <div className="mb-6 flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {featuredArticle.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {featuredArticle.readTime}
                  </span>
                </div>
                <Button asChild>
                  <Link href={`/vijesti/${featuredArticle.slug}`}>
                    Pročitajte više
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-16">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherArticles.map((article) => (
              <Card 
                key={article.id} 
                className={cn(
                  "group hover:shadow-lg transition-shadow",
                  article.isFeatured && article.priority >= PRIORITY_THRESHOLDS.FEATURED && "border-warning/20 bg-gradient-to-br from-warning/5 to-transparent"
                )}
              >
                <div className="aspect-[16/9] overflow-hidden bg-muted">
                  <div className="flex h-full items-center justify-center text-muted-foreground">
                    Slika članka
                  </div>
                </div>
                <CardHeader>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-xs font-medium text-primary">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">
                      {article.date}
                    </span>
                  </div>
                  <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {article.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <Link
                      href={`/vijesti/${article.slug}`}
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      Čitaj
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              Učitaj više vijesti
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Ne propustite nijednu vijest</h2>
            <p className="mb-8 text-lg">
              Prijavite se za naš newsletter i budite među prvima koji će
              saznati o našim aktivnostima
            </p>
            <form className="mx-auto flex max-w-lg flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Unesite vašu email adresu"
                className="flex-1 rounded-lg border-0 bg-white/10 px-6 py-3 text-primary-foreground placeholder:text-primary-foreground/70 backdrop-blur-sm focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
                required
              />
              <Button size="lg" className="min-w-[140px] bg-white text-primary hover:bg-white/90">
                Prijavite se
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}