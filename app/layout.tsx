import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Institut Sandžak - Centar za istraživanje i edukaciju",
  description: "Institut Sandžak je nezavisna istraživačka i obrazovna institucija posvećena proučavanju kulturnog, istorijskog i socio-ekonomskog razvoja regije Sandžak.",
  keywords: "Sandžak, istraživanje, edukacija, kultura, historija, razvoj, Novi Pazar",
  authors: [{ name: "Institut Sandžak" }],
  openGraph: {
    title: "Institut Sandžak",
    description: "Centar za istraživanje i edukaciju regije Sandžak",
    url: "https://institutsandzak.org",
    siteName: "Institut Sandžak",
    locale: "bs_BA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bs">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md">
            Preskoči na glavni sadržaj
          </a>
          <Header />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
