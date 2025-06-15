import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FeaturedCard } from "@/components/ui/featured-card";
import { PRIORITY_THRESHOLDS } from "@/lib/featured-content";
import Link from "next/link";
import { ArrowRight, BookOpen, Users, Globe, Calendar } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section - Enhanced for impact and formality */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background py-32 md:py-40 lg:py-48">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-20 -z-10" />
        <div className="container">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">DOBRODOŠLI</p>
            <h1 className="mb-8 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl xl:text-7xl">
              Centar za istraživanje i edukaciju<br className="hidden sm:inline" />
              <span className="text-primary">regije Sandžak</span>
            </h1>
            <p className="lead mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl lg:text-2xl">
              Institut Sandžak predstavlja vodeću nezavisnu instituciju posvećenu
              proučavanju kulturnog nasljeđa, istorije i socio-ekonomskog razvoja
              regije Sandžak kroz naučni pristup i edukativne programe.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="btn-professional min-w-[200px] text-base" asChild>
                <Link href="/o-nama">
                  O institutu
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" className="btn-professional min-w-[200px] text-base" asChild>
                <Link href="/kontakt">Kontaktirajte nas</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - More formal and structured */}
      <section className="section border-y border-border/50 bg-muted/30">
        <div className="container">
          <div className="mb-16 text-center">
            <p className="heading-formal mb-4">NAŠA MISIJA</p>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">Ključne djelatnosti</h2>
            <p className="lead mx-auto max-w-3xl text-muted-foreground">
              Kroz multidisciplinarni i naučno utemeljen pristup, Institut radi na
              očuvanju kulturnog identiteta i promovisanju održivog razvoja regije Sandžak.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="card-hover border-2 border-transparent bg-background transition-all duration-200 hover:border-primary/20">
              <CardHeader className="space-y-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                  <BookOpen className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">Istraživanja</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Naučne studije i analize društvenih, ekonomskih i kulturnih aspekata
                  regije Sandžak kroz rigorozan metodološki pristup.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover border-2 border-transparent bg-background transition-all duration-200 hover:border-primary/20">
              <CardHeader className="space-y-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">Edukacija</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Stručni programi obuke, radionice i seminari za razvoj lokalnih
                  kapaciteta i profesionalnih vještina.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover border-2 border-transparent bg-background transition-all duration-200 hover:border-primary/20">
              <CardHeader className="space-y-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                  <Globe className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">Saradnja</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Strateška partnerstva sa domaćim i međunarodnim institucijama
                  za razmjenu znanja i resursa.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover border-2 border-transparent bg-background transition-all duration-200 hover:border-primary/20">
              <CardHeader className="space-y-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                  <Calendar className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">Događaji</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Naučne konferencije, stručne tribine i kulturni programi koji
                  promovišu dijalog i razumijevanje.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured News Section - Enhanced presentation */}
      <section className="section bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="container">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <p className="heading-formal mb-4">AKTUELNOSTI</p>
              <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">Izdvojene vijesti</h2>
            </div>
            <Button variant="ghost" size="lg" className="group" asChild>
              <Link href="/vijesti">
                Sve vijesti
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Featured Articles */}
          <div className="grid gap-8 lg:grid-cols-2">
            <FeaturedCard
              title="Nova studija o demografskim promjenama u regionu Sandžak"
              description="Institut je objavio sveobuhvatnu analizu demografskih trendova u regiji Sandžak tokom posljednjih deset godina. Studija pokazuje značajne promjene u starosnoj strukturi stanovništva i otkriva ključne faktore koji utiču na migracione tokove."
              image={{
                src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&q=80",
                alt: "Demografska studija Sandžak"
              }}
              href="/vijesti/demografska-studija"
              date={new Date('2025-06-14')}
              readTime="5 min čitanja"
              category="Istraživanja"
              priority={PRIORITY_THRESHOLDS.FEATURED} // 8+ Featured (amber)
            />

            <FeaturedCard
              title="Međunarodna konferencija o kulturnom nasljeđu"
              description="U oktobru organizujemo dvodnevnu konferenciju sa učešćem istraživača iz regiona i Evrope."
              image={{
                src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop&q=80",
                alt: "Konferencija o kulturnom nasljeđu"
              }}
              href="/vijesti/konferencija-najava"
              date={new Date('2025-06-10')}
              readTime="3 min čitanja"
              category="Događaji"
              priority={6} // Below featured threshold
            />

            <FeaturedCard
              title="Partnerstvo sa Univerzitetom u Novom Pazaru"
              description="Potpisali smo sporazum o saradnji koji omogućava zajedničke istraživačke projekte."
              image={{
                src: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop&q=80",
                alt: "Partnerstvo sa univerzitetom"
              }}
              href="/vijesti/partnerstvo-univerzitet"
              date={new Date('2025-06-05')}
              readTime="4 min čitanja"
              category="Saradnja"
              priority={6} // Below featured threshold
            />
          </div>
        </div>
      </section>

      {/* Statistics Section - More distinguished and formal */}
      <section className="section relative overflow-hidden border-y border-border/50 bg-primary/5">
        <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
        <div className="container relative">
          <div className="mb-16 text-center">
            <p className="heading-formal mb-4">REZULTATI RADA</p>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">Naš uticaj na razvoj regije</h2>
            <p className="lead mx-auto max-w-3xl text-muted-foreground">
              Kroz godine predanog rada, Institut je ostvario značajne rezultate
              koji svjedoče o našem doprinosu razvoju regije Sandžak
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="group text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary/20">
                  <div className="text-3xl font-bold text-primary">25+</div>
                </div>
                <div className="text-lg font-semibold text-foreground">Objavljenih studija</div>
                <div className="mt-1 text-sm text-muted-foreground">Naučnih i stručnih radova</div>
              </div>
              <div className="group text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary/20">
                  <div className="text-3xl font-bold text-primary">150+</div>
                </div>
                <div className="text-lg font-semibold text-foreground">Održanih radionica</div>
                <div className="mt-1 text-sm text-muted-foreground">Edukativnih programa</div>
              </div>
              <div className="group text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary/20">
                  <div className="text-3xl font-bold text-primary">3000+</div>
                </div>
                <div className="text-lg font-semibold text-foreground">Učesnika programa</div>
                <div className="mt-1 text-sm text-muted-foreground">Direktnih korisnika</div>
              </div>
              <div className="group text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary/20">
                  <div className="text-3xl font-bold text-primary">20+</div>
                </div>
                <div className="text-lg font-semibold text-foreground">Institucionalnih partnera</div>
                <div className="mt-1 text-sm text-muted-foreground">Domaćih i međunarodnih</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - More professional call to action */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 py-20 text-primary-foreground md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/80">PRIDRUŽITE SE</p>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">Budite dio pozitivnih promjena</h2>
            <p className="lead mb-12 text-lg opacity-90 md:text-xl">
              Prijavite se za naš newsletter i budite redovno informisani o najnovijim
              istraživanjima, stručnim događajima i institucionalnim inicijativama.
            </p>
            <form className="mx-auto flex max-w-lg flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Unesite vašu email adresu"
                className="flex-1 rounded-lg border-0 bg-background/10 px-6 py-3 text-primary-foreground placeholder:text-primary-foreground/60 backdrop-blur-sm focus:bg-background/20 focus:outline-none focus:ring-2 focus:ring-white/20"
                required
              />
              <Button size="lg" className="btn-professional min-w-[140px] bg-white text-primary hover:bg-white/90">
                Prijavite se
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
