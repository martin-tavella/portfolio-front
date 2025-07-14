"use client";

import sendEmail from "@/services/contactService";
import validateContactForm from "@/utils/validateContactForm";
import { useState } from "react";

const ContactSection = ({ language }: { language: string }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({
    name: "",
    email: "",
    message: "",
  });

  const [message, setMessage] = useState<string>("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    const validationErrors = validateContactForm(formData, language);

    if (validationErrors[name as keyof typeof validationErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validationErrors[name as keyof typeof validationErrors],
      }));
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof typeof newErrors];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.keys(errors).length > 0) {
      setMessage(
        language === "en"
          ? "Please fix the errors in the form."
          : "Por favor, corrige los errores en el formulario."
      );

      return;
    }

    try {
      const response = await sendEmail(formData);
      if (response.status === 201) {
        setMessage( language === "en"
          ? "Email sent successfully!"
          : "Correo electrónico enviado con éxito!"
        )
      }
      } catch (error) {
        console.error(error);
    }
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="min-h-90 flex flex-col items-center justify-center py-10"
    >
      <div className="text-center">
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-green-400 mb-2 sm:mb-4">
          {language === "en" ? "> Contact" : "> Contacto"}
        </h2>
        <p className="text-sm sm:text-xl text-gray-300">{"$ mail martutavella@gmail.com"}</p>
        <p className="text-2xl py-5 text-center">
          {!message
            ? language === "en"
              ? "Get in touch!"
              : "¡Pongámonos en contacto!"
            : message}
        </p>
      </div>
      <form onSubmit={handleSubmit} className="max-w-3/6 w-full">
        <div className="mt-8">
          <input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={handleBlur}
            type="text"
            placeholder={language === "en" ? "Your Name" : "Tu Nombre"}
            className="p-2 border border-green-400 bg-black text-green-400 rounded w-full mb-4"
            required
          />
          {errors.name && (
            <p className="text-red-500 text-sm pb-2">{errors.name}</p>
          )}
          <input
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleBlur}
            type="email"
            placeholder={
              language === "en" ? "Your Email" : "Tu Correo Electrónico"
            }
            className="p-2 border border-green-400 bg-black text-green-400 rounded w-full mb-4"
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm pb-2">{errors.email}</p>
          )}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder={language === "en" ? "Your Message" : "Tu Mensaje"}
            className="p-2 border border-green-400 bg-black text-green-400 rounded w-full mb-1"
            rows={4}
            required
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm pb-5">{errors.message}</p>
          )}
          <button
            type="submit"
            className="bg-green-400 text-black px-4 py-2 rounded my-2 hover:bg-green-500 transition-colors"
          >
            {language === "en" ? "Send Message" : "Enviar Mensaje"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactSection;
