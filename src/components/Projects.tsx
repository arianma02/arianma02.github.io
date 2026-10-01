import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects">
      <p>Selected work</p>
      <h2>Projects</h2>

      <div>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;