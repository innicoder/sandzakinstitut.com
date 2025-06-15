import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Handshake, Target, FileText, Users, Award, Globe } from "lucide-react";

export default function CollaborationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Postanite partner
            </h1>
            <p className="text-lg text-muted-foreground">
              Pozivamo institucije, organizacije i pojedince da se pridruže
              našoj misiji razvoja regije kroz zajedničke projekte i inicijative
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Modeli saradnje</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Nudimo različite oblike partnerstva prilagođene vašim potrebama i mogućnostima
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Handshake className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Institucionalna saradnja</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Dugoročna partnerstva sa univerzitetima, institutima i javnim ustanovama
                  za realizaciju zajedničkih istraživačkih projekata.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Zajednički istraživački projekti</li>
                  <li>• Razmjena stručnjaka i znanja</li>
                  <li>• Organizacija konferencija</li>
                  <li>• Publikovanje studija</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Projektna saradnja</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Saradnja na konkretnim projektima sa jasno definisanim ciljevima,
                  rokom i budžetom.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Aplikacije za fondove EU</li>
                  <li>• Implementacija programa</li>
                  <li>• Monitoring i evaluacija</li>
                  <li>• Tehnička podrška</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Korporativno partnerstvo</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Saradnja sa privatnim sektorom kroz programe društveno odgovornog
                  poslovanja i razvojne inicijative.
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Sponzorstvo programa</li>
                  <li>• Stipendije za mlade</li>
                  <li>• Mentorstvo i praksa</li>
                  <li>• Razvoj vještina</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Zašto sarađivati sa nama?</h2>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Stručnost i iskustvo</h3>
                    <p className="text-sm text-muted-foreground">
                      Tim eksperata sa dokazanim rezultatima u istraživanju i implementaciji projekata
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Regionalni uticaj</h3>
                    <p className="text-sm text-muted-foreground">
                      Direktan pristup lokalnim zajednicama i duboko razumijevanje regionalnog konteksta
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Kredibilitet</h3>
                    <p className="text-sm text-muted-foreground">
                      Priznata institucija sa transparentnim radom i visokim standardima
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Mreža partnera</h3>
                    <p className="text-sm text-muted-foreground">
                      Pristup širokoj mreži domaćih i međunarodnih partnera
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Mjerljiv uticaj</h3>
                    <p className="text-sm text-muted-foreground">
                      Fokus na konkretne rezultate i pozitivne promjene u zajednici
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Handshake className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Fleksibilnost</h3>
                    <p className="text-sm text-muted-foreground">
                      Prilagođavamo se potrebama partnera i specifičnostima projekata
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Naši partneri</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Ponosni smo na saradnju sa vodećim institucijama
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex items-center justify-center rounded-lg border bg-card p-6">
                <div className="text-center">
                  <div className="mb-2 h-12 w-12 mx-auto rounded-full bg-muted"></div>
                  <p className="text-xs text-muted-foreground">Partner {i}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Kako započeti saradnju?</h2>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  1
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Kontaktirajte nas</h3>
                  <p className="text-muted-foreground">
                    Pošaljite nam email sa opisom vaše organizacije i ideje za saradnju
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  2
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Inicijalni sastanak</h3>
                  <p className="text-muted-foreground">
                    Organizujemo sastanak za detaljnije upoznavanje i razmatranje mogućnosti
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  3
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Prijedlog saradnje</h3>
                  <p className="text-muted-foreground">
                    Pripremamo konkretan prijedlog sa jasnim ciljevima i očekivanim rezultatima
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  4
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Potpisivanje sporazuma</h3>
                  <p className="text-muted-foreground">
                    Formalizujemo saradnju kroz memorandum o razumijevanju ili ugovor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center md:p-12">
              <h2 className="mb-4 text-3xl font-bold">Spremni za saradnju?</h2>
              <p className="mb-8 text-lg opacity-90">
                Kontaktirajte nas danas i razgovarajmo o tome kako možemo
                zajedno doprinijeti razvoju regije Sandžak
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/kontakt">
                    Kontaktirajte nas
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10" 
                  asChild
                >
                  <Link href="/istrazivanja/projekti">Pogledajte projekte</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}