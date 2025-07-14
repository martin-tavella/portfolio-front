"use client"

import { motion } from "framer-motion"

interface FooterProps {
  language: string
}

const Footer = ({ language }: FooterProps) => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/martin-tavella",
      icon: "📁",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/martin-tavella",
      icon: "💼",
    },
    {
      name: "Email",
      url: "mailto:martutavella@gmail.com",
      icon: "📧",
    },
  ]

  return (
    <footer className="bg-black border-t-2 border-green-400 py-8 px-4 sm:px-6 lg:px-10 mt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Terminal Command */}
          <div className="text-center md:text-left">
            <div className="text-green-400 font-mono text-sm mb-2">
              $ {language === "en" ? "echo 'Thanks for visiting!'" : "echo '¡Gracias por visitar!'"}
            </div>
            <div className="text-gray-400 font-mono text-xs">
              © {currentYear} Martin Tavella.{" "}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <span className="text-green-400 font-mono text-sm hidden sm:block">
              $ {language === "en" ? "connect" : "conectar"}
            </span>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors font-mono text-sm border border-green-400/30 hover:border-green-400 px-3 py-1 hover:bg-green-400/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="mr-2">{link.icon}</span>
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Terminal Cursor */}
        <div className="text-center mt-6">
          <motion.span
            className="text-green-400 font-mono text-lg"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          >
            _
          </motion.span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;