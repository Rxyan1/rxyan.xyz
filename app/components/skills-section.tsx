"use client"

import { useLanguage } from "./language-provider"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Database, Globe, Server, Lightbulb } from "lucide-react"

export function SkillsSection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  // Listes des skills (noms uniquement)
  const frontendSkills = [
    "HTML/CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
  ]

  const backendSkills = [
    "Node.js",
    "Express",
    "Python",
    "PHP",
    "Java",
  ]

  const databaseSkills = [
    "MySQL",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
  ]

  const otherSkills = [
    "Git",
    "Docker",
    "RESTful API",
    "GraphQL",
    "Agile/Scrum",
  ]

  const languageSkills = [
    t("skills.french"),
    t("skills.english"),
    t("skills.arabic"),
  ]

  const softSkills = [
    t("skills.curious"),
    t("skills.creative"),
    t("skills.versatile"),
    t("nav.adaptabilite"),
    t("nav.ecouteActive"),
    t("nav.autonomie"),
  ]

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

  // Utilitaire pour afficher les skills sous forme de box améliorée
  const renderSkillBoxes = (skills: string[]) => (
    <div className="flex flex-wrap gap-3 mt-2 justify-center">
      {skills.map((skill, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 + idx * 0.07 }}
          className="px-4 py-1 rounded-2xl bg-white/10 backdrop-blur-md text-sky-200 border border-sky-400/30 text-sm font-semibold shadow-lg transition-all duration-200 cursor-default"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  )

  return (
    <section id="skills" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sky-400">{t("skills.title")}</h2>
          <div className="h-1 w-20 bg-sky-400 mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto justify-items-center"
        >
          {/* Frontend Skills */}
          <motion.div variants={itemVariants} className="bg-gray-900 rounded-xl p-6 border border-gray-800 flex flex-col items-center">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg bg-gray-800 mr-4">
                <Code className="w-6 h-6 text-sky-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">{t("skills.frontend")}</h3>
            </div>
            <div className="w-full">
              <hr className="border-t border-gray-700 mb-4" />
            </div>
            {renderSkillBoxes(frontendSkills)}
          </motion.div>

          {/* Backend Skills */}
          <motion.div variants={itemVariants} className="bg-gray-900 rounded-xl p-6 border border-gray-800 flex flex-col items-center">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg bg-gray-800 mr-4">
                <Server className="w-6 h-6 text-sky-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">{t("skills.backend")}</h3>
            </div>
            <div className="w-full">
              <hr className="border-t border-gray-700 mb-4" />
            </div>
            {renderSkillBoxes(backendSkills)}
          </motion.div>

          {/* Database Skills */}
          <motion.div variants={itemVariants} className="bg-gray-900 rounded-xl p-6 border border-gray-800 flex flex-col items-center">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg bg-gray-800 mr-4">
                <Database className="w-6 h-6 text-sky-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">{t("skills.database")}</h3>
            </div>
            <div className="w-full">
              <hr className="border-t border-gray-700 mb-4" />
            </div>
            {renderSkillBoxes(databaseSkills)}
          </motion.div>

          {/* Other Skills */}
          <motion.div variants={itemVariants} className="bg-gray-900 rounded-xl p-6 border border-gray-800 flex flex-col items-center">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg bg-gray-800 mr-4">
                <Server className="w-6 h-6 text-sky-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">{t("skills.other")}</h3>
            </div>
            <div className="w-full">
              <hr className="border-t border-gray-700 mb-4" />
            </div>
            {renderSkillBoxes(otherSkills)}
          </motion.div>

          {/* Languages */}
          <motion.div variants={itemVariants} className="bg-gray-900 rounded-xl p-6 border border-gray-800 flex flex-col items-center">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg bg-gray-800 mr-4">
                <Globe className="w-6 h-6 text-sky-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">{t("skills.languages")}</h3>
            </div>
            <div className="w-full">
              <hr className="border-t border-gray-700 mb-4" />
            </div>
            {renderSkillBoxes(languageSkills)}
          </motion.div>

          {/* Soft Skills */}
          <motion.div variants={itemVariants} className="bg-gray-900 rounded-xl p-6 border border-gray-800 flex flex-col items-center">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg bg-gray-800 mr-4">
                <Lightbulb className="w-6 h-6 text-sky-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">{t("skills.soft")}</h3>
            </div>
            <div className="w-full">
              <hr className="border-t border-gray-700 mb-4" />
            </div>
            {renderSkillBoxes(softSkills)}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
