"use client";

import AboutSection from "@/components/about-section/AboutSection";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer/Footer";
import { HeroSection } from "@/components/hero-section/HeroSection";
import { Navbar } from "@/components/navbar";
import { ProjectsSection } from "@/components/projects-section";
import { useState } from "react";

const Landing = () => {

  const [language, setLanguage] = useState("en");

  return (
    <>
    <Navbar language={language} setLanguage={setLanguage} />
        <div className="bg-black min-h-screen text-green-400 font-mono">

      <main className="pt-32">
        <HeroSection language={language}/>

        <AboutSection language={language} />
        
        <ProjectsSection language={language} />

        <ContactSection language={language} />
      </main>
      <Footer language={language}/>
    </div>
    </>
    )
}

export default Landing;