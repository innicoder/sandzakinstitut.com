import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Database, Download, TrendingUp, Users, Building, GraduationCap, BarChart3, FileSpreadsheet } from "lucide-react";

// Mock data categories
const dataCategories = [
  {
    id: 1,
    title: "Demografija",
    icon: Users,
    description: "Podaci o stanovništvu, migracijama i starosnoj strukturi",
    datasets: 12,
    lastUpdate: "Juni 2025",
  },
  {
    id: 2,
    title: "Ekonomija",
    icon: TrendingUp,
    description: "Ekonomski pokazatelji, zaposlenost i privredni razvoj",
    datasets: 18,
    lastUpdate: "Maj 2025",
  },
  {
    id: 3,
    title: "Obrazovanje",
    icon: GraduationCap,
    description: "Statistike o obrazovnim institucijama i učenicima",
    datasets: 15,
    lastUpdate: "April 2025",
  },
  {
    id: 4,
    title: "Infrastruktura",
    icon: Building,
    description: "Podaci o putnoj mreži, komunalnim uslugama i razvoju",
    datasets: 8,
    lastUpdate: "Mart 2025",
  },
];

// Mock datasets
const featuredDatasets = [
  {
    id: 1,
    title: "Popis stanovništva 2025 - preliminarni rezultati",
    category: "Demografija",
    format: "Excel, CSV",
    size: "2.4 MB",
    downloads: 342,
  },
  {
    id: 2,
    title: "Stopa nezaposlenosti po opštinama (2020-2025)",
    category: "Ekonomija",
    format: "Excel, PDF",
    size: "1.8 MB",
    downloads: 256,
  },
  {
    id: 3,
    title: "Obrazovna struktura stanovništva",
    category: "Obrazovanje",
    format: "CSV, JSON",
    size: "850 KB",
    downloads: 189,
  },
];

export default function DataPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Baza podataka
            </h1>
            <p className="text-lg text-muted-foreground">
              Pristupite statističkim podacima i pokazateljima o regionu Sandžak.
              Svi podaci su dostupni za preuzimanje u različitim formatima.
            </p>
          </div>
        </div>
      </section>

      {/* Data Categories */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Kategorije podataka</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Istražite našu bazu podataka organizovanu po tematskim oblastima
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {dataCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Card key={category.id} className="group hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="mb-2 flex items-center justify-between">
                      <Icon className="h-8 w-8 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        {category.datasets} setova
                      </span>
                    </div>
                    <CardTitle>{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      {category.description}
                    </CardDescription>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        Ažurirano: {category.lastUpdate}
                      </span>
                      <Button variant="ghost" size="sm" className="group-hover:text-primary">
                        Istraži →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Datasets */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h2 className="mb-2 text-3xl font-bold">Popularni setovi podataka</h2>
              <p className="text-muted-foreground">
                Najčešće preuzimani podaci iz naše baze
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/istrazivanja/podaci/svi">
                Svi podaci →
              </Link>
            </Button>
          </div>

          <div className="space-y-4">
            {featuredDatasets.map((dataset) => (
              <Card key={dataset.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <h3 className="mb-2 text-lg font-semibold">{dataset.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Database className="h-4 w-4" />
                          {dataset.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <FileSpreadsheet className="h-4 w-4" />
                          {dataset.format}
                        </span>
                        <span>{dataset.size}</span>
                        <span>{dataset.downloads} preuzimanja</span>
                      </div>
                    </div>
                    <Button className="shrink-0">
                      <Download className="mr-2 h-4 w-4" />
                      Preuzmite
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Visualization */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Vizualizacija podataka</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Interaktivni grafikoni i mape za lakše razumijevanje podataka
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <BarChart3 className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Demografski trendovi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">Grafikon demografskih promjena</p>
                </div>
                <Button className="mt-4 w-full" variant="outline">
                  Interaktivni prikaz
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Ekonomski pokazatelji</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">Grafikon ekonomskog razvoja</p>
                </div>
                <Button className="mt-4 w-full" variant="outline">
                  Interaktivni prikaz
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* API Access */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <Card>
              <CardHeader className="text-center">
                <Database className="mx-auto mb-4 h-12 w-12 text-primary" />
                <CardTitle className="text-2xl">API pristup</CardTitle>
                <CardDescription>
                  Za developere i istraživače koji žele automatizovan pristup podacima
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="mb-3 font-semibold">REST API</h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Pristupite našim podacima putem standardnog REST API-ja.
                      Podržavamo JSON i CSV formate odgovora.
                    </p>
                    <Button variant="outline" size="sm">
                      API dokumentacija
                    </Button>
                  </div>
                  <div>
                    <h3 className="mb-3 font-semibold">Bulk preuzimanje</h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Preuzmite kompletne setove podataka za offline analizu.
                      Dostupno u različitim formatima.
                    </p>
                    <Button variant="outline" size="sm">
                      Preuzmi sve podatke
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Standards */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Standardi podataka</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Pridržavamo se međunarodnih standarda za kvalitet i dostupnost podataka
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-2xl font-bold text-primary">✓</span>
                </div>
                <h3 className="mb-2 font-semibold">Tačnost</h3>
                <p className="text-sm text-muted-foreground">
                  Svi podaci su verifikovani i provjereni kroz više izvora
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-2xl font-bold text-primary">⟳</span>
                </div>
                <h3 className="mb-2 font-semibold">Ažurnost</h3>
                <p className="text-sm text-muted-foreground">
                  Redovno ažuriranje podataka prema najnovijim izvorima
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-2xl font-bold text-primary">⊕</span>
                </div>
                <h3 className="mb-2 font-semibold">Dostupnost</h3>
                <p className="text-sm text-muted-foreground">
                  Otvoreni podaci dostupni svima bez ograničenja
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Trebate posebne podatke?</h2>
            <p className="mb-8 text-lg opacity-90">
              Ako ne možete pronaći podatke koji su vam potrebni, kontaktirajte nas
              i pomoći ćemo vam u pronalaženju ili prikupljanju informacija.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/kontakt">
                Kontaktirajte nas
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}