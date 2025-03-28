import Image from "next/image";
import s from "./ProjectCard.module.scss";
import { ProjectProps } from "@/types/project";

interface ProjectCardProps {
  project: ProjectProps;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className={s.card}>
      <div className={s.imgWrap}>
        <Image src={project.image} fill sizes="(max-width: 768px) 100vw, 50vw" alt={project.title} priority />
      </div>
      <span className={s.tag}>{project.category}</span>
      <div className={s.titleWrap}>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
