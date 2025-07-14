"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import img from "../../../public/img/temporal-img.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";


// Importar ParallaxBackground dinámicamente sin SSR
const ParallaxBackground = dynamic(
  () => import("../background/ParallaxBackground"),
  {
    ssr: false,
  }
);

interface HeroSectionProps {
  language: string;
}

export const HeroSection = ({ language }: HeroSectionProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [displayName, setDisplayName] = useState("");
  const [nameIndex, setNameIndex] = useState(0);
  const [showNameCursor, setShowNameCursor] = useState(true) // Cursor para el nombre

  const fullText =
    language === "en"
      ? "> Welcome to my portfolio"
      : "> Bienvenido a mi portfolio";

  const nameText =
    language === "en" ? " > I am Martín Tavella" : " > Yo soy Martín Tavella";

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/martin-tavella",
      icon: <FontAwesomeIcon icon={faGithub} />, // Using text icon for consistency with terminal theme
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/martintavella/",
      icon:  <FontAwesomeIcon icon={faLinkedin} />,
    },
    {
      name: "Email",
      url: "mailto:martutavella@gmail.com",
      icon:  <FontAwesomeIcon icon={faMailBulk} />,
    },
  ]


  // Efecto de typing para el mensaje de bienvenida
   useEffect(() => {
    let welcomeTypingTimeout: NodeJS.Timeout
    if (currentIndex < fullText.length) {
      welcomeTypingTimeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100)
    }
    return () => clearTimeout(welcomeTypingTimeout)
  }, [currentIndex, fullText])

  // Efecto de typing para el nombre (con delay inicial)
  useEffect(() => {
    let nameTypingTimeout: NodeJS.Timeout
    let waitingTimeout: NodeJS.Timeout

    if (nameIndex === 0) {
      // Solo iniciar el temporizador de espera si nameIndex es 0 (primera vez)
      waitingTimeout = setTimeout(() => {
        setNameIndex(1) // Iniciar el tipado del nombre
      }, 3000) // Espera 3 segundos antes de empezar a escribir el nombre
    } else if (nameIndex < nameText.length) {
      nameTypingTimeout = setTimeout(() => {
        setDisplayName((prev) => prev + nameText[nameIndex])
        setNameIndex((prev) => prev + 1)
      }, 100) // Velocidad de tipado para el nombre
    } else {
      setShowNameCursor(false) // Ocultar cursor del nombre cuando termina de escribir
    }

    return () => {
      clearTimeout(waitingTimeout)
      clearTimeout(nameTypingTimeout)
    }
  }, [nameIndex, nameText])

  // Resetear el efecto de typing cuando cambia el idioma
  useEffect(() => {
    setDisplayText("")
    setCurrentIndex(0)
    setDisplayName("")
    setNameIndex(0)
    setShowNameCursor(true) // Mostrar cursor del nombre al resetear
  }, [language])

  // Cursor parpadeante para el mensaje de bienvenida y el nombre
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
      setShowNameCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  // Calcular el delay total para los elementos que aparecen después de los textos tipados
  const totalTypingDelay = Math.max(
    fullText.length * 0.1, // Tiempo para el mensaje de bienvenida
    3 + nameText.length * 0.1, // Tiempo para el nombre (incluyendo el delay inicial)
  )

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-40"
    >
      <ParallaxBackground />

      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="relative z-20 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-green-400 font-mono mb-6">
            {displayText}
            <span
              className={`${
                showCursor ? "opacity-100" : "opacity-0"
              } transition-opacity`}
            >
              |
            </span>
          </h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 font-mono"
          >
            $ whoami
          </motion.div>
        </motion.div>
      

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

            <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
          className="flex flex-col justify-center"
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

          <div className="flex flex-wrap justify-center gap-4 mt-10 text-xs sm:text-sm font-mono text-gray-400">
            <span className="border border-green-400/30 px-3 py-1 bg-black/30">
              Node.js
            </span>
            <span className="border border-green-400/30 px-3 py-1 bg-black/30">
              React
            </span>
            <span className="border border-green-400/30 px-3 py-1 bg-black/30">
              TypeScript
            </span>
            <span className="border border-green-400/30 px-3 py-1 bg-black/30">
              Next.js
            </span>
          </div>
        </motion.div>

        {/* Contenedor para la imagen y el nombre tipado */}
        <div
          className="flex flex-col-reverse gap-10 items-center justify-center mt-20" // Ajusta el margen superior
        >
          {/* Placeholder de imagen */}
          <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5, delay: totalTypingDelay + 1 }}
          >
            <div className="flex flex-wrap justify-center gap-4 mt-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border-2 border-green-400/30 text-green-400 hover:bg-green-400/10 hover:text-green-300 transition-all duration-200 font-mono text-sm sm:text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: totalTypingDelay + 1.5 + index * 0.1 }} // Staggered appearance
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">{link.icon}</span>
                {link.name}
              </motion.a>
            ))}
          </div>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: totalTypingDelay + 1 }}
            src={img.src}
            alt="provisional-pic"
            className="rounded-full w-70 h-70 sm:w-100 sm:h-100 object-cover mx-auto mb-4 mask-radial-at-center mask-radial-from-45% mask-radial-to-80%" 
          />

          {/* Nombre tipado */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-green-400 font-mono">
            {displayName}
            <span
              className={`${showNameCursor && nameIndex < nameText.length ? "opacity-100" : "opacity-0"} transition-opacity`}
            >
              |
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};
