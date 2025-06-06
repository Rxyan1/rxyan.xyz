"use client";
import dynamic from "next/dynamic";
import { Navbar } from "./navbar";
import { LanguageProvider } from "./language-provider"; // Importer le LanguageProvider
import { ThemeProvider } from "@/components/theme-provider";

const Portfolio = dynamic(() => import("./portfolio"), { ssr: false });

export default function PortfolioClient(props: any) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <LanguageProvider>
        <Navbar /> {/* Utiliser le composant Navbar qui a déjà la logique de défilement */}
        <Portfolio {...props} />
      </LanguageProvider>
    </ThemeProvider>
  );
}
