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
    <header className="sticky top-0 z-50 w-full border-b-2 border-border/40 bg-background/98 backdrop-blur-sm shadow-sm">
      <div className="container">
        {/* Top bar for extra formality */}
        <div className="hidden md:block border-b border-border/20 py-2">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-4">
              <span>Nezavisna istraživačka institucija</span>
              <span className="text-border">|</span>
              <span>Osnovana 2020. godine</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:+38120123456" className="hover:text-primary transition-colors">+381 20 123 456</a>
              <span className="text-border">|</span>
              <a href="mailto:info@institutsandzak.org" className="hover:text-primary transition-colors">info@institutsandzak.org</a>
            </div>
          </div>
        </div>
        
        {/* Main navigation */}
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="flex flex-col">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-[0.15em] mb-1">INSTITUT</span>
              <span className="text-2xl font-bold tracking-tight text-primary">SANDŽAK</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    href="/" 
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-base font-medium px-6 py-3 hover:bg-primary/5"
                    )}
                  >
                    Početna
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base font-medium px-6 py-3 hover:bg-primary/5">
                  O nama
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-8 md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-sm bg-gradient-to-b from-primary/10 to-primary/5 p-8 no-underline outline-none focus:shadow-md transition-all hover:from-primary/15 hover:to-primary/10"
                          href="/o-nama"
                        >
                          <div className="mb-3 text-lg font-semibold text-primary">
                            Institut Sandžak
                          </div>
                          <p className="text-sm leading-relaxed text-muted-foreground">
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
                <NavigationMenuTrigger className="text-base font-medium px-6 py-3 hover:bg-primary/5">
                  Istraživanja
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[500px] gap-3 p-6 md:w-[600px] md:grid-cols-2 lg:w-[700px]">
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
                  <Link 
                    href="/vijesti" 
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-base font-medium px-6 py-3 hover:bg-primary/5"
                    )}
                  >
                    Vijesti
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    href="/dogadjaji" 
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-base font-medium px-6 py-3 hover:bg-primary/5"
                    )}
                  >
                    Događaji
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    href="/kontakt" 
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-base font-medium px-6 py-3 hover:bg-primary/5"
                    )}
                  >
                    Kontakt
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Zatvori meni" : "Otvori meni"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav id="mobile-menu" className="md:hidden border-t-2 border-border/40 bg-background/98 shadow-lg">
          <div className="container py-6 space-y-2">
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
            
            {/* Contact info in mobile */}
            <div className="pt-4 mt-4 border-t border-border/20">
              <p className="text-sm text-muted-foreground px-4">
                <a href="tel:+38120123456" className="hover:text-primary transition-colors">+381 20 123 456</a>
                <br />
                <a href="mailto:info@institutsandzak.org" className="hover:text-primary transition-colors">info@institutsandzak.org</a>
              </p>
            </div>
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
            "block select-none space-y-2 rounded-sm p-4 leading-none no-underline outline-none transition-all hover:bg-primary/5 hover:translate-x-1 focus:bg-primary/5",
            className
          )}
          {...props}
        >
          <div className="text-sm font-semibold leading-none text-foreground">{title}</div>
          <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
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
      className="block rounded-sm px-4 py-3 text-base font-medium text-foreground hover:bg-primary/5 hover:text-primary transition-all"
    >
      {children}
    </Link>
  );
};