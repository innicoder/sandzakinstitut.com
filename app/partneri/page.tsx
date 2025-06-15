import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLinkIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Partneri | Sandžak Institut',
  description: 'Naši partneri i sponzori koji podržavaju rad Sandžak Instituta.',
};

// Placeholder partner data
const partners = {
  platinum: [
    {
      name: 'Evropska Unija',
      description: 'Podrška kroz programe regionalne saradnje i razvoja',
      logo: '/api/placeholder/300/150',
      website: 'https://europa.eu',
    },
    {
      name: 'USAID',
      description: 'Partner u programima ekonomskog razvoja',
      logo: '/api/placeholder/300/150',
      website: 'https://usaid.gov',
    },
  ],
  gold: [
    {
      name: 'Fondacija za otvoreno društvo',
      description: 'Podrška civilnom sektoru',
      logo: '/api/placeholder/250/125',
      website: '#',
    },
    {
      name: 'UNDP Srbija',
      description: 'Program održivog razvoja',
      logo: '/api/placeholder/250/125',
      website: '#',
    },
    {
      name: 'GIZ',
      description: 'Nemačka razvojna saradnja',
      logo: '/api/placeholder/250/125',
      website: '#',
    },
  ],
  silver: [
    {
      name: 'Privredna komora Sandžaka',
      description: 'Lokalni partner za ekonomski razvoj',
      logo: '/api/placeholder/200/100',
      website: '#',
    },
    {
      name: 'Univerzitet u Novom Pazaru',
      description: 'Akademski partner',
      logo: '/api/placeholder/200/100',
      website: '#',
    },
    {
      name: 'Regionalna razvojna agencija',
      description: 'Podrška preduzetništvu',
      logo: '/api/placeholder/200/100',
      website: '#',
    },
    {
      name: 'Centar za mlade',
      description: 'Partner u omladinskim programima',
      logo: '/api/placeholder/200/100',
      website: '#',
    },
  ],
  community: [
    'Opština Novi Pazar',
    'Opština Sjenica',
    'Opština Tutin',
    'Opština Nova Varoš',
    'Opština Prijepolje',
    'Opština Priboj',
    'Lokalne NVO',
    'Omladinski klubovi',
    'Preduzetnička udruženja',
  ],
};

export default function PartnersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Naši partneri</h1>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          Sandžak Institut sarađuje sa brojnim partnerima koji dele našu viziju 
          održivog razvoja i una pređenja života građana Sandžaka.
        </p>
      </div>

      {/* Platinum Partners */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Platinski partneri</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {partners.platinum.map((partner, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <CardHeader>
                <div className="h-32 bg-muted/50 flex items-center justify-center mb-4 rounded-lg border border-border/50">
                  <div className="text-muted-foreground">
                    <svg className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
                <CardTitle>{partner.name}</CardTitle>
                <CardDescription className="text-foreground/70">{partner.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={partner.website} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="w-full">
                    Poseti sajt <ExternalLinkIcon className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Gold Partners */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Zlatni partneri</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partners.gold.map((partner, index) => (
            <Card key={index} className="hover:shadow-md transition-all duration-200">
              <CardHeader>
                <div className="h-24 bg-muted/50 flex items-center justify-center mb-4 rounded-lg border border-border/50">
                  <div className="text-muted-foreground">
                    <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
                <CardTitle className="text-lg">{partner.name}</CardTitle>
                <CardDescription className="text-sm text-foreground/70">{partner.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Silver Partners */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Srebrni partneri</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {partners.silver.map((partner, index) => (
            <Card key={index} className="text-center hover:shadow-md transition-all duration-200">
              <CardContent className="pt-6">
                <div className="h-20 bg-muted/50 flex items-center justify-center mb-4 rounded-lg border border-border/50">
                  <div className="text-muted-foreground">
                    <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-semibold mb-1">{partner.name}</h3>
                <p className="text-sm text-foreground/70">{partner.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Community Partners */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Partneri iz zajednice</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {partners.community.map((partner, index) => (
                <div key={index} className="text-center p-4 bg-muted/30 rounded-lg border border-border/50 hover:bg-muted/50 transition-colors">
                  <p className="font-medium text-foreground">{partner}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Postanite naš partner</h2>
        <p className="mb-6 max-w-2xl mx-auto opacity-90">
          Zainteresovani ste za saradnju? Kontaktirajte nas i razgovarajmo o tome 
          kako možemo zajedno doprineti razvoju Sandžaka.
        </p>
        <Link href="/kontakt">
          <Button variant="secondary" size="lg">
            Kontaktirajte nas
          </Button>
        </Link>
      </section>
    </div>
  );
}