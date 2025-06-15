import Link from "next/link";
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* About Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Institut Sandžak</h3>
            <p className="text-sm text-muted-foreground">
              Nezavisna istraživačka i obrazovna institucija posvećena proučavanju
              i razvoju regije Sandžak.
            </p>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Brzi linkovi</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/o-nama" className="text-muted-foreground hover:text-primary">
                  O nama
                </Link>
              </li>
              <li>
                <Link href="/istrazivanja" className="text-muted-foreground hover:text-primary">
                  Istraživanja
                </Link>
              </li>
              <li>
                <Link href="/vijesti" className="text-muted-foreground hover:text-primary">
                  Vijesti
                </Link>
              </li>
              <li>
                <Link href="/dogadjaji" className="text-muted-foreground hover:text-primary">
                  Događaji
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-muted-foreground hover:text-primary">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Resursi</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/publikacije" className="text-muted-foreground hover:text-primary">
                  Publikacije
                </Link>
              </li>
              <li>
                <Link href="/baza-podataka" className="text-muted-foreground hover:text-primary">
                  Baza podataka
                </Link>
              </li>
              <li>
                <Link href="/mediji" className="text-muted-foreground hover:text-primary">
                  Za medije
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="text-muted-foreground hover:text-primary">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="/privatnost" className="text-muted-foreground hover:text-primary">
                  Politika privatnosti
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  Ul. Sandžačka 123<br />
                  36300 Novi Pazar<br />
                  Srbija
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a href="tel:+38120123456" className="text-muted-foreground hover:text-primary">
                  +381 20 123 456
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href="mailto:info@institutsandzak.org" className="text-muted-foreground hover:text-primary">
                  info@institutsandzak.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Institut Sandžak. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
}