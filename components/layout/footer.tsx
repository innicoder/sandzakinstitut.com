import Link from "next/link";
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-muted/40 border-t-2 border-border/40">
      <div className="container py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* About Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-[0.15em]">INSTITUT</span>
              <h3 className="text-2xl font-bold text-primary mt-1">SANDŽAK</h3>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground mb-6">
              Nezavisna istraživačka i obrazovna institucija posvećena proučavanju
              i razvoju regije Sandžak kroz naučni pristup i edukativne programe.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-sm bg-primary/5 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-sm bg-primary/5 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-sm bg-primary/5 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-sm bg-primary/5 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">Brzi linkovi</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/o-nama" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                  O nama
                </Link>
              </li>
              <li>
                <Link href="/istrazivanja" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                  Istraživanja
                </Link>
              </li>
              <li>
                <Link href="/vijesti" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                  Vijesti
                </Link>
              </li>
              <li>
                <Link href="/dogadjaji" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                  Događaji
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-6 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">Resursi</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/publikacije" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                  Publikacije
                </Link>
              </li>
              <li>
                <Link href="/baza-podataka" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                  Baza podataka
                </Link>
              </li>
              <li>
                <Link href="/mediji" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                  Za medije
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="/privatnost" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                  Politika privatnosti
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">Kontakt informacije</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <div className="p-2 rounded-sm bg-primary/5 flex-shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground mb-0.5">Adresa</p>
                  <span className="text-muted-foreground leading-relaxed block">
                    Ul. Sandžačka 123<br />
                    36300 Novi Pazar<br />
                    Srbija
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-2 rounded-sm bg-primary/5 flex-shrink-0 mt-0.5">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground mb-0.5">Telefon</p>
                  <a href="tel:+38120123456" className="text-muted-foreground hover:text-primary transition-colors block">
                    +381 20 123 456
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-2 rounded-sm bg-primary/5 flex-shrink-0 mt-0.5">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground mb-0.5">Email</p>
                  <a href="mailto:info@institutsandzak.org" className="text-muted-foreground hover:text-primary transition-colors block">
                    info@institutsandzak.org
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Institut Sandžak. Sva prava zadržana.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/uslovi-koriscenja" className="text-muted-foreground hover:text-primary transition-colors">
                Uslovi korišćenja
              </Link>
              <Link href="/privatnost" className="text-muted-foreground hover:text-primary transition-colors">
                Politika privatnosti
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}