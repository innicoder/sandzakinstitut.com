"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

const pathNameMap: { [key: string]: string } = {
  "o-nama": "O nama",
  "tim": "Naš tim",
  "istrazivanja": "Istraživanja",
  "publikacije": "Publikacije",
  "projekti": "Projekti",
  "podaci": "Baza podataka",
  "saradnja": "Saradnja",
  "vijesti": "Vijesti",
  "dogadjaji": "Događaji",
  "kontakt": "Kontakt",
  "mediji": "Za medije",
  "privatnost": "Politika privatnosti",
  "pitanja": "Često postavljana pitanja",
  "newsletter": "Newsletter"
};

export function Breadcrumb() {
  const pathname = usePathname();
  
  // Don't show breadcrumb on homepage
  if (pathname === "/") return null;
  
  const pathSegments = pathname.split("/").filter(segment => segment);
  
  return (
    <nav aria-label="Breadcrumb" className="container py-4">
      <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
        <li>
          <Link href="/" className="hover:text-primary">
            <Home className="h-4 w-4" />
            <span className="sr-only">Početna</span>
          </Link>
        </li>
        
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;
          const label = pathNameMap[segment] || segment;
          
          return (
            <li key={href} className="flex items-center">
              <ChevronRight className="mx-2 h-3 w-3" />
              {isLast ? (
                <span className="font-medium text-foreground">{label}</span>
              ) : (
                <Link href={href} className="hover:text-primary">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}