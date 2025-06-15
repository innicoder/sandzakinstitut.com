"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { NewsletterForm } from "@/components/ui/newsletter-form";
import Link from "next/link";
import { Mail, CheckCircle, Shield, Calendar, Gift } from "lucide-react";
import { useState } from "react";

export default function NewsletterPage() {
  const [frequency, setFrequency] = useState<"weekly" | "monthly">("monthly");

  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Mail className="mx-auto mb-6 h-16 w-16 text-primary" />
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Newsletter Institut Sandžak
            </h1>
            <p className="text-lg text-muted-foreground">
              Budite informisani o najnovijim istraživanjima, događajima
              i inicijativama direktno u vašem email sandučetu
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Zašto se prijaviti?</h2>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <CheckCircle className="mb-2 h-8 w-8 text-green-600" />
                  <CardTitle className="text-lg">Ekskluzivan sadržaj</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Pristup studijama i analizama prije javnog objavljivanja
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Calendar className="mb-2 h-8 w-8 text-blue-600" />
                  <CardTitle className="text-lg">Pravovremene informacije</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Budite prvi koji će saznati za naše događaje i radionice
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Gift className="mb-2 h-8 w-8 text-purple-600" />
                  <CardTitle className="text-lg">Besplatni resursi</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Pristup edukacionim materijalima i vodičima
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="mb-2 h-8 w-8 text-orange-600" />
                  <CardTitle className="text-lg">Bez spama</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Garantujemo kvalitetan sadržaj bez neželjenih poruka
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Form */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Prijavite se na naš newsletter</CardTitle>
                <CardDescription>
                  Odaberite učestalost primanja i unesite vašu email adresu
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Frequency Selection */}
                <div>
                  <label className="mb-3 block text-sm font-medium">
                    Koliko često želite primati newsletter?
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setFrequency("weekly")}
                      className={`rounded-lg border p-4 text-center transition-colors ${
                        frequency === "weekly"
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="font-medium">Sedmično</div>
                      <div className="text-sm text-muted-foreground">
                        Svake nedjelje
                      </div>
                    </button>
                    <button
                      onClick={() => setFrequency("monthly")}
                      className={`rounded-lg border p-4 text-center transition-colors ${
                        frequency === "monthly"
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="font-medium">Mjesečno</div>
                      <div className="text-sm text-muted-foreground">
                        Prvi ponedjeljak u mjesecu
                      </div>
                    </button>
                  </div>
                </div>

                {/* Newsletter Form */}
                <NewsletterForm 
                  placeholder="Unesite vašu email adresu"
                  buttonText="Prijavite me"
                />

                {/* Privacy Notice */}
                <p className="text-center text-sm text-muted-foreground">
                  Prijavom se slažete sa našom{" "}
                  <Link href="/privatnost" className="text-primary hover:underline">
                    politikom privatnosti
                  </Link>
                  . Možete se odjaviti u bilo kom trenutku.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Šta možete očekivati?</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Naš newsletter donosi pažljivo odabran sadržaj prilagođen vašim interesima
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-semibold">Sedmični newsletter sadrži:</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    Pregled najvažnijih vijesti i događaja
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    Najave predstojeći radionica i tribina
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    Kratke analize aktuelnih tema
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    Preporuke za čitanje
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-semibold">Mjesečni newsletter sadrži:</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    Detaljan pregled mjesečnih aktivnosti
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    Ekskluzivne studije i izvještaje
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    Intervjue sa stručnjacima
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    Pozive za učešće u projektima
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Šta kažu naši čitaoci</h2>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <p className="mb-4 italic text-muted-foreground">
                    &quot;Newsletter Instituta Sandžak je moj glavni izvor informacija
                    o dešavanjima u regionu. Cijenim kvalitet sadržaja i
                    objektivnost pristupa.&quot;
                  </p>
                  <div className="font-medium">Dr. Amina Mujić</div>
                  <div className="text-sm text-muted-foreground">
                    Profesorica, Univerzitet u Novom Pazaru
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <p className="mb-4 italic text-muted-foreground">
                    &quot;Kao novinar, newsletter mi pomaže da budem u toku sa
                    najnovijim istraživanjima. Posebno su korisne analize
                    i statistički podaci.&quot;
                  </p>
                  <div className="font-medium">Emir Hasanović</div>
                  <div className="text-sm text-muted-foreground">
                    Novinar, Radio Sto Plus
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Često postavljana pitanja</h2>
          </div>

          <div className="mx-auto max-w-3xl space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Da li je newsletter besplatan?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Da, naš newsletter je potpuno besplatan i dostupan svima koji
                  žele biti informisani o radu Instituta.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Mogu li se odjaviti?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Naravno! Svaki email sadrži link za odjavu na dnu poruke.
                  Također nas možete kontaktirati direktno.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Hoćete li dijeliti moju email adresu?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Ne, nikada. Vaša privatnost nam je veoma važna. Email adrese
                  koristimo isključivo za slanje newsletter-a.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}