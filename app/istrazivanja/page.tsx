import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, FileText, Briefcase, Database, Handshake, TrendingUp, Award } from "lucide-react";

export default function ResearchPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Istraživanja
            </h1>
            <p className="text-lg text-muted-foreground">
              Naučno utemeljene studije i analize koje doprinose razumijevanju
              i razvoju regije Sandžak
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Oblasti istraživanja</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Fokusirani smo na multidisciplinarne studije koje obuhvataju
              različite aspekte života u regionu
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Publikacije</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Naučni radovi, studije i analize dostupni za preuzimanje
                </CardDescription>
                <Link 
                  href="/istrazivanja/publikacije"
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Pregledajte publikacije
                  <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <Briefcase className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Projekti</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Trenutni i završeni istraživački projekti našeg instituta
                </CardDescription>
                <Link 
                  href="/istrazivanja/projekti"
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Saznajte više
                  <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <Database className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Baza podataka</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Statistički podaci i pokazatelji o regionu Sandžak
                </CardDescription>
                <Link 
                  href="/istrazivanja/podaci"
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Pristupite podacima
                  <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <Handshake className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Saradnja</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Mogućnosti za partnerstvo i zajedničke projekte
                </CardDescription>
                <Link 
                  href="/istrazivanja/saradnja"
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Postanite partner
                  <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Topics */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Tematske oblasti</h2>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Socio-ekonomski razvoj</h3>
                    <p className="text-sm text-muted-foreground">
                      Analiza ekonomskih pokazatelja, tržišta rada i razvojnih potencijala
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Kulturno nasljeđe</h3>
                    <p className="text-sm text-muted-foreground">
                      Očuvanje tradicije, jezika i kulturnog identiteta regije
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Obrazovanje</h3>
                    <p className="text-sm text-muted-foreground">
                      Studije o obrazovnom sistemu i mogućnostima unapređenja
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Database className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Demografia</h3>
                    <p className="text-sm text-muted-foreground">
                      Populacione studije, migracije i demografski trendovi
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Lokalna samouprava</h3>
                    <p className="text-sm text-muted-foreground">
                      Analiza javnih politika i administrativnih kapaciteta
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Handshake className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Međuetnički odnosi</h3>
                    <p className="text-sm text-muted-foreground">
                      Promocija dijaloga i razumijevanja u multikulturalnoj sredini
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-3xl font-bold">Najnovije publikacije</h2>
            <Button variant="ghost" asChild>
              <Link href="/istrazivanja/publikacije">
                Sve publikacije
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="mb-2 text-sm text-muted-foreground">Juni 2025</div>
                <CardTitle className="line-clamp-2">
                  Demografske promjene u regionu Sandžak 2015-2025
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Sveobuhvatna analiza populacionih kretanja, migracionih tokova
                  i njihovog uticaja na lokalni razvoj...
                </CardDescription>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Dr. Amina Hodžić</span>
                  <Link
                    href="/istrazivanja/publikacije/demografske-promjene-2025"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Pročitajte
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 text-sm text-muted-foreground">Maj 2025</div>
                <CardTitle className="line-clamp-2">
                  Ekonomski potencijali turizma u Sandžaku
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Studija o mogućnostima razvoja održivog turizma sa fokusom
                  na kulturno-istorijske znamenitosti...
                </CardDescription>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Mr. Emir Kurtić</span>
                  <Link
                    href="/istrazivanja/publikacije/turizam-potencijali-2025"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Pročitajte
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 text-sm text-muted-foreground">April 2025</div>
                <CardTitle className="line-clamp-2">
                  Obrazovni sistem i potrebe tržišta rada
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Analiza usklađenosti obrazovnih programa sa potrebama
                  lokalnog i regionalnog tržišta rada...
                </CardDescription>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Dr. Selma Muratović</span>
                  <Link
                    href="/istrazivanja/publikacije/obrazovanje-trziste-2025"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Pročitajte
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Želite saradnju?</h2>
            <p className="mb-8 text-lg text-primary-foreground">
              Otvoreni smo za partnerstva sa institucijama koje dijele našu viziju
              razvoja regije kroz nauku i znanje
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/istrazivanja/saradnja">
                  Saznajte više o saradnji
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link href="/kontakt">Kontaktirajte nas</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}