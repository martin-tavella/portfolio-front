"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import sendEmail from "@/services/contactService"
import validateContactForm from "@/utils/validateContactForm"

interface ContactSectionProps {
  language: string
}

const ContactSection = ({ language }: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState<{
    name?: string
    email?: string
    message?: string
  }>({})

  const [message, setMessage] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    // Limpiar errores mientras el usuario escribe
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name as keyof typeof newErrors]
        return newErrors
      })
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target
    const validationErrors = validateContactForm(formData, language)
    if (validationErrors[name as keyof typeof validationErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validationErrors[name as keyof typeof validationErrors],
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validar todo el formulario
    const validationErrors = validateContactForm(formData, language)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setMessage(
        language === "en" ? "Please fix the errors in the form." : "Por favor, corrige los errores en el formulario.",
      )
      return
    }

    setIsLoading(true)
    setMessage("")

    try {
      const response = await sendEmail(formData)
      if (response.status === 201) {
        setIsSuccess(true)
        setMessage(language === "en" ? "Email sent successfully!" : "Correo electrónico enviado con éxito!")
        setFormData({
          name: "",
          email: "",
          message: "",
        })
      }
    } catch (error) {
      console.error(error)
      setMessage(
        language === "en"
          ? "Error sending email. Please try again later."
          : "Error al enviar el correo electrónico. Por favor, inténtalo de nuevo más tarde.",
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="min-h-screen py-10 sm:py-20 px-4 sm:px-6 lg:px-10 bg-black">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-green-400 mb-2 sm:mb-4 font-mono">
            {language === "en" ? "> Contact" : "> Contacto"}
          </h2>
          <p className="text-sm sm:text-xl text-gray-300 font-mono mb-4">$ mail martutavella@gmail.com</p>

          {/* Status Message */}
          <AnimatePresence mode="wait">
            {!message ? (
              <motion.p
                key="default"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-lg sm:text-xl text-green-300 font-mono"
              >
                {language === "en" ? "Get in touch!" : "¡Pongámonos en contacto!"}
              </motion.p>
            ) : (
              <motion.div
                key="message"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className={`text-lg font-mono px-4 py-2 border-2 inline-block ${
                  isSuccess
                    ? "text-green-400 border-green-400 bg-green-400/10"
                    : "text-red-400 border-red-400 bg-red-400/10"
                }`}
              >
                {isSuccess && <span className="mr-2">✓</span>}
                {!isSuccess && <span className="mr-2">✗</span>}
                {message}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-2 border-green-400/30 bg-gray-900/50 p-6 sm:p-8"
        >
          <div className="mb-6">
            <div className="text-green-400 font-mono text-sm mb-4">
              $ {language === "en" ? "compose_message" : "redactar_mensaje"}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="text-green-400 font-mono text-sm flex items-center">
                <span className="mr-2">{">"}</span>
                {language === "en" ? "name:" : "nombre:"}
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                onBlur={handleBlur}
                type="text"
                placeholder={language === "en" ? "Enter your name..." : "Ingresa tu nombre..."}
                className={`w-full p-3 sm:p-4 bg-black border-2 text-green-400 font-mono text-sm sm:text-base placeholder-green-400/50 focus:outline-none focus:border-green-300 transition-all duration-200 ${
                  errors.name ? "border-red-400" : "border-green-400/50"
                }`}
                required
              />
              <AnimatePresence>
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-red-400 text-xs sm:text-sm font-mono flex items-center"
                  >
                    <span className="mr-2">!</span>
                    {errors.name}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-green-400 font-mono text-sm flex items-center">
                <span className="mr-2">{">"}</span>
                {language === "en" ? "email:" : "correo:"}
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={handleBlur}
                type="email"
                placeholder={language === "en" ? "Enter your email..." : "Ingresa tu correo..."}
                className={`w-full p-3 sm:p-4 bg-black border-2 text-green-400 font-mono text-sm sm:text-base placeholder-green-400/50 focus:outline-none focus:border-green-300 transition-all duration-200 ${
                  errors.email ? "border-red-400" : "border-green-400/50"
                }`}
                required
              />
              <AnimatePresence>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-red-400 text-xs sm:text-sm font-mono flex items-center"
                  >
                    <span className="mr-2">!</span>
                    {errors.email}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label className="text-green-400 font-mono text-sm flex items-center">
                <span className="mr-2">{">"}</span>
                {language === "en" ? "message:" : "mensaje:"}
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                onBlur={handleBlur}
                placeholder={language === "en" ? "Type your message here..." : "Escribe tu mensaje aquí..."}
                className={`w-full p-3 sm:p-4 bg-black border-2 text-green-400 font-mono text-sm sm:text-base placeholder-green-400/50 focus:outline-none focus:border-green-300 transition-all duration-200 resize-none ${
                  errors.message ? "border-red-400" : "border-green-400/50"
                }`}
                rows={5}
                required
              />
              <AnimatePresence>
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-red-400 text-xs sm:text-sm font-mono flex items-center"
                  >
                    <span className="mr-2">!</span>
                    {errors.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isLoading}
                className={`w-full sm:w-auto px-8 py-3 sm:py-4 font-mono text-sm sm:text-base font-semibold transition-all duration-200 ${
                  isLoading
                    ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                    : "bg-green-400 text-black hover:bg-green-300 hover:shadow-lg hover:shadow-green-400/20"
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="mr-2"
                    >
                      ⟳
                    </motion.span>
                    {language === "en" ? "Sending..." : "Enviando..."}
                  </span>
                ) : (
                  <>$ {language === "en" ? "send_message" : "enviar_mensaje"}</>
                )}
              </motion.button>
            </div>
          </form>

          {/* Terminal Footer */}
          <div className="mt-8 pt-6 border-t border-green-400/20">
            <div className="text-green-400/60 font-mono text-xs flex items-center justify-between">
              <span>$ {language === "en" ? "status: ready" : "estado: listo"}</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                _
              </motion.span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection