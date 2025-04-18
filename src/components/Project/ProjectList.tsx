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
        <li key={project.id} className={s.projectItem} onClick={() => handleProjectClick(project)} aria-label={`${project.title} 프로젝트 상세 보기`}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
