"use client";

import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { getAllProjects } from "@/services/productsService";

export interface Project {
  _id: string;
  title: string;
  description: { language: string; text: string }[];
  technologies: string[];
  github: { name: string; url: string }[];
  demos: { name: string; url: string }[];
  image: string[];
}


export const ProjectsSection = ({ language }: { language: string }) => {

  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projects = await getAllProjects();
      setProjects(projects);
    };

    fetchProjects();
  }, []);


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
          {projects?.map((project, index) => (
            <ProjectCard
              key={project._id}
              project={project}
              index={index}
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
