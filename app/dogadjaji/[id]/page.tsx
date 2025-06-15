import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarIcon, MapPinIcon, ClockIcon } from 'lucide-react';

// Define the event type
type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  fullDescription: string;
  speakers: string[];
  capacity: number;
  price: string;
};

// This would typically come from a database or API
const getEvent = (id: string): Event | null => {
  const events: Record<string, Event> = {
    '1': {
      id: '1',
      title: 'Konferencija o održivom razvoju',
      date: '2024-03-15',
      time: '10:00',
      location: 'Novi Pazar, Hotel Vrbak',
      description: 'Pridružite nam se na konferenciji o održivom razvoju regije Sandžaka. Razgovaraćemo o ekonomskim prilikama, ekološkim izazovima i socijalnoj koheziji.',
      fullDescription: `Konferencija o održivom razvoju predstavlja jedinstvenu priliku za okupljanje lokalnih lidera, preduzetnika i građana zainteresovanih za budućnost našeg regiona.
      
      Teme koje ćemo pokriti:
      • Zelena ekonomija i nove prilike za zapošljavanje
      • Održivi turizam u Sandžaku
      • Energetska efikasnost i obnovljivi izvori energije
      • Socijalno preduzetništvo
      
      Predavači uključuju eksperte iz oblasti održivog razvoja, predstavnike lokalnih samouprava i uspešne preduzetnike.`,
      speakers: ['Dr. Amina Hasanović', 'Prof. Emir Suljević', 'Selma Kurtović, MBA'],
      capacity: 150,
      price: 'Besplatno'
    },
    '2': {
      id: '2',
      title: 'Radionica digitalnih veština za mlade',
      date: '2024-03-22',
      time: '14:00',
      location: 'Online',
      description: 'Besplatna radionica za mlade koji žele da unaprede svoje digitalne veštine i nauče osnove programiranja.',
      fullDescription: `Ova interaktivna radionica namenjena je mladima od 16 do 25 godina koji žele da steknu praktične digitalne veštine.
      
      Šta ćete naučiti:
      • Osnove web programiranja (HTML, CSS, JavaScript)
      • Rad sa alatima za kolaboraciju
      • Osnove digitalnog marketinga
      • Kako kreirati svoj online portfolio
      
      Radionica se održava online putem Zoom platforme. Svi polaznici će dobiti sertifikat o učešću.`,
      speakers: ['Amir Delić, Web Developer', 'Lejla Murić, Digital Marketing Expert'],
      capacity: 50,
      price: 'Besplatno'
    },
    '3': {
      id: '3',
      title: 'Panel diskusija: Žene u preduzetništvu',
      date: '2024-03-28',
      time: '18:00',
      location: 'Sjenica, Dom kulture',
      description: 'Inspirativne priče uspešnih preduzetnica iz našeg regiona.',
      fullDescription: `Panel diskusija okuplja uspešne preduzetnice koje će podeliti svoja iskustva, izazove i savete.
      
      Teme diskusije:
      • Pokretanje biznisa u lokalnoj sredini
      • Balansiranje porodice i karijere
      • Pristup finansijskim sredstvima
      • Umrežavanje i mentorstvo
      
      Nakon panela sledi neformalno druženje uz osveženje.`,
      speakers: ['Merima Jusufović', 'Sanela Hadžić', 'Emina Mehmedović'],
      capacity: 100,
      price: 'Besplatno'
    },
    '4': {
      id: '4',
      title: 'Obuka za pisanje projekata',
      date: '2024-04-05',
      time: '09:00',
      location: 'Tutin, Opština',
      description: 'Naučite kako da napišete uspešne projektne predloge za domaće i međunarodne fondove.',
      fullDescription: `Dvodnevna obuka koja pokriva sve aspekte pisanja projektnih predloga.
      
      Program obuke:
      • Identifikacija fondova i grantova
      • Struktura projektnog predloga
      • Budžetiranje projekta
      • Monitoring i evaluacija
      • Praktični rad na primerima
      
      Obuka je namenjena predstavnicima NVO sektora, lokalnih samouprava i preduzetnicima.`,
      speakers: ['Nedžad Imamović, Project Manager'],
      capacity: 30,
      price: '2000 RSD'
    },
    '5': {
      id: '5',
      title: 'Sajam zapošljavanja',
      date: '2024-04-12',
      time: '11:00',
      location: 'Novi Pazar, Univerzitet',
      description: 'Povežite se sa poslodavcima i pronađite svoju idealnu karijeru priliku.',
      fullDescription: `Najveći sajam zapošljavanja u regionu okuplja preko 30 kompanija.
      
      Šta možete očekivati:
      • Direktan kontakt sa poslodavcima
      • CV klinika - besplatna revizija biografije
      • Mock intervjui sa HR stručnjacima
      • Predavanja o karijernom razvoju
      
      Ponesite nekoliko kopija svoje biografije!`,
      speakers: [],
      capacity: 500,
      price: 'Besplatno'
    },
    '6': {
      id: '6',
      title: 'Kulturno veče Sandžaka',
      date: '2024-04-18',
      time: '19:00',
      location: 'Prijepolje, Kulturni centar',
      description: 'Proslava kulturnog nasleđa kroz muziku, ples i tradicionalnu kuhinju.',
      fullDescription: `Večer posvećena bogatoj kulturnoj baštini Sandžaka.
      
      Program:
      • Tradicionalne pesme i igre
      • Prikaz narodnih nošnji
      • Degustacija tradicionalnih jela
      • Izložba starih zanata
      
      Poseban gost: Ansambl "Sandžak"`,
      speakers: [],
      capacity: 200,
      price: '500 RSD'
    },
    '7': {
      id: '7',
      title: 'Eko-akcija čišćenja',
      date: '2024-04-22',
      time: '08:00',
      location: 'Pešterska visoravan',
      description: 'Pridružite nam se u akciji čišćenja i zaštite prirode Peštera.',
      fullDescription: `Volonterska akcija čišćenja u saradnji sa lokalnim eko-udruženjima.
      
      Šta je potrebno:
      • Udobna obuća i odeća
      • Rukavice (obezbeđujemo)
      • Vreće za smeće (obezbeđujemo)
      • Dobra volja!
      
      Nakon akcije sledi druženje uz roštilj.`,
      speakers: [],
      capacity: 100,
      price: 'Besplatno'
    },
    '8': {
      id: '8',
      title: 'Startup vikend',
      date: '2024-04-26',
      time: '17:00',
      location: 'Nova Varoš, Tech Hub',
      description: '48 sati intenzivnog rada na vašoj startup ideji uz mentorstvo eksperata.',
      fullDescription: `Startup vikend je prilika da svoju ideju pretvorite u biznis.
      
      Šta vas čeka:
      • Rad u timovima
      • Mentorstvo eksperata
      • Pitch trening
      • Networking sesije
      • Finale pred žirijem
      
      Najbolji tim osvaja nagradu od 1000 EUR!`,
      speakers: ['Startup mentori iz regiona'],
      capacity: 60,
      price: '1000 RSD'
    },
    '9': {
      id: '9',
      title: 'Predavanje: Mentalno zdravlje mladih',
      date: '2024-05-03',
      time: '16:00',
      location: 'Rožaje, Srednja škola',
      description: 'Važnost mentalnog zdravlja i kako prepoznati znakove koji zahtevaju pomoć.',
      fullDescription: `Stručno predavanje o mentalnom zdravlju mladih u modernom dobu.
      
      Teme:
      • Stres i anksioznost kod mladih
      • Uticaj društvenih mreža
      • Tehnike opuštanja
      • Kada i gde potražiti pomoć
      
      Predavanje je namenjeno učenicima, roditeljima i nastavnicima.`,
      speakers: ['Dr. Samira Redžepović, psiholog'],
      capacity: 150,
      price: 'Besplatno'
    },
    '10': {
      id: '10',
      title: 'Festival lokalne hrane',
      date: '2024-05-10',
      time: '12:00',
      location: 'Novi Pazar, Gradski trg',
      description: 'Ukusi Sandžaka na jednom mestu - festival lokalne hrane i proizvoda.',
      fullDescription: `Dvodnevni festival koji slavi lokalnu hranu i proizvođače.
      
      Šta možete pronaći:
      • Tradicionalni specijaliteti
      • Organski proizvodi
      • Domaći sirevi i mlečni proizvodi
      • Med i pčelinji proizvodi
      • Rukotvorine
      
      Bogat kulturni program tokom oba dana festivala!`,
      speakers: [],
      capacity: 1000,
      price: 'Besplatno'
    }
  };
  
  return events[id] || null;
};

export async function generateStaticParams() {
  // Generate static params for events 1-10
  return Array.from({ length: 10 }, (_, i) => ({
    id: String(i + 1),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const event = getEvent(id);
  
  if (!event) {
    return {
      title: 'Događaj nije pronađen',
    };
  }
  
  return {
    title: `${event.title} | Sandžak Institut`,
    description: event.description,
  };
}

export default async function EventPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const event = getEvent(id);
  
  if (!event) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Događaj nije pronađen</h1>
          <p className="text-muted-foreground mb-8">Izvinjavamo se, ali traženi događaj ne postoji.</p>
          <Link href="/dogadjaji">
            <Button>Nazad na listu događaja</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/dogadjaji" className="inline-flex items-center text-primary hover:underline mb-6">
          ← Nazad na listu događaja
        </Link>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">{event.title}</CardTitle>
            <CardDescription className="text-lg">{event.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-primary" />
                <span>{new Date(event.date).toLocaleDateString('sr-Latn-RS', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="w-5 h-5 text-primary" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-5 h-5 text-primary" />
                <span>{event.location}</span>
              </div>
            </div>
            
            <div className="border-t pt-6">
              <h2 className="text-xl font-semibold mb-4">O događaju</h2>
              <div className="prose prose-gray max-w-none">
                <p className="whitespace-pre-line">{event.fullDescription}</p>
              </div>
            </div>
            
            {event.speakers.length > 0 && (
              <div className="border-t pt-6">
                <h2 className="text-xl font-semibold mb-4">Predavači</h2>
                <ul className="list-disc list-inside space-y-2">
                  {event.speakers.map((speaker, index) => (
                    <li key={index}>{speaker}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="border-t pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Kapacitet</p>
                <p className="font-semibold">{event.capacity} mesta</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Cena</p>
                <p className="font-semibold">{event.price}</p>
              </div>
            </div>
            
            <div className="border-t pt-6">
              <Link href={`/dogadjaji/prijava/${event.id}`}>
                <Button size="lg" className="w-full md:w-auto">
                  Prijavite se za ovaj događaj
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}