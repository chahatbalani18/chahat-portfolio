import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import RevealOnScroll from "./components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Chahat Balani | Business Analyst & Applied AI Builder",
  description:
    "Portfolio of Chahat Balani — Business Analyst & Applied AI builder focused on analytics, dashboards, and automation.",
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
                <a href="/" className="logo">CB.</a>

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
              © {new Date().getFullYear()} Chahat Balani — built with data & coffee.
            </footer>
          </div>
        </RevealOnScroll>
      </body>
    </html>
  );
}
