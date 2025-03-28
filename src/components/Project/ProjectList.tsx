import ProjectCard from "@/components/Project/ProjectCard";
import s from "./ProjectList.module.scss";
import { ProjectProps } from "@/types/project";

interface ProjectListProps {
  filteredProjects: ProjectProps[];
  handleProjectClick: (project: ProjectProps) => void;
}

const ProjectList = ({ filteredProjects, handleProjectClick }: ProjectListProps) => {
  return (
    <ul className={s.projectList}>
      {filteredProjects.map((project) => (
        <li key={project.id} className={s.projectItem} onClick={() => handleProjectClick(project)}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
