"use client";

import { useState } from "react";
import Image from "next/image";
import s from "./Project.module.scss";
import { projectData } from "@/data/projectData";
import { ProjectProps } from "@/types/project";
import { useModalStore } from "@/store/modalStore";
import Container from "@/components/Layout/Container";
import Modal from "@/components/Modal/Modal";
import TravelmakerModal from "@/components/Modal/TravelmakerModal";
import TaskifyModal from "@/components/Modal/TaskifyModal";
import LinkbraryModal from "@/components/Modal/LinkbraryModal";

const Project = () => {
  const [modalType, setModalType] = useState<string>("");
  const { openModal } = useModalStore();

  const handleProjectClick = (project: ProjectProps) => {
    if (project.id === 1) {
      setModalType("travelmaker");
    } else if (project.id === 2) {
      setModalType("taskify");
    } else if (project.id === 3) {
      setModalType("Linkbrary");
    }

    openModal(project, modalType);
  };

  return (
    <section className={s.projectPage}>
      <Container>
        <ul className={s.projectList}>
          {projectData.map((project) => (
            <li key={project.id} className={s.projectItem} onClick={() => handleProjectClick(project)}>
              <div className={s.imgWrap}>
                <Image src={project.image} fill alt={project.title} />
              </div>
              <div className={s.titleWrap}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>

      <Modal>
        {modalType === "travelmaker" && <TravelmakerModal />}
        {modalType === "taskify" && <TaskifyModal />}
        {modalType === "taskify" && <LinkbraryModal />}
      </Modal>
    </section>
  );
};

export default Project;
