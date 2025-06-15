"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">Institut Sandžak</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/" className={navigationMenuTriggerStyle()}>
                  Početna
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>O nama</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/o-nama"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Institut Sandžak
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Centar za istraživanje i edukaciju regije Sandžak
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/o-nama/misija" title="Misija i vizija">
                    Naši ciljevi i aspiracije za budućnost
                  </ListItem>
                  <ListItem href="/o-nama/tim" title="Naš tim">
                    Upoznajte naše stručnjake i istraživače
                  </ListItem>
                  <ListItem href="/o-nama/historija" title="Historija">
                    Naša priča i razvoj kroz godine
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Istraživanja</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem href="/istrazivanja/publikacije" title="Publikacije">
                    Naučni radovi i studije
                  </ListItem>
                  <ListItem href="/istrazivanja/projekti" title="Projekti">
                    Trenutni i završeni projekti
                  </ListItem>
                  <ListItem href="/istrazivanja/podaci" title="Baza podataka">
                    Statistički podaci o regionu
                  </ListItem>
                  <ListItem href="/istrazivanja/saradnja" title="Saradnja">
                    Partnerstva i kolaboracije
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/vijesti" className={navigationMenuTriggerStyle()}>
                  Vijesti
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/dogadjaji" className={navigationMenuTriggerStyle()}>
                  Događaji
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/kontakt" className={navigationMenuTriggerStyle()}>
                  Kontakt
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Zatvori meni" : "Otvori meni"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav id="mobile-menu" className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <MobileNavLink href="/" onClick={() => setMobileMenuOpen(false)}>
              Početna
            </MobileNavLink>
            <MobileNavLink href="/o-nama" onClick={() => setMobileMenuOpen(false)}>
              O nama
            </MobileNavLink>
            <MobileNavLink href="/istrazivanja" onClick={() => setMobileMenuOpen(false)}>
              Istraživanja
            </MobileNavLink>
            <MobileNavLink href="/vijesti" onClick={() => setMobileMenuOpen(false)}>
              Vijesti
            </MobileNavLink>
            <MobileNavLink href="/dogadjaji" onClick={() => setMobileMenuOpen(false)}>
              Događaji
            </MobileNavLink>
            <MobileNavLink href="/kontakt" onClick={() => setMobileMenuOpen(false)}>
              Kontakt
            </MobileNavLink>
          </div>
        </nav>
      )}
    </header>
  );
}

const ListItem = ({
  className,
  title,
  children,
  href,
  ...props
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

const MobileNavLink = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block rounded-md px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground"
    >
      {children}
    </Link>
  );
};