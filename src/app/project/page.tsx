"use client";

import { useState } from "react";
import Image from "next/image";
import s from "./Project.module.scss";
import { projectData } from "@/data/projectData";
import { ProjectProps } from "@/types/project";
import { useModalStore } from "@/store/modalStore";
import Container from "@/components/Layout/Container";
import Modal from "@/components/Modal/Modal";
import SpaceLinkModal from "@/components/Modal/SpaceLinkModal";
import TravelmakerModal from "@/components/Modal/TravelmakerModal";

const Project = () => {
  const [modalType, setModalType] = useState<string>("");
  const [category, setCategory] = useState<string>("All");
  const { openModal } = useModalStore();

  const handleProjectClick = (project: ProjectProps) => {
    if (project.id === 1) {
      setModalType("spaceLink");
      openModal(project, "spaceLink");
    } else if (project.id === 2) {
      setModalType("travelmaker");
      openModal(project, "travelmaker");
    } else {
      window.open(project.link, "_blank", "noopener,noreferrer");
    }
  };

  const filteredProjects = projectData.filter((project) => {
    if (category === "All") return true;
    const categoryText = category.replace(/[^a-zA-Z]/g, "");
    return project.category.includes(categoryText);
  });

  return (
    <section className={s.projectPage}>
      <Container>
        <div className={s.projectHeader}>
          <h2 className={s.title}>It&apos;s my works! 💻</h2>
          <nav className={s.category}>
            <button onClick={() => setCategory("All")} className={category === "All" ? s.active : ""}>
              All
            </button>
            <button onClick={() => setCategory("Personal")} className={category === "Personal" ? s.active : ""}>
              Personal
            </button>
            <button onClick={() => setCategory("Team")} className={category === "Team" ? s.active : ""}>
              Team
            </button>
            <button onClick={() => setCategory("Company")} className={category === "Company" ? s.active : ""}>
              Company
            </button>
          </nav>
        </div>

        <ul className={s.projectList}>
          {filteredProjects.map((project) => (
            <li key={project.id} className={s.projectItem} onClick={() => handleProjectClick(project)}>
              <div className={s.imgWrap}>
                <Image src={project.image} fill sizes="(max-width: 768px) 100vw, 50vw" alt={project.title} priority />
              </div>
              <span className={s.tag}>{project.category}</span>
              <div className={s.titleWrap}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>

      <Modal>
        {modalType === "spaceLink" && <SpaceLinkModal />}
        {modalType === "travelmaker" && <TravelmakerModal />}
        {/* {modalType === "taskify" && <TaskifyModal />} */}
      </Modal>
    </section>
  );
};

export default Project;
