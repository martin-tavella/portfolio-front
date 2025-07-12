import Image from "next/image";
import { Technology } from "./SkillsSection";

const techColors: Record<string, { bg: string; border: string; text: string }> =
  {
    React: {
      bg: "bg-blue-500/20",
      border: "border-blue-400",
      text: "text-blue-400",
    },
    "Next.js": {
      bg: "bg-white/20",
      border: "border-white",
      text: "text-white",
    },
    JavaScript: {
      bg: "bg-yellow-500/20",
      border: "border-yellow-400",
      text: "text-yellow-400",
    },
    TypeScript: {
      bg: "bg-blue-600/20",
      border: "border-blue-500",
      text: "text-blue-500",
    },
    "Tailwind CSS": {
      bg: "bg-cyan-500/20",
      border: "border-cyan-400",
      text: "text-cyan-400",
    },
    "Node.js": {
      bg: "bg-green-600/20",
      border: "border-green-500",
      text: "text-green-500",
    },
    "Express.js": {
      bg: "bg-gray-600/20",
      border: "border-gray-400",
      text: "text-gray-300",
    },
    NestJS: {
      bg: "bg-red-600/20",
      border: "border-red-500",
      text: "text-red-500",
    },
    MongoDB: {
      bg: "bg-green-700/20",
      border: "border-green-600",
      text: "text-green-600",
    },
    PostgreSQL: {
      bg: "bg-blue-700/20",
      border: "border-blue-600",
      text: "text-blue-600",
    },
    Git: {
      bg: "bg-orange-600/20",
      border: "border-orange-500",
      text: "text-orange-500",
    },
    Vercel: { bg: "bg-white/20", border: "border-white", text: "text-white" },
    JWT: {
      bg: "bg-purple-600/20",
      border: "border-purple-500",
      text: "text-purple-500",
    },
    Scrum: {
      bg: "bg-blue-800/20",
      border: "border-blue-700",
      text: "text-blue-700",
    },
  };

const TechCard = ({ tech, language }: { tech: Technology; language: string }) => {
  const colors = techColors[tech.name] || {
    bg: "bg-green-400/20",
    border: "border-green-400",
    text: "text-green-400",
  };

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
    <div className="group relative">
      <div
        className={`
          aspect-square p-10 border-2 transition-all duration-300 cursor-pointer
          bg-gray-900 border-green-400/30 text-green-400
          hover:${colors.bg} hover:${colors.border} hover:${colors.text}
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
        <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-xs font-mono px-1 py-0.5 bg-black/50 rounded">
            {language === "en" ? categories.en[tech.category] : categories.es[tech.category]}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TechCard;
