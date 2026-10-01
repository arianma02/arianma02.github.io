import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card__content">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-card__technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
        >
          View on GitHub ↗
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;