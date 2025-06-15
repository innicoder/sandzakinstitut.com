import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Download, FileText, Image, Film, Newspaper, Mail, Phone, User } from "lucide-react";

// Mock press releases
const pressReleases = [
  {
    id: 1,
    title: "Institut Sandžak objavio demografsku studiju",
    date: "14. juni 2025",
    excerpt: "Nova studija pokazuje značajne demografske promjene u regionu tokom posljednje decenije.",
    pdfUrl: "#",
  },
  {
    id: 2,
    title: "Najava međunarodne konferencije o kulturnom nasljeđu",
    date: "10. juni 2025",
    excerpt: "U oktobru će biti održana dvodnevna konferencija sa učešćem regionalnih i evropskih stručnjaka.",
    pdfUrl: "#",
  },
  {
    id: 3,
    title: "Uspješno završen program za mlade preduzetnike",
    date: "28. maj 2025",
    excerpt: "Preko 50 mladih ljudi završilo je program obuke o digitalnim vještinama i preduzetništvu.",
    pdfUrl: "#",
  },
];

export default function MediaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Za medije
            </h1>
            <p className="text-lg text-muted-foreground">
              Medijski centar Instituta Sandžak - vaš izvor informacija
              o našim aktivnostima i istraživanjima
            </p>
          </div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="py-16">
        <div className="container">
          <Card className="mx-auto max-w-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Kontakt za medije</CardTitle>
              <CardDescription>
                Za sve medijske upite i zahtjeve, kontaktirajte naš PR tim
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Amela Džindo</p>
                    <p className="text-sm text-muted-foreground">PR i komunikacije</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <a href="mailto:mediji@institutsandzak.org" className="text-primary hover:underline">
                    mediji@institutsandzak.org
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <a href="tel:+38120123457" className="text-primary hover:underline">
                    +381 20 123 457
                  </a>
                </div>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Dostupni smo radnim danima od 9:00 do 17:00. Za hitne upite
                van radnog vremena, pošaljite email sa naznakom &quot;HITNO&quot;.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Press Kit */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Medijski paket</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Preuzmite osnovne informacije, logotipe i vizuelne materijale
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <FileText className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Osnovne informacije</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Dokument sa osnovnim informacijama o Institutu, našoj misiji,
                    viziji i ključnim aktivnostima.
                  </CardDescription>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Preuzmite PDF
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  <Image className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Logotipi i vizuali</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Logotipi Instituta u različitim formatima (PNG, SVG, EPS)
                    i rezolucijama za print i web.
                  </CardDescription>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Preuzmite ZIP
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <User className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Biografije i fotografije</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Biografije ključnih članova tima sa profesionalnim
                    fotografijama visoke rezolucije.
                  </CardDescription>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Preuzmite PDF
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Film className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Video materijali</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Kratki video o Institutu i našim aktivnostima,
                    dostupan za medijsku upotrebu.
                  </CardDescription>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Pogledajte video
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold">Saopštenja za javnost</h2>
            <p className="text-muted-foreground">
              Najnovije vijesti i saopštenja Instituta Sandžak
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-6">
            {pressReleases.map((release) => (
              <Card key={release.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="mb-2">{release.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{release.date}</p>
                    </div>
                    <Newspaper className="h-6 w-6 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{release.excerpt}</CardDescription>
                  <div className="flex gap-4">
                    <Link
                      href={`/mediji/saopstenja/${release.id}`}
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      Pročitajte više
                    </Link>
                    <button className="flex items-center text-sm font-medium text-primary hover:underline">
                      <Download className="mr-1 h-3 w-3" />
                      Preuzmite PDF
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link href="/mediji/arhiva">
                Pogledajte arhivu saopštenja
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Expert Database */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Baza stručnjaka</h2>
            <p className="mb-8 text-lg text-primary-foreground">
              Naši stručnjaci su dostupni za medijske nastupe, komentare
              i intervjue o temama iz njihovih oblasti ekspertize
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/o-nama/tim">
                Pregledajte profile stručnjaka
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}