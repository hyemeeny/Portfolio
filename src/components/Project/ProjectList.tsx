import Link from 'next/link';
import s from './ProjectList.module.scss';
import ProjectCard from '@/components/Project/ProjectCard';
import { ProjectListProps } from '@/types/project';

const ProjectList = ({ filteredProjects, handleProjectClick }: ProjectListProps) => {
  return (
    <ul className={s.projectList}>
      {filteredProjects.map((project) => (
        <li key={project.id} className={s.projectItem}>
          {project.link ? (
            <Link href={project.link} target='_blank' rel='noopener noreferrer'>
              <ProjectCard project={project} />
            </Link>
          ) : (
            <div onClick={() => handleProjectClick(project)}>
              <ProjectCard project={project} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
