"use client";

import { useEffect, useState } from "react";
import TechCard from "./TechCard";
import getTechnologies from "@/services/stackService";
import TechCardSkeleton from "./TechCardSkeleton";

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
  const [isLoading, setIsLoading] = useState(true);

  const numberOfSkeletons: number = 14;

  useEffect(() => {
    const fetchData = async () => {
      const technologies = await getTechnologies();
      setTechnologies(technologies);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <article
      className="flex items-center flex-col justify-center"
    >
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl mb-4">
          {language === "en" ? "> Tech Skills" : "> Habilidades Tech"}
        </h2>
        <p className="text-xl">{"$ cat stack.txt"}</p>
      </div>
      <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 ${isLoading ? "gap-10 -m-20" : "gap-6"} mt-10`}>
        {isLoading
          ? Array.from({ length: numberOfSkeletons }).map((_, index) => {
              return <TechCardSkeleton key={index} />;
            })
          : technologies.map((tech: Technology) => (
              <TechCard key={tech._id} tech={tech} language={language} />
            ))}
      </div>
    </article>
  );
};

export default SkillsSection;
