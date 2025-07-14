"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

// Importar ParallaxBackground dinámicamente sin SSR
const ParallaxBackground = dynamic(() => import("../background/ParallaxBackground"), {
  ssr: false,
})

interface HeroSectionProps {
  language: string
}

export const HeroSection = ({ language }: HeroSectionProps) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  const fullText = language === "en" ? "> Welcome to my portfolio" : "> Bienvenido a mi portfolio"

  // Efecto de typing
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  useEffect(() => {
    setDisplayText("")
    setCurrentIndex(0)
  },[language])

  // Cursor parpadeante
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo parallax */}
      <ParallaxBackground />

      {/* Overlay para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Contenido principal */}
      <div className="relative z-20 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-green-400 font-mono mb-6">
            {displayText}
            <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}>|</span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 font-mono"
          >
            $ whoami
          </motion.div>
        </motion.div>

        {/* Información adicional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3 }}
          className="space-y-4"
        >
          <div className="text-green-300 font-mono text-sm sm:text-base">
            {language === "en"
              ? "Full Stack Developer | Backend Specialist"
              : "Desarrollador Full Stack | Especialista Backend"}
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-20 text-xs sm:text-sm font-mono text-gray-400">
            <span className="border border-green-400/30 px-3 py-1 bg-black/30">Node.js</span>
            <span className="border border-green-400/30 px-3 py-1 bg-black/30">React</span>
            <span className="border border-green-400/30 px-3 py-1 bg-black/30">TypeScript</span>
            <span className="border border-green-400/30 px-3 py-1 bg-black/30">Next.js</span>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
          className="absolute bottom-10 sm:block hidden left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="text-green-400 text-2xl"
          >
            ↓
          </motion.div>
          <div className="text-green-400 font-mono text-xs mt-2">
            {language === "en" ? "scroll down" : "desplázate"}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
