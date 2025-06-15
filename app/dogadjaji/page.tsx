import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Calendar, Clock, MapPin, Users, ArrowRight, Info } from "lucide-react";
// import { FeaturedSection } from "@/components/ui/featured-section";
// import { selectFeaturedContent } from "@/lib/featured-content";

// Mock events data
const upcomingEvents = [
  {
    id: 1,
    title: "Međunarodna konferencija o kulturnom nasljeđu",
    description: "Dvodnevna konferencija sa učešćem domaćih i međunarodnih stručnjaka na temu očuvanja i promocije kulturnog nasljeđa Sandžaka.",
    date: "15-16. oktobar 2025",
    time: "09:00 - 17:00",
    location: "Hotel Vrbak, Novi Pazar",
    capacity: "150 mjesta",
    type: "Konferencija",
    registrationOpen: true,
    // Featured metadata
    featured: true,
    featuredPriority: 9, // Important event
    featuredUntil: new Date('2025-10-15'),
  },
  {
    id: 2,
    title: "Radionica: Pisanje projektnih prijedloga",
    description: "Praktična radionica o pripremi projektnih prijedloga za EU fondove. Namijenjeno predstavnicima nevladinih organizacija.",
    date: "22. septembar 2025",
    time: "10:00 - 15:00",
    location: "Institut Sandžak, Novi Pazar",
    capacity: "30 mjesta",
    type: "Radionica",
    registrationOpen: true,
    featured: true,
    featuredPriority: 7, // Recommended
    featuredUntil: new Date('2025-09-22'),
  },
  {
    id: 3,
    title: "Tribina: Mladi i tržište rada",
    description: "Otvorena diskusija o izazovima sa kojima se mladi suočavaju pri zapošljavanju i mogućnostima za poboljšanje situacije.",
    date: "5. august 2025",
    time: "18:00 - 20:00",
    location: "Kulturni centar, Novi Pazar",
    capacity: "100 mjesta",
    type: "Tribina",
    registrationOpen: true,
  },
];

const pastEvents = [
  {
    id: 4,
    title: "Radionica o digitalnim vještinama",
    description: "Trodnevna radionica o osnovama web dizajna i programiranja za mlade.",
    date: "26-28. maj 2025",
    location: "Institut Sandžak",
    participants: "52 učesnika",
    type: "Radionica",
  },
  {
    id: 5,
    title: "Predstavljanje ekonomskog izvještaja",
    description: "Javna prezentacija izvještaja o ekonomskim prilikama u regionu.",
    date: "20. maj 2025",
    location: "Hotel Tadž, Novi Pazar",
    participants: "85 učesnika",
    type: "Prezentacija",
  },
  {
    id: 6,
    title: "Okrugli sto: Obrazovanje i razvoj",
    description: "Diskusija o reformi obrazovnog sistema sa fokusom na stručno obrazovanje.",
    date: "10. april 2025",
    location: "Univerzitet u Novom Pazaru",
    participants: "45 učesnika",
    type: "Okrugli sto",
  },
];

export default function EventsPage() {
  // // Get featured events
  // const allEvents = [...upcomingEvents, ...pastEvents];
  // const featuredEvents = selectFeaturedContent(upcomingEvents, {
  //   maxItems: 3,
  //   minPriority: 1,
  // });
  
  // // Transform to FeaturedSection format
  // const featuredItems = featuredEvents.map(event => ({
  //   id: event.id.toString(),
  //   title: event.title,
  //   description: event.description,
  //   href: `/dogadjaji/${event.id}`,
  //   category: event.type,
  //   featured: event.featured || false,
  //   featuredPriority: event.featuredPriority,
  // }));
  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Događaji
            </h1>
            <p className="text-lg text-muted-foreground">
              Učestvujte u našim konferencijama, radionicama i tribinama
              koji doprinose razvoju znanja i saradnje u regionu
            </p>
          </div>
        </div>
      </section>

      {/* Featured Events - removed to avoid duplication */}

      {/* Upcoming Events */}
      <section id="upcoming-events" className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold">Predstojeći događaji</h2>
            <p className="text-muted-foreground">
              Prijavite se na vrijeme i osigurajte svoje mjesto
            </p>
          </div>

          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-3">
                  <div className="bg-primary/5 p-6 md:p-8">
                    <div className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      {event.type}
                    </div>
                    <h3 className="mb-4 text-xl font-bold">{event.title}</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-2">
                        <Calendar className="mt-0.5 h-4 w-4 text-muted-foreground" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock className="mt-0.5 h-4 w-4 text-muted-foreground" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="mt-0.5 h-4 w-4 text-muted-foreground" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Users className="mt-0.5 h-4 w-4 text-muted-foreground" />
                        <span>{event.capacity}</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 p-6 md:p-8">
                    <p className="mb-6 text-muted-foreground">{event.description}</p>
                    <div className="flex flex-col gap-4 sm:flex-row">
                      {event.registrationOpen ? (
                        <Button asChild>
                          <Link href={`/dogadjaji/prijava/${event.id}`}>
                            Prijavite se
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      ) : (
                        <Button disabled>Prijave zatvorene</Button>
                      )}
                      <Button variant="outline" asChild>
                        <Link href={`/dogadjaji/${event.id}`}>
                          <Info className="mr-2 h-4 w-4" />
                          Više informacija
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold">Prošli događaji</h2>
            <p className="text-muted-foreground">
              Pregled realizovanih aktivnosti i postignuća
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pastEvents.map((event) => (
              <Card key={event.id}>
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-medium text-primary">{event.type}</span>
                    <span className="text-xs text-muted-foreground">{event.date}</span>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{event.description}</CardDescription>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3 w-3" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-3 w-3" />
                      <span>{event.participants}</span>
                    </div>
                  </div>
                  <Link
                    href={`/dogadjaji/arhiva/${event.id}`}
                    className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Pogledajte izvještaj
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More */}
          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <Link href="/dogadjaji/arhiva">
                Pogledajte cijelu arhivu
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center md:p-12">
              <h2 className="mb-4 text-3xl font-bold">Organizujte događaj sa nama</h2>
              <p className="mb-8 text-lg opacity-90">
                Institut Sandžak je otvoren za saradnju u organizaciji događaja
                koji doprinose razvoju regije i jačanju kapaciteta zajednice.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/kontakt">
                  Kontaktirajte nas
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}