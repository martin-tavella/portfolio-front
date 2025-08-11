import Image from "next/image";
import { Technology } from "./SkillsList";

const TechCard = ({ tech, language }: { tech: Technology; language: string }) => {

  const categories = {
    es: {
      language: "Lenguaje",
      library: "Librería",
      framework: "Framework",
      db: "Bases de datos",
      other: "Otro",
    },
    en: {
      language: "Languages",
      library: "Library",
      framework: "Frameworks",
      db: "Database",
      other: "Other",
    },
  };


  return (
    <div className="group relative m-1">
      <div
        className={`
          aspect-square p-10 border-2 transition-all duration-300 cursor-pointer
          bg-gray-900 border-green-400/30 text-green-400
          hover:bg-green-400/20 hover:border-green-400 hover:text-green-400
          hover:shadow-lg hover:shadow-current/20 hover:scale-105
          flex flex-col items-center justify-center gap-3
        `}
      >
        {/* Icon */}
        <div className="w-12 h-12 flex items-center justify-center">
          <Image
            width={100}
            height={1000}
            src={tech.image || "/placeholder.svg?height=48&width=48"}
            alt={tech.name}
            className="w-full h-full object-contain opacity-1000 group-hover:brightness-80 group-hover:invert-0 group-hover:opacity-100 transition-all duration-300 scale-150"
          />
        </div>

        {/* Name */}
        <div className="text-center">
          <h3 className="font-mono mt-4 text-sm font-semibold leading-tight">
            {tech.name}
          </h3>
        </div>

        {/* Category badge */}
        {/* <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-xs font-mono px-1 py-0.5 bg-black/50 rounded">
            {language === "en" ? categories.en[tech.category] : categories.es[tech.category]}
          </span> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default TechCard;
