"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
      <h2 className="mb-4 text-2xl font-semibold">Stranica nije pronađena</h2>
      <p className="mb-8 max-w-md text-muted-foreground">
        Izvinjavamo se, stranica koju tražite ne postoji ili je premještena.
        Molimo vas da provjerite URL ili se vratite na početnu stranicu.
      </p>
      
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Početna stranica
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/istrazivanja">
            <Search className="mr-2 h-4 w-4" />
            Pretraži istraživanja
          </Link>
        </Button>
        <Button variant="ghost" onClick={() => window.history.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Nazad
        </Button>
      </div>

      <div className="mt-12">
        <p className="text-sm text-muted-foreground">
          Potrebna vam je pomoć? {" "}
          <Link href="/kontakt" className="text-primary hover:underline">
            Kontaktirajte nas
          </Link>
        </p>
      </div>
    </div>
  );
}