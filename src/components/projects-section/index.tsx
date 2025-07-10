"use client";

import ProjectCard from "./ProjectCard";

export interface Project {
  id: string;
  title: string;
  description: { language: string; text: string }[];
  technologies: string[];
  github: { name: string; url: string }[];
  demos: { name: string; url: string }[];
  image: string;
}

const projects: Project[] = [
  {
    id: "01",
    title: "Servicio Libre",
    description: [
      {
        language: "en",
        text: "Full-stack application solution to freelance workers. Developed with payment integration, admin dashboard, chat worker-customer. Built with modern technologies for optimal performance.",
      },
      {
        language: "es",
        text: "Solución de aplicación full-stack para trabajadores freelance. Desarrollada con integración de pagos, panel de administración, chat entre trabajador y cliente. Construida con tecnologías modernas para un rendimiento óptimo.",
      },
    ],
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Node.js",
      "NestJS",
      "Mercado Pago",
      "Stripe",
      "PostgreSQL",
    ],
    github: [
      { name: "frontend", url: "https://github.com/Servicios-libre/frontend" },
      { name: "backend", url: "https://github.com/Servicios-libre/backend" },
    ],
    demos: [
      { name: "Deploy Frontend", url: "https://serviciolibre.vercel.app" },
      {
        name: "Deploy Backend",
        url: "https://back-servicio-libre.onrender.com",
      },
    ],
    // status: "completed",
    image: "/placeholder.svg?height=200&width=400",
  },
];

export const ProjectsSection = ({ language }: { language: string }) => {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-10 bg-black"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-4">
            {language === "en" ? "> Projects" : "> Proyectos"}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {language === "en"
              ? "A collection of projects I've built using various technologies and frameworks"
              : "Una colección de proyectos que he construido utilizando diversas tecnologías y frameworks"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
