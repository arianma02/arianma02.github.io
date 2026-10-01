import { projects } from "../data/projects";
import { siteContent } from "../data/siteContent";

import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section className="projects-page">
      <div className="shell">
        <header className="projects-header">
          <h1>{siteContent.projectsHeading}</h1>

          <p>{siteContent.projectsDescription}</p>
        </header>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
