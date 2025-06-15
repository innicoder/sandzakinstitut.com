import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { notFound } from "next/navigation";

// This would typically come from a database or CMS
const newsArticles: Record<string, {
  id: number;
  title: string;
  fullTitle: string;
  content: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  imageUrl: string;
  tags: string[];
}> = {
  "demografska-studija-2025": {
    id: 1,
    title: "Nova studija o demografskim promjenama",
    fullTitle: "Nova studija o demografskim promjenama u regionu Sandžak",
    content: `
      <p>Institut za historiju, demografiju i antropologiju Sandžaka objavio je danas sveobuhvatnu analizu demografskih trendova u regiji tokom posljednjih deset godina. Studija, koja predstavlja najdetaljnije istraživanje ove vrste do sada, pokazuje značajne promjene u starosnoj strukturi stanovništva i otkriva ključne faktore koji utiču na migracione tokove.</p>

      <h2>Ključni nalazi studije</h2>
      <p>Prema podacima prikupljenim tokom dvogodišnjeg istraživanja, region Sandžak doživljava značajne demografske transformacije. Najuočljiviji trend je starenje stanovništva, sa prosjekom godina koji se povećao za 3,2 godine u posljednjoj deceniji.</p>

      <blockquote>
        <p>"Ovi demografski trendovi zahtijevaju hitnu pažnju donosilaca odluka. Potrebne su konkretne mjere za zadržavanje mladih u regionu i stvaranje povoljnijih uslova za njihov razvoj."</p>
        <cite>- Dr. Amina Hasić, voditeljka istraživačkog tima</cite>
      </blockquote>

      <h2>Migracije mladih</h2>
      <p>Posebno zabrinjavajući podatak je odlazak visokoobrazovanih mladih ljudi. Studija pokazuje da preko 40% diplomiranih studenata napušta region u potrazi za boljim prilikama. Glavni razlozi uključuju:</p>
      
      <ul>
        <li>Nedostatak adekvatnih radnih mjesta</li>
        <li>Ograničene mogućnosti profesionalnog razvoja</li>
        <li>Bolje plate u većim gradovima</li>
        <li>Želja za dodatnim obrazovanjem</li>
      </ul>

      <h2>Preporuke za buduće politike</h2>
      <p>Na osnovu rezultata istraživanja, Institut predlaže niz mjera za ublažavanje negativnih demografskih trendova:</p>
      
      <ol>
        <li><strong>Razvoj lokalnih privrednih kapaciteta</strong> - Podrška malim i srednjim preduzećima koja mogu zaposliti mlade stručnjake</li>
        <li><strong>Investicije u obrazovanje</strong> - Modernizacija obrazovnih institucija i uvođenje novih programa</li>
        <li><strong>Poboljšanje infrastrukture</strong> - Ulaganje u putnu i digitalnu infrastrukturu</li>
        <li><strong>Programi povratka</strong> - Posebni podsticaji za mlade koji se vraćaju u region</li>
      </ol>

      <h2>Metodologija istraživanja</h2>
      <p>Studija je sprovedena korištenjem kombinacije kvantitativnih i kvalitativnih metoda. Analizirani su podaci iz popisa stanovništva, anketirано je preko 2,000 građana, a održano je i 50 dubinskih intervjua sa predstavnicima različitih društvenih grupa.</p>

      <p>Kompletna studija dostupna je za preuzimanje na našoj web stranici u sekciji publikacija. Institut planira da organizuje seriju javnih tribina kako bi predstavio rezultate široj javnosti i pokrenuo diskusiju o mogućim rješenjima.</p>
    `,
    excerpt: "Institut je objavio sveobuhvatnu analizu demografskih trendova u regiji Sandžak tokom posljednjih deset godina. Studija pokazuje značajne promjene u starosnoj strukturi stanovništva...",
    date: "14. juni 2025",
    author: "Dr. Amina Hasić",
    category: "Istraživanja",
    readTime: "8 min čitanja",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop&q=80",
    tags: ["demografija", "istraživanje", "migracije", "mladi"]
  },
  "konferencija-kulturno-nasljedje": {
    id: 2,
    title: "Međunarodna konferencija o kulturnom nasljeđu",
    fullTitle: "Međunarodna konferencija 'Kulturno nasljeđe Sandžaka: Očuvanje i promocija'",
    content: `
      <p>Institut za historiju, demografiju i antropologiju Sandžaka sa ponosom najavljuje međunarodnu konferenciju koja će se održati 15-16. oktobra 2025. godine u Novom Pazaru. Dvodnevni događaj okupiće vodeće stručnjake iz oblasti kulturologije, historije i antropologije iz cijele Evrope.</p>

      <h2>O konferenciji</h2>
      <p>Konferencija "Kulturno nasljeđe Sandžaka: Očuvanje i promocija" predstavlja jedinstvenu priliku za razmjenu znanja i iskustava u oblasti zaštite i valorizacije kulturnog nasljeđa. Poseban fokus biće stavljen na:</p>
      
      <ul>
        <li>Materijalno kulturno nasljeđe - historijski spomenici i arheološka nalazišta</li>
        <li>Nematerijalno nasljeđe - tradicija, običaji, folklor</li>
        <li>Digitalizacija kulturnog nasljeđa</li>
        <li>Edukacija mladih o značaju kulturnog identiteta</li>
        <li>Turistički potencijali kulturnog nasljeđa</li>
      </ul>

      <h2>Ključni govornici</h2>
      <p>Među potvrđenim učesnicima su:</p>
      
      <ul>
        <li><strong>Prof. dr. Elena Marković</strong> - Univerzitet u Beogradu, ekspert za osmansko nasljeđe</li>
        <li><strong>Dr. Marco Rossi</strong> - UNESCO, specijalist za zaštitu kulturnog nasljeđa</li>
        <li><strong>Prof. dr. Amir Hadžić</strong> - Univerzitet u Sarajevu, antropolog</li>
        <li><strong>Dr. Sarah Johnson</strong> - Oxford University, historičarka Balkana</li>
      </ul>

      <h2>Program konferencije</h2>
      <p><strong>Prvi dan (15. oktobar):</strong></p>
      <ul>
        <li>09:00 - Registracija učesnika</li>
        <li>10:00 - Svečano otvaranje</li>
        <li>10:30 - Plenarne sesije</li>
        <li>14:00 - Paralelne tematske sesije</li>
        <li>17:00 - Poster prezentacije</li>
        <li>19:00 - Svečana večera</li>
      </ul>

      <p><strong>Drugi dan (16. oktobar):</strong></p>
      <ul>
        <li>09:00 - Radionice</li>
        <li>11:00 - Panel diskusije</li>
        <li>14:00 - Terenske posjete kulturnim spomenicima</li>
        <li>17:00 - Zaključci i preporuke</li>
        <li>18:00 - Zatvaranje konferencije</li>
      </ul>

      <h2>Poziv za učešće</h2>
      <p>Pozivamo sve zainteresovane istraživače, studente i praktičare da se prijave za učešće. Rok za slanje apstrakata je 1. septembar 2025. godine. Radovi mogu biti na bosanskom, srpskom, hrvatskom ili engleskom jeziku.</p>

      <p>Kotizacija za učešće iznosi 50 EUR i uključuje konferencijske materijale, osvježenje tokom pauza i svečanu večeru. Za studente je predviđen popust od 50%.</p>

      <h2>Dodatne informacije</h2>
      <p>Za sve dodatne informacije možete nas kontaktirati putem email adrese: konferencija@sandzakinstitut.org ili telefonom: +381 20 123 456.</p>

      <p>Pratite naše web stranice za redovne informacije o programu i učesnicima konferencije.</p>
    `,
    excerpt: "U oktobru organizujemo dvodnevnu konferenciju sa učešćem istraživača iz regiona i Evrope. Tema konferencije je 'Kulturno nasljeđe Sandžaka: Očuvanje i promocija'...",
    date: "10. juni 2025",
    author: "Dr. Mehmed Nukić",
    category: "Događaji",
    readTime: "5 min čitanja",
    imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&h=600&fit=crop&q=80",
    tags: ["konferencija", "kulturno nasljeđe", "međunarodna saradnja"]
  },
  "partnerstvo-univerzitet": {
    id: 3,
    title: "Partnerstvo sa Univerzitetom u Novom Pazaru",
    fullTitle: "Potpisan sporazum o saradnji sa Univerzitetom u Novom Pazaru",
    content: `
      <p>Institut za historiju, demografiju i antropologiju Sandžaka i Univerzitet u Novom Pazaru danas su potpisali sveobuhvatan sporazum o saradnji koji otvara nove mogućnosti za zajedničke istraživačke projekte i razmjenu stručnjaka.</p>

      <h2>Detalji sporazuma</h2>
      <p>Sporazum je potpisan u svečanoj atmosferi u prostorijama Univerziteta, a potpisali su ga direktor Instituta dr. Mehmed Nukić i rektor Univerziteta prof. dr. Emir Kurtić. Saradnja će biti fokusirana na nekoliko ključnih oblasti:</p>

      <ul>
        <li>Zajednički istraživački projekti o ekonomskom razvoju regije</li>
        <li>Razmjena naučnog kadra i studenata</li>
        <li>Organizovanje zajedničkih naučnih skupova</li>
        <li>Razvoj novih studijskih programa</li>
        <li>Pristup istraživačkoj infrastrukturi</li>
      </ul>

      <blockquote>
        <p>"Ovo partnerstvo predstavlja značajan korak naprijed u jačanju naučno-istraživačkih kapaciteta našeg regiona. Zajedno možemo postići mnogo više."</p>
        <cite>- Prof. dr. Emir Kurtić, rektor Univerziteta u Novom Pazaru</cite>
      </blockquote>

      <h2>Prvi zajednički projekti</h2>
      <p>Već su dogovoreni prvi konkretni projekti koji će biti realizovani u okviru ove saradnje:</p>

      <ol>
        <li><strong>Studija o potencijalima ruralnog turizma</strong> - Sveobuhvatna analiza mogućnosti razvoja turizma u selima Sandžaka</li>
        <li><strong>Digitalizacija kulturnog nasljeđa</strong> - Kreiranje digitalne arhive historijskih dokumenata i fotografija</li>
        <li><strong>Program podrške mladim preduzetnicima</strong> - Edukacija i mentorstvo za pokretanje biznisa</li>
      </ol>

      <h2>Benefiti za studente</h2>
      <p>Studenti će imati posebne pogodnosti od ove saradnje:</p>
      
      <ul>
        <li>Mogućnost učešća u istraživačkim projektima Instituta</li>
        <li>Pristup biblioteci i arhivskim materijalima</li>
        <li>Praksa i volontiranje u Institutu</li>
        <li>Učešće na radionicama i seminarima</li>
        <li>Mogućnost objavljivanja radova u publikacijama Instituta</li>
      </ul>

      <h2>Dugoročni ciljevi</h2>
      <p>Dugoročno, ova saradnja ima za cilj da:</p>
      
      <ul>
        <li>Poveća vidljivost naučnih istraživanja iz regije</li>
        <li>Privuče međunarodne fondove za istraživačke projekte</li>
        <li>Zadrži mlade talente u regionu</li>
        <li>Doprinese ekonomskom razvoju kroz transfer znanja</li>
      </ul>

      <p>Sporazum stupa na snagu odmah, a prva zajednička aktivnost - radionica o metodologiji naučnog istraživanja - planirana je za kraj juna.</p>
    `,
    excerpt: "Potpisali smo sporazum o saradnji koji omogućava zajedničke istraživačke projekte i razmjenu stručnjaka. Saradnja će biti fokusirana na ekonomski razvoj regije...",
    date: "5. juni 2025",
    author: "Redakcija",
    category: "Saradnja",
    readTime: "6 min čitanja",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop&q=80",
    tags: ["univerzitet", "saradnja", "obrazovanje", "istraživanje"]
  }
};

interface NewsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static paths for all articles
export async function generateStaticParams() {
  return Object.keys(newsArticles).map((slug) => ({
    slug: slug,
  }));
}

export default async function NewsArticlePage({ params }: NewsPageProps) {
  const { slug } = await params;
  const article = newsArticles[slug];

  if (!article) {
    notFound();
  }

  // Related articles (mock data)
  const relatedArticles = [
    {
      title: "Uspješno završena radionica o digitalnim vještinama",
      slug: "radionica-digitalne-vjestine",
      date: "28. maj 2025",
      category: "Edukacija"
    },
    {
      title: "Predstavljen izvještaj o ekonomskim prilikama",
      slug: "ekonomske-prilike-izvjestaj",
      date: "20. maj 2025",
      category: "Ekonomija"
    },
    {
      title: "Poziv za učešće u programu stipendiranja",
      slug: "konkurs-stipendije-2025",
      date: "15. maj 2025",
      category: "Obrazovanje"
    }
  ];

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b">
        <div className="container py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              Početna
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link href="/vijesti" className="text-muted-foreground hover:text-foreground">
              Vijesti
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground truncate max-w-[200px]">{article.title}</span>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-8 md:py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            {/* Back button */}
            <Button variant="ghost" size="sm" className="mb-6" asChild>
              <Link href="/vijesti">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Nazad na vijesti
              </Link>
            </Button>

            {/* Category and metadata */}
            <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {article.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {article.date}
              </span>
              <span className="flex items-center gap-1">
                <User className="h-3 w-3" />
                {article.author}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {article.readTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {article.fullTitle}
            </h1>

            {/* Featured image */}
            <div className="mb-8 overflow-hidden rounded-lg bg-muted aspect-[2/1]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={article.imageUrl} 
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article content */}
            <div 
              className="prose prose-lg max-w-none mb-12 prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-ul:my-6 prose-ol:my-6 prose-li:text-muted-foreground prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:my-6"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="mb-8 pb-8 border-b">
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-medium">Tagovi:</span>
                  {article.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-muted px-3 py-1 text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Share buttons */}
            <div className="mb-12">
              <h3 className="mb-4 text-sm font-medium">Podijelite ovaj članak</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Facebook className="mr-2 h-4 w-4" />
                  Facebook
                </Button>
                <Button variant="outline" size="sm">
                  <Twitter className="mr-2 h-4 w-4" />
                  Twitter
                </Button>
                <Button variant="outline" size="sm">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Kopiraj link
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related articles */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-2xl font-bold">Povezane vijesti</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedArticles.map((relatedArticle) => (
                <Card key={relatedArticle.slug}>
                  <CardContent className="pt-6">
                    <div className="mb-2 text-xs font-medium text-primary">
                      {relatedArticle.category}
                    </div>
                    <h3 className="mb-2 font-semibold line-clamp-2">
                      <Link href={`/vijesti/${relatedArticle.slug}`} className="hover:text-primary">
                        {relatedArticle.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground">{relatedArticle.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Ne propustite nijednu vijest</h2>
            <p className="mb-8 text-lg opacity-90">
              Prijavite se za naš newsletter i budite među prvima koji će
              saznati o našim aktivnostima
            </p>
            <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Vaša email adresa"
                className="flex-1 rounded-md bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground"
              />
              <Button size="lg" variant="secondary">
                Prijavite se
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Generate metadata for SEO
export async function generateMetadata({ params }: NewsPageProps) {
  const { slug } = await params;
  const article = newsArticles[slug];
  
  if (!article) {
    return {
      title: "Članak nije pronađen",
    };
  }

  return {
    title: article.fullTitle,
    description: article.excerpt,
    openGraph: {
      title: article.fullTitle,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      images: [article.imageUrl],
    },
  };
}