export type Project = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Equipment Reservation System",
    description:
      "A full-stack application for managing equipment availability and reservations with authentication and role-based access control.",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "React",
      "TypeScript",
      "Docker",
    ],
    github: "https://github.com/arianma02/Equipment-reservation-system",
    featured: true,
  },

  {
    title: "Uptime Monitor",
    description:
      "A service for monitoring website availability and recording health and response data.",
    technologies: [
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Docker",
    ],
    github: "https://github.com/arianma02/uptime-monitor",
  },
];