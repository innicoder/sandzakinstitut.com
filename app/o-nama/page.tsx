import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Target, Eye, Heart, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              O Institutu Sandžak
            </h1>
            <p className="text-lg text-muted-foreground">
              Nezavisna istraživačka institucija posvećena proučavanju i razvoju
              regije Sandžak kroz nauku, edukaciju i kulturu.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24" id="misija">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Naša misija i vizija</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-primary">
              <CardHeader>
                <Target className="mb-2 h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Misija</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Pružiti objektivna i naučno utemeljena istraživanja koja doprinose
                  razumijevanju prošlosti, sadašnjosti i budućnosti regije Sandžak.
                  Kroz edukaciju i kulturu, jačamo lokalne kapacitete i promovišemo
                  održivi razvoj uz očuvanje jedinstvenog identiteta.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary">
              <CardHeader>
                <Eye className="mb-2 h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Vizija</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Postati vodeći regionalni centar izvrsnosti za multidisciplinarna
                  istraživanja, prepoznat kao most između lokalnog znanja i globalnih
                  perspektiva, koji doprinosi prosperitetu i harmoničnom razvoju
                  multikulturalne zajednice Sandžaka.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Naše vrijednosti</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Principi koji vode naš rad i odnose sa zajednicom
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 font-semibold">Integritet</h3>
              <p className="text-sm text-muted-foreground">
                Objektivnost i etičnost u svim aspektima našeg rada
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 font-semibold">Inkluzivnost</h3>
              <p className="text-sm text-muted-foreground">
                Poštovanje različitosti i promocija dijaloga
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 font-semibold">Izvrsnost</h3>
              <p className="text-sm text-muted-foreground">
                Visoki standardi u istraživanju i edukaciji
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 font-semibold">Transparentnost</h3>
              <p className="text-sm text-muted-foreground">
                Otvorenost u radu i komunikaciji sa javnošću
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Naša historija</h2>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="space-y-8">
              <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-border">
                <div className="absolute left-0 top-1 h-2 w-2 -translate-x-1/2 rounded-full bg-primary"></div>
                <div className="mb-2 text-sm text-muted-foreground">2020</div>
                <h3 className="mb-2 font-semibold">Osnivanje Instituta</h3>
                <p className="text-sm text-muted-foreground">
                  Grupa istraživača i akademika osniva Institut sa ciljem
                  sistematskog proučavanja regije Sandžak.
                </p>
              </div>

              <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-border">
                <div className="absolute left-0 top-1 h-2 w-2 -translate-x-1/2 rounded-full bg-primary"></div>
                <div className="mb-2 text-sm text-muted-foreground">2021</div>
                <h3 className="mb-2 font-semibold">Prve publikacije</h3>
                <p className="text-sm text-muted-foreground">
                  Objavljivanje prvih naučnih studija o demografiji i ekonomskom
                  razvoju regije.
                </p>
              </div>

              <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-border">
                <div className="absolute left-0 top-1 h-2 w-2 -translate-x-1/2 rounded-full bg-primary"></div>
                <div className="mb-2 text-sm text-muted-foreground">2022</div>
                <h3 className="mb-2 font-semibold">Edukacioni programi</h3>
                <p className="text-sm text-muted-foreground">
                  Pokretanje programa obuke za mlade istraživače i lokalnu zajednicu.
                </p>
              </div>

              <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-border">
                <div className="absolute left-0 top-1 h-2 w-2 -translate-x-1/2 rounded-full bg-primary"></div>
                <div className="mb-2 text-sm text-muted-foreground">2023</div>
                <h3 className="mb-2 font-semibold">Međunarodna saradnja</h3>
                <p className="text-sm text-muted-foreground">
                  Uspostavljanje partnerstava sa univerzitetima i institutima iz
                  regiona i Evrope.
                </p>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 top-1 h-2 w-2 -translate-x-1/2 rounded-full bg-primary"></div>
                <div className="mb-2 text-sm text-muted-foreground">2025</div>
                <h3 className="mb-2 font-semibold">Nova era</h3>
                <p className="text-sm text-muted-foreground">
                  Proširenje djelatnosti i pokretanje digitalnih inicijativa za
                  veći domet i uticaj.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Pridružite se našoj misiji</h2>
            <p className="mb-8 text-lg opacity-90">
              Zajedno možemo doprinijeti boljem razumijevanju i razvoju regije Sandžak
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/kontakt">
                  Kontaktirajte nas
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link href="/istrazivanja">Naša istraživanja</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}