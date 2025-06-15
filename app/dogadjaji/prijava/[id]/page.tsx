import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import RegistrationForm from './registration-form';

// Define a simplified event type for registration
type EventInfo = {
  title: string;
  date: string;
};

// This would typically come from a database or API
const getEvent = (id: string): EventInfo | null => {
  const events: Record<string, EventInfo> = {
    '1': { title: 'Konferencija o održivom razvoju', date: '2024-03-15' },
    '2': { title: 'Radionica digitalnih veština za mlade', date: '2024-03-22' },
    '3': { title: 'Panel diskusija: Žene u preduzetništvu', date: '2024-03-28' },
    '4': { title: 'Obuka za pisanje projekata', date: '2024-04-05' },
    '5': { title: 'Sajam zapošljavanja', date: '2024-04-12' },
    '6': { title: 'Kulturno veče Sandžaka', date: '2024-04-18' },
    '7': { title: 'Eko-akcija čišćenja', date: '2024-04-22' },
    '8': { title: 'Startup vikend', date: '2024-04-26' },
    '9': { title: 'Predavanje: Mentalno zdravlje mladih', date: '2024-05-03' },
    '10': { title: 'Festival lokalne hrane', date: '2024-05-10' },
  };
  
  return events[id] || null;
};

export async function generateStaticParams() {
  // Generate static params for events 1-10
  return Array.from({ length: 10 }, (_, i) => ({
    id: String(i + 1),
  }));
}

export default async function EventRegistrationPage({ params }: { params: Promise<{ id: string }> }) {
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
      <div className="max-w-2xl mx-auto">
        <Link href={`/dogadjaji/${id}`} className="inline-flex items-center text-primary hover:underline mb-6">
          ← Nazad na detalje događaja
        </Link>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Prijava za događaj</CardTitle>
            <CardDescription>
              Prijavite se za: <strong>{event.title}</strong>
              <br />
              Datum: {new Date(event.date).toLocaleDateString('sr-Latn-RS', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RegistrationForm 
              eventId={id}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}