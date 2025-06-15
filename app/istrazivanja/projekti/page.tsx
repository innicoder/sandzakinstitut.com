import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Calendar, Users, Target, FileText, ExternalLink } from "lucide-react";

// Mock projects data
const activeProjects = [
  {
    id: 1,
    title: "Mapiranje kulturnog nasljeđa Sandžaka",
    description: "Sveobuhvatan projekat digitalizacije i katalogizacije materijalnog i nematerijalnog kulturnog nasljeđa regije.",
    status: "U toku",
    startDate: "Januar 2025",
    endDate: "Decembar 2026",
    partners: ["Ministarstvo kulture", "EU Delegacija", "Lokalne samouprave"],
    budget: "250.000 EUR",
    progress: 35,
    outcomes: [
      "Digitalna baza podataka kulturnih dobara",
      "Interaktivna mapa kulturnih znamenitosti",
      "Publikacija o kulturnom nasljeđu"
    ],
  },
  {
    id: 2,
    title: "Jačanje kapaciteta mladih za tržište rada",
    description: "Program obuke i mentorstva za mlade nezaposlene sa fokusom na digitalne vještine i preduzetništvo.",
    status: "U toku",
    startDate: "Mart 2025",
    endDate: "Mart 2026",
    partners: ["UNDP", "Lokalni biznis sektor", "Univerzitet u Novom Pazaru"],
    budget: "180.000 EUR",
    progress: 25,
    outcomes: [
      "300 mladih prošlo obuku",
      "50 novih radnih mjesta",
      "20 startap ideja razvijeno"
    ],
  },
  {
    id: 3,
    title: "Studija održivog turizma u Sandžaku",
    description: "Istraživanje potencijala za razvoj održivog turizma sa fokusom na ruralni i kulturni turizam.",
    status: "U toku",
    startDate: "Februar 2025",
    endDate: "August 2025",
    partners: ["Turistička organizacija Srbije", "GIZ"],
    budget: "85.000 EUR",
    progress: 60,
    outcomes: [
      "Strateški dokument za razvoj turizma",
      "Identifikovane turističke rute",
      "Preporuke za lokalne samouprave"
    ],
  },
];

const completedProjects = [
  {
    id: 4,
    title: "Demografska analiza Sandžaka 2015-2025",
    description: "Desetogodišnja studija demografskih promjena sa projekcijama za budućnost.",
    status: "Završen",
    period: "2024",
    partners: ["Republički zavod za statistiku"],
    results: "Publikovana studija, 3 policy brief-a, prezentacije u 6 opština",
  },
  {
    id: 5,
    title: "Podrška ženskom preduzetništvu",
    description: "Program podrške ženama preduzetnicama kroz obuke i mentorstvo.",
    status: "Završen",
    period: "2023-2024",
    partners: ["UN Women", "Razvojna agencija Srbije"],
    results: "50 žena pokrenulo biznis, 150 prošlo obuku, 10 uspješnih priča",
  },
  {
    id: 6,
    title: "Digitalizacija obrazovanja",
    description: "Uvođenje digitalnih alata u srednje škole regiona.",
    status: "Završen",
    period: "2023",
    partners: ["Ministarstvo prosvete", "Microsoft"],
    results: "10 škola opremljeno, 200 nastavnika obučeno, 2000 učenika koristilo platformu",
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Projekti
            </h1>
            <p className="text-lg text-muted-foreground">
              Implementiramo projekte koji doprinose održivom razvoju
              i unapređenju kvaliteta života u regionu Sandžak
            </p>
          </div>
        </div>
      </section>

      {/* Active Projects */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold">Aktivni projekti</h2>
            <p className="text-muted-foreground">
              Projekti koji su trenutno u fazi implementacije
            </p>
          </div>

          <div className="space-y-8">
            {activeProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <div className="grid md:grid-cols-3">
                  <div className="bg-primary/5 p-6 md:p-8">
                    <div className="mb-4 inline-block rounded-full bg-success/10 px-3 py-1 text-sm font-medium text-success">
                      {project.status}
                    </div>
                    <h3 className="mb-4 text-xl font-bold">{project.title}</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-2">
                        <Calendar className="mt-0.5 h-4 w-4 text-muted-foreground" />
                        <span>{project.startDate} - {project.endDate}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Target className="mt-0.5 h-4 w-4 text-muted-foreground" />
                        <span>Budget: {project.budget}</span>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="mt-6">
                      <div className="mb-2 flex justify-between text-sm">
                        <span className="text-muted-foreground">Napredak</span>
                        <span className="font-medium">{project.progress}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-muted">
                        <div 
                          className="h-full bg-primary transition-all"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-span-2 p-6 md:p-8">
                    <p className="mb-6 text-muted-foreground">{project.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="mb-3 flex items-center gap-2 font-semibold">
                        <Users className="h-4 w-4" />
                        Partneri
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.partners.map((partner, index) => (
                          <span
                            key={index}
                            className="rounded-full bg-muted px-3 py-1 text-sm"
                          >
                            {partner}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="mb-3 flex items-center gap-2 font-semibold">
                        <Target className="h-4 w-4" />
                        Očekivani rezultati
                      </h4>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground">
                        {project.outcomes.map((outcome, index) => (
                          <li key={index}>{outcome}</li>
                        ))}
                      </ul>
                    </div>

                    <Button variant="outline" asChild>
                      <Link href={`/istrazivanja/projekti/${project.id}`}>
                        <FileText className="mr-2 h-4 w-4" />
                        Više informacija
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold">Završeni projekti</h2>
            <p className="text-muted-foreground">
              Projekti koje smo uspješno implementirali
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {completedProjects.map((project) => (
              <Card key={project.id} className="flex flex-col">
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-medium text-muted-foreground">
                      {project.period}
                    </span>
                    <span className="rounded-full bg-info/10 px-2 py-1 text-xs font-medium text-info">
                      {project.status}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <CardDescription className="mb-4">{project.description}</CardDescription>
                  
                  <div className="mb-4">
                    <p className="mb-2 text-sm font-semibold">Partneri:</p>
                    <p className="text-sm text-muted-foreground">
                      {project.partners.join(", ")}
                    </p>
                  </div>

                  <div className="mb-4">
                    <p className="mb-2 text-sm font-semibold">Rezultati:</p>
                    <p className="text-sm text-muted-foreground">{project.results}</p>
                  </div>

                  <div className="mt-auto pt-4">
                    <Link
                      href={`/istrazivanja/projekti/arhiva/${project.id}`}
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      Detaljan izvještaj
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center md:p-12">
              <h2 className="mb-4 text-3xl font-bold">Imate ideju za projekat?</h2>
              <p className="mb-8 text-lg text-primary-foreground">
                Otvoreni smo za saradnju na projektima koji doprinose razvoju
                regije Sandžak. Kontaktirajte nas sa vašim prijedlogom.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/istrazivanja/saradnja">
                    Saznajte o saradnji
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10" 
                  asChild
                >
                  <Link href="/kontakt">Kontaktirajte nas</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}