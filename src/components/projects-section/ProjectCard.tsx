import Image from "next/image";
import { Project } from ".";

const ProjectCard = ({ project, language }: { project: Project; language: string }) => {
  return (
    <div className="bg-gray-900 border-2 border-green-400/30 hover:border-green-400 transition-all duration-300 group hover:shadow-lg hover:shadow-green-400/20">
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <Image
          width={400}
          height={200}
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl font-bold text-green-400 group-hover:text-green-300 transition-colors">
            {project.title}
          </h3>
          <span className="text-green-400/60 font-mono text-sm">
            #{project.id}
          </span>
        </div>

        <p className="text-gray-300 mb-6 leading-relaxed">
          {project.description.find((desc) => desc.language === language)?.text}
        </p>

        {/* Technologies */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-green-400/10 text-green-400 text-sm font-mono border border-green-400/30 hover:bg-green-400/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex xl:flex-row flex-wrap gap-6 items-center justify-center">
          <div className="flex flex-row gap-2">
          {project.github.map((repo) => {
            return (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-200 font-mono text-sm"
              >
                <span>📁</span>
                {repo.name}
              </a>
            );
          })}
          </div>
          <div className="flex flex-row gap-2">
          {project.demos.map((demo) => {
            return (
              <a
                key={demo.name}
                href={demo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-green-400 text-black hover:bg-green-300 transition-all duration-200 font-mono text-sm"
              >
                <span>🚀</span>
                {demo.name}
              </a>
            );
          })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
