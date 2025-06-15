import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, BookOpen, Users, Globe, Calendar } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              Centar za istraživanje i edukaciju regije Sandžak
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Institut Sandžak je nezavisna institucija posvećena proučavanju kulturnog
              nasljeđa, istorije i socio-ekonomskog razvoja regije Sandžak.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/o-nama">
                  Saznajte više
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/kontakt">Kontaktirajte nas</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Naše djelatnosti</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Kroz multidisciplinarni pristup, radimo na očuvanju identiteta i
              promovisanju održivog razvoja regije.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <BookOpen className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Istraživanja</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Naučne studije i analize društvenih, ekonomskih i kulturnih aspekata
                  regije Sandžak.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Edukacija</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Programi obuke, radionice i seminari za razvoj lokalnih kapaciteta
                  i vještina.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Saradnja</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Partnerstva sa domaćim i međunarodnim institucijama za razmjenu
                  znanja i resursa.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Calendar className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Događaji</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Konferencije, tribine i kulturni programi koji promovišu dijalog
                  i razumijevanje.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent News Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-3xl font-bold md:text-4xl">Najnovije vijesti</h2>
            <Button variant="ghost" asChild>
              <Link href="/vijesti">
                Sve vijesti
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="mb-2 text-sm text-muted-foreground">14. juni 2025</div>
                <CardTitle>Nova studija o demografskim promjenama</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Institut je objavio sveobuhvatnu analizu demografskih trendova u
                  regiji Sandžak tokom posljednjih deset godina...
                </CardDescription>
                <Link
                  href="/vijesti/demografska-studija"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Pročitajte više
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 text-sm text-muted-foreground">10. juni 2025</div>
                <CardTitle>Međunarodna konferencija o kulturnom nasljeđu</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  U oktobru organizujemo dvodnevnu konferenciju sa učešćem
                  istraživača iz regiona i Evrope...
                </CardDescription>
                <Link
                  href="/vijesti/konferencija-najava"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Pročitajte više
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 text-sm text-muted-foreground">5. juni 2025</div>
                <CardTitle>Partnerstvo sa Univerzitetom u Novom Pazaru</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Potpisali smo sporazum o saradnji koji omogućava zajedničke
                  istraživačke projekte i razmjenu stručnjaka...
                </CardDescription>
                <Link
                  href="/vijesti/partnerstvo-univerzitet"
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Pročitajte više
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Naš uticaj</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Brojke koje svjedoče o našem doprinosu razvoju regije
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">25+</div>
              <div className="text-sm text-muted-foreground">Objavljenih studija</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">150+</div>
              <div className="text-sm text-muted-foreground">Održanih radionica</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">3000+</div>
              <div className="text-sm text-muted-foreground">Učesnika programa</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">20+</div>
              <div className="text-sm text-muted-foreground">Partnera</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Budite dio promjene</h2>
            <p className="mb-8 text-lg opacity-90">
              Prijavite se za naš newsletter i budite informisani o najnovijim
              istraživanjima, događajima i inicijativama.
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
