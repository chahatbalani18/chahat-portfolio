// app/layout.tsx
// ── CHANGES FROM YOUR ORIGINAL ──────────────────────────────────────────────
// 1. Added `icons` field to metadata → makes favicon.ico show in browser tab
// 2. Swapped "CB." text in navbar for your actual logo image (logo.png)
//    → place your logo PNG at:  public/logo.png
//    → if you want to keep "CB." text instead, see the commented line below
// 3. Added `import Image from "next/image"` (needed for the logo swap)
// Everything else is identical to your original file.
// ────────────────────────────────────────────────────────────────────────────
 
import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";                    // ← CHANGE 3: new import
import RevealOnScroll from "./components/RevealOnScroll";
 
// ── CHANGE 1: added icons so CB logo shows in the browser/Google tab ──
export const metadata: Metadata = {
  title: "Chahat Balani | Business Analyst & Applied AI Builder",
  description:
    "Portfolio of Chahat Balani — Business Analyst & Applied AI builder focused on analytics, dashboards, and automation.",
  icons: {
    icon: "/favicon.ico",
    apple: "/icon.png",
  },
};
 
interface RootLayoutProps {
  children: ReactNode;
}
 
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <RevealOnScroll>
          <div className="bg-layer" />
          <div className="page-shell">
            <header className="navbar">
              <div className="navbar-inner">
 
                {/* ── CHANGE 2: logo image instead of "CB." text ──
                    Delete these 8 lines and uncomment the line below
                    if you want to keep the original text logo instead. */}
                <a
                  href="/"
                  className="logo"
                  style={{ display: "flex", alignItems: "center", lineHeight: 0 }}
                >
                  <Image
                    src="/logo.png"
                    alt="Chahat Balani"
                    width={38}
                    height={38}
                    style={{ objectFit: "contain" }}
                    priority
                  />
                </a>
                {/* <a href="/" className="logo">CB.</a> */}
 
                <nav className="nav-links">
                  <a href="/">Home</a>
                  <a href="/projects">Projects</a>
                  <a href="/experience">Experience</a>
                  <a href="/about">About</a>
                  <a href="/contact">Contact</a>
                </nav>
              </div>
            </header>
            <main>{children}</main>
            <footer className="footer">
              © {new Date().getFullYear()} Chahat Balani — built with data &amp; coffee.
            </footer>
          </div>
        </RevealOnScroll>
      </body>
    </html>
  );
}
 
