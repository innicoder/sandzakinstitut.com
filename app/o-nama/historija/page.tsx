import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Users, Award, ArrowRight, BookOpen, Globe, Building2, Lightbulb } from "lucide-react";

// Detailed timeline data
const timelineData = [
  {
    year: "2022",
    title: "Osnivanje Instituta",
    description: "Institut za historiju, demografiju i antropologiju Sandžaka osnovan je Odlukom osnivača: Bošnjačke akademije nauka i umjetnosti (BANU) 29.01.2022. godine u Novom Pazaru.",
    details: [
      "Osnovan od strane Bošnjačke akademije nauka i umjetnosti (BANU)",
      "Registrovan kao naučna, kulturna i prosvjetna institucija",
      "Definisana djelatnost u skladu sa zakonima Crne Gore i Srbije",
      "Uspostavljen kao centar za kreativnu akciju i afirmaciju kulturnih osobina naroda Sandžaka"
    ],
    icon: Building2
  },
  {
    year: "2022",
    title: "Prve aktivnosti",
    description: "Pokretanje prvih istraživačkih aktivnosti i uspostavljanje operativne strukture Instituta.",
    details: [
      "Formiranje istraživačkih timova za historiju, demografiju i antropologiju",
      "Uspostavljanje knjižnog fonda i dokumentacione građe",
      "Organizovanje prvih naučnih skupova",
      "Započeto sakupljanje arhivskih dokumenata"
    ],
    icon: BookOpen
  },
  {
    year: "2023",
    title: "Edukacioni programi i publikacije",
    description: "Pokretanje programa obuke za mlade istraživače i objavljivanje prvih naučnih radova.",
    details: [
      "Pokrenut program 'Mladi istraživači Sandžaka'",
      "Održane ljetnje škole i seminari",
      "Publikovane prve naučne studije",
      "Uspostavljen mentorski program"
    ],
    icon: Users
  },
  {
    year: "2023",
    title: "Međunarodna saradnja",
    description: "Uspostavljanje partnerstava sa univerzitetima i institutima iz regiona i Evrope.",
    details: [
      "Podsticanje kulturne razmjene i afirmacija interkulturalnosti",
      "Umrežavanje sa dijasporom i njena reintegracija u zavičajni prostor",
      "Organizovana međunarodna konferencija",
      "Pokrenuti zajednički istraživački projekti"
    ],
    icon: Globe
  },
  {
    year: "2024",
    title: "Digitalna transformacija",
    description: "Razvoj digitalnih platformi i alata za istraživanje i edukaciju.",
    details: [
      "Lansirana interaktivna baza podataka",
      "Pokrenuta online platforma za učenje",
      "Digitalizovano preko 1000 istorijskih dokumenata",
      "Razvijene mobilne aplikacije za terenski rad"
    ],
    icon: Lightbulb
  },
  {
    year: "2025",
    title: "Nova era",
    description: "Proširenje djelatnosti i pokretanje digitalnih inicijativa za veći domet i uticaj.",
    details: [
      "Otvaranje regionalnih kancelarija",
      "Pokretanje programa stipendiranja",
      "Lansiranje inovacionog centra",
      "Strateško planiranje za narednih 10 godina"
    ],
    icon: Award
  }
];

// Major achievements data
const achievements = [
  {
    title: "50+ Publikacija",
    description: "Objavljeno preko 50 naučnih radova, studija i analiza",
    icon: BookOpen
  },
  {
    title: "500+ Edukovanih",
    description: "Preko 500 učesnika prošlo kroz naše edukacione programe",
    icon: Users
  },
  {
    title: "20+ Partnerstava",
    description: "Uspostavljeno preko 20 partnerstava sa domaćim i stranim institucijama",
    icon: Globe
  },
  {
    title: "10+ Projekata",
    description: "Uspješno realizovano preko 10 velikih istraživačkih projekata",
    icon: Award
  }
];

export default function HistoryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Naša historija
            </h1>
            <p className="text-lg text-muted-foreground">
              Institut za historiju, demografiju i antropologiju Sandžaka - naučna, kulturna i prosvjetna 
              institucija koja obavlja naučno-istraživačku djelatnost u oblastima društvenih i humanističkih nauka.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Timeline Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Ključni momenti</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Hronološki pregled najvažnijih događaja i dostignuća u razvoju našeg Instituta
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            {timelineData.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.year} className="mb-12 grid gap-8 md:grid-cols-[200px_1fr]">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{item.year}</div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                    </div>
                  </div>
                  <Card>
                    <CardContent className="pt-6">
                      <p className="mb-4 text-muted-foreground">{item.description}</p>
                      <ul className="space-y-2">
                        {item.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                            <span className="text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Naša dostignuća</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Brojke koje govore o našem uticaju i doprinosu razvoju regije
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement) => {
              const Icon = achievement.icon;
              return (
                <Card key={achievement.title}>
                  <CardContent className="pt-6">
                    <Icon className="mb-4 h-8 w-8 text-primary" />
                    <h3 className="mb-2 text-xl font-semibold">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision for Future Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Pogled u budućnost</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Naša vizija za narednu deceniju uključuje širenje djelatnosti, 
              jačanje regionalnih kapaciteta i uspostavljanje Instituta kao 
              nezaobilaznog centra znanja o Sandžaku.
            </p>
            <div className="grid gap-6 text-left md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Istraživački centar</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Razvoj naprednog istraživačkog centra sa najmodernijom opremom i resursima
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Regionalna mreža</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Uspostavljanje mreže regionalnih kancelarija za bolju pokrivenost terena
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Digitalna arhiva</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Stvaranje sveobuhvatne digitalne arhive istorijskih i savremenih podataka
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Budite dio naše priče</h2>
            <p className="mb-8 text-lg opacity-90">
              Pridružite se našoj misiji očuvanja i promovisanja nasljeđa Sandžaka
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/o-nama/tim">
                  Upoznajte naš tim
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link href="/kontakt">
                  Kontaktirajte nas
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}