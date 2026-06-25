import Image from 'next/image';
import s from './ProjectCard.module.scss';
import { ProjectProps } from '@/types/project';

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  return (
    <article className={s.card} aria-labelledby={`project-${project.id}`}>
      <div className={s.imgWrap}>
        <Image src={project.image} fill sizes='(max-width: 768px) 100vw, 50vw' alt={project.title} priority />
      </div>
      <span className={s.tag}>{project.category}</span>
      <div className={s.titleWrap}>
        <h2 id={`project-${project.id}`}>{project.title}</h2>
        <p>{project.description}</p>
      </div>
    </article>
  );
};

export default ProjectCard;
