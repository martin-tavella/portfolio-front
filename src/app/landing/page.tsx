"use client";

import ContactSection from "@/components/contact-section";
import { Navbar } from "@/components/navbar";
import { ProjectsSection } from "@/components/projects-section";
import SkillsSection from "@/components/skills-section/SkillsSection";
import { useState } from "react";

const Landing = () => {

  const [language, setLanguage] = useState("en");

  return (
    <>
    <Navbar language={language} setLanguage={setLanguage} />
        <div className="bg-black min-h-screen text-green-400 font-mono">

      <main className="pt-32">
        <section id="home" className="min-h-90 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl mb-4">{language === "en" ? "> Welcome to my portfolio" : "> Bienvenido a mi portfolio"}</h1>
            <p className="text-xl">{"$ whoami"}</p>
          </div>
        </section>

        <SkillsSection language={language} />
        
        <ProjectsSection language={language} />

        <ContactSection language={language} />
      </main>
    </div>
    </>
    )
}

export default Landing;