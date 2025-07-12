"use client";

import { useEffect, useState } from "react";
import TechCard from "./TechCard";
import getTechnologies from "@/services/stackService";

export interface Technology {
  _id: string;
  name: string;
  image: string;
  category: "language" | "library" | "framework" | "db" | "other";
  order: number;
  active: boolean;
}

const SkillsSection = ({ language }: { language: string }) => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const technologies = await getTechnologies();
      setTechnologies(technologies);
      console.log(technologies);
    };

    fetchData();
  }, []);

  return (
    <section
      id="about"
      className="min-h-90 flex items-center flex-col justify-center"
    >
      <div className="text-center">
        <h2 className="text-4xl md:text-6xl mb-4">
          {language === "en" ? "> Tech Skills" : "> Habilidades Tech"}
        </h2>
        <p className="text-xl">{"$ cat stack.txt"}</p>
      </div>
      <div className="space-y-12 grid grid-cols-7 gap-5 grid-rows-2 mt-4 ">
        {technologies.map((tech: Technology) => (
          <TechCard key={tech._id} tech={tech} language={language} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
