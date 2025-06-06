"use client"

import { useLanguage } from "./language-provider"
import { motion } from "framer-motion"
import { Download } from "lucide-react"

export function Navbar() {
  const { t, language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr")
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 py-3 bg-black shadow-md"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/images/logo.png" 
              alt="Logo" 
              className="w-10 h-auto mr-3" 
            />
            <a href="#" className="text-xl font-bold text-white">
              Rayane <span className="text-sky-400">Zangui</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-300 hover:text-sky-400 transition-colors"
            >
              {t("nav.skills")}
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-300 hover:text-sky-400 transition-colors"
            >
              {t("nav.projects")}
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-gray-300 hover:text-sky-400 transition-colors"
            >
              {t("nav.experience")}
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="text-gray-300 hover:text-sky-400 transition-colors"
            >
              {t("nav.education")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-sky-400 transition-colors"
            >
              {t("nav.contact")}
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-md bg-gray-800 text-gray-300 hover:text-sky-400 transition-colors font-medium"
              aria-label="Toggle language"
            >
              {language === "fr" ? "EN" : "FR"}
            </button>

            <a
              href="/cv/Rayane Zangui CV.pdf"
              download
              className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>{t("nav.downloadCV")}</span>
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
