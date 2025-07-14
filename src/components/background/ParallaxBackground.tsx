"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface ParallaxElement {
  id: number
  x: number
  y: number
  char: string
  speed: number
  opacity: number
}

const ParallaxBackground = () => {
  const [elements, setElements] = useState<ParallaxElement[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)

  const terminalChars = [
    ">",
    "$",
    "#",
    "~",
    "|",
    "_",
    ".",
    ":",
    ";",
    "0",
    "1",
    "{",
    "}",
    "[",
    "]",
    "(",
    ")",
    "/",
    "\\",
    "-",
    "+",
    "*",
    "=",
    "^",
    "&",
    "cd",
    "ls",
    "pwd",
    "cat",
    "vim",
    "git",
    "npm",
    "node",
    "nest",
    "next",
    "dev",
    "src",
    "app",
  ]

  // Verificar si estamos en el cliente
  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const generateElements = () => {
      const newElements: ParallaxElement[] = []
      const width = typeof window !== "undefined" ? window.innerWidth : 1200
      const height = typeof window !== "undefined" ? window.innerHeight : 800

      for (let i = 0; i < 50; i++) {
        newElements.push({
          id: i,
          x: Math.random() * width,
          y: Math.random() * height,
          char: terminalChars[Math.floor(Math.random() * terminalChars.length)],
          speed: Math.random() * 0.5 + 0.1,
          opacity: Math.random() * 0.3 + 0.1,
        })
      }
      setElements(newElements)
    }

    generateElements()

    if (typeof window !== "undefined") {
      window.addEventListener("resize", generateElements)
      return () => window.removeEventListener("resize", generateElements)
    }
  }, [isClient])

  // Seguir el mouse
  useEffect(() => {
    if (!isClient || typeof window === "undefined") return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [isClient])

  // No renderizar nada hasta que estemos en el cliente
  if (!isClient) {
    return null
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      {/* Grid de fondo */}
      <div className="absolute inset-0 opacity-5 z-[-1]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(74, 222, 128, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(74, 222, 128, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          }}
        />
      </div>

      {/* Elementos flotantes */}
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute text-green-400 font-mono text-sm select-none z-[-1]"
          initial={{
            x: element.x,
            y: element.y,
            opacity: 0,
          }}
          animate={{
            x: element.x + mousePosition.x * element.speed,
            y: element.y + mousePosition.y * element.speed,
            opacity: element.opacity,
          }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
          }}
          style={{
            filter: `blur(${Math.random() * 1}px)`,
            zIndex: -1,
          }}
        >
          {element.char}
        </motion.div>
      ))}

      {/* Líneas de conexión animadas */}
      <svg className="absolute inset-0 w-full h-full opacity-10 z-[-1]">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.line
            key={i}
            x1={`${i * 25}%`}
            y1="0%"
            x2={`${i * 25 + 10}%`}
            y2="100%"
            stroke="rgb(74, 222, 128)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: i * 0.5,
            }}
          />
        ))}
      </svg>

      {/* Efecto de lluvia de código */}
      <div className="absolute inset-0 z-[-1]">
        {Array.from({ length: 10 }).map((_, i) => {
          const width = typeof window !== "undefined" ? window.innerWidth : 1200
          const height = typeof window !== "undefined" ? window.innerHeight : 800

          return (
            <motion.div
              key={`rain-${i}`}
              className="absolute text-green-400 font-mono text-xs opacity-20 z-[-1]"
              initial={{
                x: Math.random() * width,
                y: -50,
              }}
              animate={{
                y: height + 50,
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: Math.random() * 5,
              }}
              style={{
                zIndex: -1,
              }}
            >
              {Array.from({ length: Math.floor(Math.random() * 10) + 5 }).map((_, j) => (
                <div key={j} className="mb-2">
                  {terminalChars[Math.floor(Math.random() * terminalChars.length)]}
                </div>
              ))}
            </motion.div>
          )
        })}
      </div>

      {/* Círculos pulsantes */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute rounded-full border border-green-400 z-[-1]"
          style={{
            left: `${20 + i * 30}%`,
            top: `${30 + i * 20}%`,
            width: `${100 + i * 50}px`,
            height: `${100 + i * 50}px`,
            zIndex: -1,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

export default ParallaxBackground
export { ParallaxBackground }