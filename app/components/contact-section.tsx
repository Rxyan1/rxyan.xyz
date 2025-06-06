"use client"

import { useLanguage } from "./language-provider"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Camera,
  ShoppingBasketIcon as Basketball,
  Book,
  Wind,
  Compass,
  History,
} from "lucide-react"

export function ContactSection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const hobbies = [
    { name: t("hobbies.videoEditing"), icon: <Camera className="w-4 h-4" /> },
    { name: t("hobbies.basketball"), icon: <Basketball className="w-4 h-4" /> },
    { name: t("hobbies.reading"), icon: <Book className="w-4 h-4" /> },
    { name: t("hobbies.kiteSurfing"), icon: <Wind className="w-4 h-4" /> },
    { name: t("hobbies.urbex"), icon: <Compass className="w-4 h-4" /> },
    { name: t("hobbies.history"), icon: <History className="w-4 h-4" /> },
  ]

  return (
    <section id="contact" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sky-400">{t("contact.title")}</h2>
          <div className="h-1 w-20 bg-sky-400 mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex justify-center"
        >
          {/* Contact Info uniquement */}
          <motion.div variants={itemVariants} className="bg-gray-900 rounded-xl p-8 border border-gray-800 shadow-lg max-w-lg w-full">
            <h3 className="text-xl font-semibold text-white mb-6">{t("contact.infoTitle")}</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="p-2 rounded-lg bg-gray-800 mr-4">
                  <Mail className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <h4 className="text-gray-300 font-medium">{t("contact.email")}</h4>
                  <a
                    href="mailto:rayane.zangui@efrei.net"
                    className="text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    rayane.zangui@efrei.net
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-2 rounded-lg bg-gray-800 mr-4">
                  <Phone className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <h4 className="text-gray-300 font-medium">{t("contact.phone")}</h4>
                  <a href="tel:+33612345678" className="text-sky-400 hover:text-sky-300 transition-colors">
                    +33 7 87 79 00 46
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-2 rounded-lg bg-gray-800 mr-4">
                  <MapPin className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <h4 className="text-gray-300 font-medium">{t("contact.location")}</h4>
                  <p className="text-white">Bordeaux Métropole, France</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-2 rounded-lg bg-gray-800 mr-4">
                  <Linkedin className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <h4 className="text-gray-300 font-medium">{t("contact.linkedin")}</h4>
                  <a
                    href="https://linkedin.com/in/rayane-zangui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    linkedin.com/in/rayane-zangui
                  </a>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-white mb-4">{t("contact.hobbiesTitle")}</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {hobbies.map((hobby, index) => (
                <div
                  key={index}
                  className="flex items-center px-3 py-2 rounded-full bg-gray-800 text-sky-300 border border-gray-700"
                >
                  <span className="mr-2">{hobby.icon}</span>
                  {hobby.name}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
