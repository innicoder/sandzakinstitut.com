"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronDown, ChevronUp, HelpCircle, Mail, Phone } from "lucide-react";

// FAQ categories and questions
const faqCategories = [
  {
    id: 1,
    name: "O Institutu",
    questions: [
      {
        id: 1,
        question: "Šta je Institut Sandžak?",
        answer: "Institut Sandžak je nezavisna istraživačka i obrazovna institucija posvećena proučavanju kulturnog, istorijskog i socio-ekonomskog razvoja regije Sandžak. Osnovan je sa ciljem da kroz naučna istraživanja, edukaciju i kulturu doprinese razvoju regije."
      },
      {
        id: 2,
        question: "Ko može sarađivati sa Institutom?",
        answer: "Otvoreni smo za saradnju sa svim institucijama, organizacijama i pojedincima koji dijele našu viziju razvoja regije. To uključuje univerzitete, nevladine organizacije, lokalne samouprave, međunarodne organizacije i privatni sektor."
      },
      {
        id: 3,
        question: "Kako se Institut finansira?",
        answer: "Institut se finansira kroz kombinaciju grantova, donacija, projektnog finansiranja i usluga konsaltinga. Transparentnost u finansiranju je jedan od naših osnovnih principa."
      },
    ]
  },
  {
    id: 2,
    name: "Istraživanja",
    questions: [
      {
        id: 4,
        question: "Kako mogu pristupiti publikacijama Instituta?",
        answer: "Većina naših publikacija je dostupna besplatno na našoj web stranici u sekciji Publikacije. Za starije publikacije ili posebne zahtjeve, molimo vas da nas kontaktirate direktno."
      },
      {
        id: 5,
        question: "Mogu li predložiti temu za istraživanje?",
        answer: "Da, pozdravljamo prijedloge za istraživačke teme. Molimo vas da nam pošaljete detaljan opis prijedloga putem kontakt forme ili emaila sa obrazloženjem značaja teme za region."
      },
      {
        id: 6,
        question: "Kako mogu učestvovati u istraživanjima?",
        answer: "Postoji nekoliko načina: možete se prijaviti za poziciju istraživača, predložiti zajedničke projekte, ili učestvovati kao ispitanik u našim studijama. Pratite našu stranicu za aktuelne pozive."
      },
    ]
  },
  {
    id: 3,
    name: "Edukacija i događaji",
    questions: [
      {
        id: 7,
        question: "Kako se mogu prijaviti za radionice i obuke?",
        answer: "Sve naše radionice i obuke objavljujemo u sekciji Događaji. Klikom na željeni događaj možete vidjeti detalje i popuniti prijavnu formu. Prijave se obično zatvaraju 7 dana prije događaja."
      },
      {
        id: 8,
        question: "Da li su vaši programi besplatni?",
        answer: "Većina naših edukacionih programa je besplatna za učesnike zahvaljujući podršci donatora. Za neke specijalizovane programe može biti potrebna simbolična kotizacija."
      },
      {
        id: 9,
        question: "Mogu li organizovati događaj u saradnji sa Institutom?",
        answer: "Svakako! Radujemo se partnerstvima u organizaciji događaja koji doprinose našoj misiji. Kontaktirajte nas sa vašim prijedlogom i razmotrićemo mogućnosti saradnje."
      },
    ]
  },
  {
    id: 4,
    name: "Praktične informacije",
    questions: [
      {
        id: 10,
        question: "Gdje se nalazi Institut?",
        answer: "Naša kancelarija se nalazi na adresi: Ul. Sandžačka 123, 36300 Novi Pazar, Srbija. Radno vrijeme je od ponedeljka do petka, 9:00-17:00."
      },
      {
        id: 11,
        question: "Kako mogu postati volonter?",
        answer: "Volonteri su dobrodošli! Pošaljite nam vašu biografiju i motivaciono pismo na volonteri@institutsandzak.org sa naznakom oblasti u kojoj biste željeli da pomognete."
      },
      {
        id: 12,
        question: "Da li Institut izdaje stipendije?",
        answer: "Periodično raspisujemo konkurse za stipendije za master i doktorske studije. Pratite našu stranicu i newsletter za pravovremene informacije o konkursima."
      },
    ]
  },
];

export default function FAQPage() {
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const toggleQuestion = (questionId: number) => {
    setOpenQuestions(prev =>
      prev.includes(questionId)
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    );
  };

  const filteredCategories = selectedCategory
    ? faqCategories.filter(cat => cat.id === selectedCategory)
    : faqCategories;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Često postavljana pitanja
            </h1>
            <p className="text-lg text-muted-foreground">
              Pronađite odgovore na najčešća pitanja o našem radu,
              programima i mogućnostima saradnje
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b pb-8 pt-6">
        <div className="container">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
            >
              Sve kategorije
            </Button>
            {faqCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            {filteredCategories.map((category) => (
              <div key={category.id} className="mb-12">
                <h2 className="mb-6 text-2xl font-bold">{category.name}</h2>
                <div className="space-y-4">
                  {category.questions.map((faq) => (
                    <Card key={faq.id} className="overflow-hidden">
                      <CardHeader
                        className="cursor-pointer"
                        onClick={() => toggleQuestion(faq.id)}
                      >
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg font-medium pr-4">
                            {faq.question}
                          </CardTitle>
                          {openQuestions.includes(faq.id) ? (
                            <ChevronUp className="h-5 w-5 shrink-0 text-muted-foreground" />
                          ) : (
                            <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground" />
                          )}
                        </div>
                      </CardHeader>
                      {openQuestions.includes(faq.id) && (
                        <CardContent className="pt-0">
                          <p className="text-muted-foreground">{faq.answer}</p>
                        </CardContent>
                      )}
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <Card className="mx-auto max-w-2xl">
            <CardHeader className="text-center">
              <HelpCircle className="mx-auto mb-4 h-12 w-12 text-primary" />
              <CardTitle className="text-2xl">Niste pronašli odgovor?</CardTitle>
              <CardDescription>
                Naš tim je tu da vam pomogne sa svim dodatnim pitanjima
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardContent className="p-6">
                    <Mail className="mb-3 h-6 w-6 text-primary" />
                    <h3 className="mb-2 font-semibold">Pošaljite email</h3>
                    <p className="mb-3 text-sm text-muted-foreground">
                      Odgovaramo u roku od 24-48 sati
                    </p>
                    <a
                      href="mailto:info@institutsandzak.org"
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      info@institutsandzak.org
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Phone className="mb-3 h-6 w-6 text-primary" />
                    <h3 className="mb-2 font-semibold">Pozovite nas</h3>
                    <p className="mb-3 text-sm text-muted-foreground">
                      Radnim danima 9:00-17:00
                    </p>
                    <a
                      href="tel:+38120123456"
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      +381 20 123 456
                    </a>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 text-center">
                <Button asChild>
                  <Link href="/kontakt">
                    Idite na kontakt stranicu
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}