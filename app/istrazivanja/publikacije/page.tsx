"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Download, Calendar, User, Tag, Search, Filter } from "lucide-react";
import { useState } from "react";

// Mock data for publications
const publications = [
  {
    id: 1,
    title: "Demografske promjene u regionu Sandžak 2015-2025",
    author: "Dr. Amina Hodžić",
    date: "Juni 2025",
    category: "Demografia",
    abstract: "Sveobuhvatna analiza populacionih kretanja, migracionih tokova i njihovog uticaja na lokalni razvoj. Studija obuhvata podatke iz svih opština regije i poredi ih sa nacionalnim i regionalnim trendovima.",
    pdfUrl: "#",
    pages: 145,
  },
  {
    id: 2,
    title: "Ekonomski potencijali turizma u Sandžaku",
    author: "Mr. Emir Kurtić",
    date: "Maj 2025",
    category: "Ekonomija",
    abstract: "Studija o mogućnostima razvoja održivog turizma sa fokusom na kulturno-istorijske znamenitosti. Analiza postojećih kapaciteta i preporuke za unapređenje turističke ponude.",
    pdfUrl: "#",
    pages: 98,
    featured: true,
    featuredPriority: 6, // Recommended
    featuredUntil: new Date('2025-03-15'),
  },
  {
    id: 3,
    title: "Obrazovni sistem i potrebe tržišta rada",
    author: "Dr. Selma Muratović",
    date: "April 2025",
    category: "Obrazovanje",
    abstract: "Analiza usklađenosti obrazovnih programa sa potrebama lokalnog i regionalnog tržišta rada. Preporuke za reformu stručnog obrazovanja i razvoj novih programa.",
    pdfUrl: "#",
    pages: 124,
  },
  {
    id: 4,
    title: "Kulturno nasljeđe Sandžaka: Inventar i zaštita",
    author: "Dr. Mehmed Nukić",
    date: "Mart 2025",
    category: "Kultura",
    abstract: "Katalogizacija materijalnog i nematerijalnog kulturnog nasljeđa regije sa prijedlozima za očuvanje. Poseban fokus na arhitektonskom nasljeđu i tradicijskim zanatima.",
    pdfUrl: "#",
    pages: 186,
  },
  {
    id: 5,
    title: "Lokalna samouprava: Izazovi i perspektive",
    author: "Mr. Jasmin Hasanbegović",
    date: "Februar 2025",
    category: "Javna uprava",
    abstract: "Analiza administrativnih kapaciteta lokalnih samouprava u regionu. Komparativna studija najboljih praksi i preporuke za unapređenje javnih usluga.",
    pdfUrl: "#",
    pages: 76,
  },
];

const categories = ["Sve", "Demografia", "Ekonomija", "Obrazovanje", "Kultura", "Javna uprava"];

export default function PublicationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Sve");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filteredPublications = publications.filter((pub) => {
    const matchesCategory = selectedCategory === "Sve" || pub.category === selectedCategory;
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.abstract.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Publikacije
            </h1>
            <p className="text-lg text-muted-foreground">
              Pristupite našim naučnim radovima, studijama i analizama
              o različitim aspektima života u regionu Sandžak
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="border-b py-8">
        <div className="container">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1 md:max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Pretražite publikacije..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-md border border-input bg-background pl-10 pr-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden"
            >
              <Filter className="mr-2 h-4 w-4" />
              Filteri
            </Button>
          </div>

          {/* Category Pills */}
          <div className={`mt-4 flex flex-wrap gap-2 ${showFilters ? 'block' : 'hidden md:flex'}`}>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Prikazuje se {filteredPublications.length} od {publications.length} publikacija
            </p>
            <select className="rounded-md border border-input bg-background px-3 py-1 text-sm">
              <option>Najnovije prvo</option>
              <option>Najstarije prvo</option>
              <option>Po naslovu</option>
              <option>Po autoru</option>
            </select>
          </div>

          <div className="space-y-6">
            {filteredPublications.map((publication) => (
              <Card key={publication.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      <CardTitle className="mb-2 text-xl">{publication.title}</CardTitle>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {publication.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {publication.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Tag className="h-3 w-3" />
                          {publication.category}
                        </span>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="shrink-0">
                      <Download className="mr-2 h-4 w-4" />
                      PDF ({publication.pages} str.)
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {publication.abstract}
                  </CardDescription>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Link
                      href={`/istrazivanja/publikacije/${publication.id}`}
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      Pročitajte više →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center gap-2">
            <Button variant="outline" size="sm" disabled>
              Prethodna
            </Button>
            <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              Sljedeća
            </Button>
          </div>
        </div>
      </section>

      {/* Archive Info */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold">Arhiva publikacija</h2>
            <p className="mb-6 text-muted-foreground">
              Za pristup starijim publikacijama (prije 2022. godine) ili za posebne
              zahtjeve, molimo vas da nas kontaktirate direktno.
            </p>
            <Button asChild>
              <Link href="/kontakt">Kontaktirajte nas</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}