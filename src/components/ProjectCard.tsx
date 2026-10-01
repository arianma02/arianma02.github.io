import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card__content">
        <h2>{project.title}</h2>

        <p className="project-card__description">{project.description}</p>

        <p className="project-card__technologies">
          {project.technologies.join(" · ")}
        </p>

        <a
          className="project-card__link"
          href={project.github}
          target="_blank"
          rel="noreferrer"
        >
          View repository ↗
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
