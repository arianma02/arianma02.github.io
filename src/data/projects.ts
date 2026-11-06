export type Project = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
};

export const projects: Project[] = [
  {
    title: "Equipment Reservation System",
    description:
      "Manage equipment availability and reservations, with authentication and role-based access.",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "React",
      "TypeScript",
      "Docker",
    ],
    github: "https://github.com/arianma02/equipment-reservation-system",
  },

  {
    title: "Document Explorer",
    description:
      "Explore connections between PDFs and text files, with a graph showing related passages and their sources.",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "React",
      "TypeScript",
      "ONNX Runtime",
    ],
    github: "https://github.com/arianma02/document-explorer",
  },
  {
    title: "Transit Prediction Analysis",
    description:
      "Analyse how Stockholm departure predictions change through an automated data pipeline and Power BI report.",
    technologies: [
      "Python",
      "SQL",
      "BigQuery",
      "dbt",
      "Airflow",
      "Docker",
      "Power BI",
    ],
    github: "https://github.com/arianma02/Transit-Prediction-Analysis",
  },
];
