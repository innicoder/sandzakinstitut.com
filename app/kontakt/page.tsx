"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual form submission to backend
    alert("Hvala vam! Vaša poruka je uspješno poslana. Odgovorićemo vam u najkraćem mogućem roku.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Kontaktirajte nas
            </h1>
            <p className="text-lg text-muted-foreground">
              Rado ćemo odgovoriti na vaša pitanja i saslušati vaše prijedloge
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="mb-8">
                <h2 className="mb-4 text-2xl font-bold">Kontakt informacije</h2>
                <p className="text-muted-foreground">
                  Dostupni smo radnim danima kako bismo vam pružili sve potrebne
                  informacije.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Adresa</p>
                    <p className="text-sm text-muted-foreground">
                      Ul. Sandžačka 123<br />
                      36300 Novi Pazar<br />
                      Srbija
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Telefon</p>
                    <p className="text-sm text-muted-foreground">+381 20 123 456</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">info@institutsandzak.org</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Radno vrijeme</p>
                    <p className="text-sm text-muted-foreground">
                      Ponedjeljak - Petak: 9:00 - 17:00<br />
                      Subota - Nedjelja: Zatvoreno
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Brze veze</CardTitle>
                  <CardDescription>
                    Možda ćete pronaći odgovor ovdje
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="/pitanja" className="text-primary hover:underline">
                        Često postavljana pitanja
                      </a>
                    </li>
                    <li>
                      <a href="/mediji" className="text-primary hover:underline">
                        Za medije
                      </a>
                    </li>
                    <li>
                      <a href="/partneri" className="text-primary hover:underline">
                        Za partnere
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Pošaljite nam poruku</CardTitle>
                  <CardDescription>
                    Ispunite formu ispod i odgovorićemo vam u najkraćem mogućem roku
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium">
                          Ime i prezime *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium">
                          Email adresa *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                        Predmet *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Izaberite temu</option>
                        <option value="general">Opšta pitanja</option>
                        <option value="research">Istraživanja</option>
                        <option value="education">Edukacija</option>
                        <option value="partnership">Partnerstvo</option>
                        <option value="media">Mediji</option>
                        <option value="other">Ostalo</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-medium">
                        Vaša poruka *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Unesite vašu poruku..."
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="privacy"
                        required
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor="privacy" className="text-sm text-muted-foreground">
                        Slažem se sa{" "}
                        <a href="/privatnost" className="text-primary hover:underline">
                          politikom privatnosti
                        </a>
                      </label>
                    </div>

                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                      Pošaljite poruku
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-2xl font-bold">Pronađite nas</h2>
          </div>
          <div className="overflow-hidden rounded-lg border bg-card">
            <div className="aspect-[16/9] bg-muted">
              {/* Placeholder for map */}
              <div className="flex h-full items-center justify-center text-muted-foreground">
                <MapPin className="mr-2 h-6 w-6" />
                <span>Mapa lokacije</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}