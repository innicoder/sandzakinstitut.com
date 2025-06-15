import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Eye, FileText, HelpCircle } from "lucide-react";

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Politika privatnosti
            </h1>
            <p className="text-lg text-muted-foreground">
              Vaša privatnost nam je važna. Saznajte kako prikupljamo,
              koristimo i štitimo vaše podatke
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Posljednje ažuriranje: 14. juni 2025
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            {/* Quick Overview Cards */}
            <div className="mb-12 grid gap-6 md:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <Shield className="mb-3 h-8 w-8 text-primary" />
                  <h3 className="mb-2 font-semibold">Sigurnost podataka</h3>
                  <p className="text-sm text-muted-foreground">
                    Koristimo najnovije sigurnosne mjere za zaštitu vaših podataka
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Lock className="mb-3 h-8 w-8 text-primary" />
                  <h3 className="mb-2 font-semibold">Kontrola privatnosti</h3>
                  <p className="text-sm text-muted-foreground">
                    Vi imate potpunu kontrolu nad svojim podacima
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Eye className="mb-3 h-8 w-8 text-primary" />
                  <h3 className="mb-2 font-semibold">Transparentnost</h3>
                  <p className="text-sm text-muted-foreground">
                    Jasno objašnjavamo kako koristimo vaše podatke
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Policy Content */}
            <div className="prose prose-lg max-w-none">
              <h2 className="mb-4 text-2xl font-bold">1. Uvod</h2>
              <p className="mb-6 text-muted-foreground">
                Institut Sandžak (&quot;mi&quot;, &quot;nas&quot; ili &quot;naš&quot;) poštuje vašu privatnost i posvećen je
                zaštiti vaših ličnih podataka. Ova politika privatnosti objašnjava kako prikupljamo,
                koristimo, čuvamo i štitimo vaše informacije kada koristite našu web stranicu
                www.institutsandzak.org.
              </p>

              <h2 className="mb-4 mt-8 text-2xl font-bold">2. Podaci koje prikupljamo</h2>
              <h3 className="mb-3 text-xl font-semibold">2.1 Podaci koje nam vi dajete</h3>
              <ul className="mb-6 list-disc pl-6 text-muted-foreground">
                <li>Ime i prezime</li>
                <li>Email adresa</li>
                <li>Broj telefona (opciono)</li>
                <li>Organizacija/institucija (opciono)</li>
                <li>Sadržaj poruka koje nam šaljete</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold">2.2 Podaci koje automatski prikupljamo</h3>
              <ul className="mb-6 list-disc pl-6 text-muted-foreground">
                <li>IP adresa</li>
                <li>Tip i verzija pregledača</li>
                <li>Vrijeme posjete</li>
                <li>Stranice koje ste posjetili</li>
                <li>Vrijeme provedeno na stranicama</li>
              </ul>

              <h2 className="mb-4 mt-8 text-2xl font-bold">3. Kako koristimo vaše podatke</h2>
              <p className="mb-4 text-muted-foreground">Vaše podatke koristimo za:</p>
              <ul className="mb-6 list-disc pl-6 text-muted-foreground">
                <li>Odgovaranje na vaše upite i zahtjeve</li>
                <li>Slanje newsletter-a (uz vašu saglasnost)</li>
                <li>Poboljšanje naše web stranice i usluga</li>
                <li>Analizu korištenja web stranice</li>
                <li>Ispunjavanje zakonskih obaveza</li>
              </ul>

              <h2 className="mb-4 mt-8 text-2xl font-bold">4. Dijeljenje podataka</h2>
              <p className="mb-6 text-muted-foreground">
                Mi ne prodajemo, ne iznajmljujemo niti razmjenjujemo vaše lične podatke sa
                trećim stranama. Vaše podatke možemo podijeliti samo u sljedećim slučajevima:
              </p>
              <ul className="mb-6 list-disc pl-6 text-muted-foreground">
                <li>Uz vašu izričitu saglasnost</li>
                <li>Kada je to zakonski obavezno</li>
                <li>Za zaštitu naših prava i sigurnosti</li>
              </ul>

              <h2 className="mb-4 mt-8 text-2xl font-bold">5. Sigurnost podataka</h2>
              <p className="mb-6 text-muted-foreground">
                Primjenjujemo odgovarajuće tehničke i organizacijske mjere za zaštitu vaših
                ličnih podataka od neovlaštenog pristupa, izmjene, otkrivanja ili uništavanja.
                Ove mjere uključuju enkripciju podataka, sigurne servere i ograničen pristup
                podacima.
              </p>

              <h2 className="mb-4 mt-8 text-2xl font-bold">6. Vaša prava</h2>
              <p className="mb-4 text-muted-foreground">
                U skladu sa važećim zakonima o zaštiti podataka, imate sljedeća prava:
              </p>
              <ul className="mb-6 list-disc pl-6 text-muted-foreground">
                <li>Pravo pristupa vašim podacima</li>
                <li>Pravo na ispravku netačnih podataka</li>
                <li>Pravo na brisanje podataka</li>
                <li>Pravo na ograničavanje obrade</li>
                <li>Pravo na prenosivost podataka</li>
                <li>Pravo na prigovor</li>
              </ul>

              <h2 className="mb-4 mt-8 text-2xl font-bold">7. Kolačići (Cookies)</h2>
              <p className="mb-6 text-muted-foreground">
                Naša web stranica koristi kolačiće za poboljšanje korisničkog iskustva.
                Kolačići su male datoteke koje se čuvaju na vašem uređaju. Možete kontrolisati
                upotrebu kolačića kroz postavke vašeg pregledača.
              </p>

              <h2 className="mb-4 mt-8 text-2xl font-bold">8. Promjene politike privatnosti</h2>
              <p className="mb-6 text-muted-foreground">
                Zadržavamo pravo izmjene ove politike privatnosti. Sve izmjene će biti
                objavljene na ovoj stranici sa datumom posljednjeg ažuriranja.
              </p>

              <h2 className="mb-4 mt-8 text-2xl font-bold">9. Kontakt</h2>
              <p className="mb-6 text-muted-foreground">
                Ako imate pitanja o ovoj politici privatnosti ili načinu na koji koristimo
                vaše podatke, molimo vas da nas kontaktirate:
              </p>
              <Card>
                <CardContent className="p-6">
                  <p className="mb-2">
                    <strong>Institut Sandžak</strong>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Email: privatnost@institutsandzak.org<br />
                    Telefon: +381 20 123 456<br />
                    Adresa: Ul. Sandžačka 123, 36300 Novi Pazar, Srbija
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Actions */}
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Button variant="outline" asChild>
                <Link href="/kontakt">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Imate pitanja?
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/docs/politika-privatnosti.pdf">
                  <FileText className="mr-2 h-4 w-4" />
                  Preuzmite PDF
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}