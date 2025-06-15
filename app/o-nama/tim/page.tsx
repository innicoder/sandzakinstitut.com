import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, Linkedin, GraduationCap, Award } from "lucide-react";

// Mock team data
const teamMembers = [
  {
    id: 1,
    name: "Dr. Amina Hodžić",
    title: "Direktorica Instituta",
    bio: "Doktorat iz sociologije na Univerzitetu u Sarajevu. Preko 15 godina iskustva u istraživanju demografskih i socijalnih trendova u regionu Sandžak.",
    expertise: ["Demografia", "Socijalna politika", "Regionalni razvoj"],
    email: "amina.hodzic@institutsandzak.org",
    linkedin: "#",
    imageUrl: "/api/placeholder/300/300",
  },
  {
    id: 2,
    name: "Mr. Emir Kurtić",
    title: "Viši istraživač - Ekonomija",
    bio: "Magistar ekonomskih nauka sa fokusom na regionalni ekonomski razvoj. Autor brojnih studija o ekonomskim potencijalima Sandžaka.",
    expertise: ["Ekonomski razvoj", "Turizam", "Mala i srednja preduzeća"],
    email: "emir.kurtic@institutsandzak.org",
    linkedin: "#",
    imageUrl: "/api/placeholder/300/300",
  },
  {
    id: 3,
    name: "Dr. Selma Muratović",
    title: "Voditeljica programa obrazovanja",
    bio: "Doktorat iz obrazovnih nauka. Specijalizirana za reforme obrazovnog sistema i razvoj ljudskih resursa.",
    expertise: ["Obrazovne politike", "Razvoj kurikuluma", "Stručno obrazovanje"],
    email: "selma.muratovic@institutsandzak.org",
    linkedin: "#",
    imageUrl: "/api/placeholder/300/300",
  },
  {
    id: 4,
    name: "Dr. Mehmed Nukić",
    title: "Viši istraživač - Kultura i historija",
    bio: "Historičar i etnolog sa posebnim interesom za kulturno nasljeđe Sandžaka. Autor nekoliko knjiga o historiji regije.",
    expertise: ["Kulturno nasljeđe", "Historija", "Etnologija"],
    email: "mehmed.nukic@institutsandzak.org",
    linkedin: "#",
    imageUrl: "/api/placeholder/300/300",
  },
  {
    id: 5,
    name: "Mr. Jasmin Hasanbegović",
    title: "Istraživač - Javna uprava",
    bio: "Magistar javne uprave sa iskustvom u lokalnoj samoupravi. Fokus na unapređenju administrativnih kapaciteta.",
    expertise: ["Lokalna samouprava", "Javne politike", "Dobro upravljanje"],
    email: "jasmin.hasanbegovic@institutsandzak.org",
    linkedin: "#",
    imageUrl: "/api/placeholder/300/300",
  },
  {
    id: 6,
    name: "Amina Hasić",
    title: "Koordinatorica programa",
    bio: "Diplomirani menadžer sa iskustvom u upravljanju projektima. Odgovorna za koordinaciju edukacionih programa i događaja.",
    expertise: ["Upravljanje projektima", "Organizacija događaja", "Komunikacije"],
    email: "amina.hasic@institutsandzak.org",
    linkedin: "#",
    imageUrl: "/api/placeholder/300/300",
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Naš tim
            </h1>
            <p className="text-lg text-muted-foreground">
              Upoznajte stručnjake koji stoje iza istraživanja i programa
              Instituta Sandžak
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden">
                <div className="aspect-square bg-muted">
                  <div className="flex h-full items-center justify-center text-muted-foreground">
                    <GraduationCap className="h-12 w-12" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="font-medium">
                    {member.title}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {member.bio}
                  </p>
                  
                  <div>
                    <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold">
                      <Award className="h-4 w-4" />
                      Oblasti ekspertize
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((skill, index) => (
                        <span
                          key={index}
                          className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href={`mailto:${member.email}`}
                      className="text-muted-foreground hover:text-primary"
                      title="Email"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                    <a
                      href={member.linkedin}
                      className="text-muted-foreground hover:text-primary"
                      title="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Pridružite se našem timu</h2>
            <p className="mb-8 text-lg opacity-90">
              Tražimo talentovane istraživače i stručnjake koji dijele našu
              strast za razvojem regije Sandžak
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/kontakt">
                  Pošaljite CV
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10" 
                asChild
              >
                <Link href="/o-nama">O Institutu</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}