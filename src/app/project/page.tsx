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
  const [category, setCategory] = useState<string>("전체");
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
    if (category === "전체") return true;
    if (category === "개인 프로젝트" && project.category === "개인 프로젝트") return true;
    if (category === "팀 프로젝트" && project.category === "팀 프로젝트") return true;
    if (category === "퍼블리싱" && project.category === "퍼블리싱") return true;
    return false;
  });

  return (
    <section className={s.projectPage}>
      <Container>
        <nav className={s.category}>
          <button onClick={() => setCategory("전체")} className={category === "전체" ? s.active : ""}>
            전체
          </button>
          <button onClick={() => setCategory("개인 프로젝트")} className={category === "개인 프로젝트" ? s.active : ""}>
            개인 프로젝트
          </button>
          <button onClick={() => setCategory("팀 프로젝트")} className={category === "팀 프로젝트" ? s.active : ""}>
            팀 프로젝트
          </button>
          <button onClick={() => setCategory("퍼블리싱")} className={category === "퍼블리싱" ? s.active : ""}>
            퍼블리싱
          </button>
        </nav>

        <ul className={s.projectList}>
          {filteredProjects.map((project) => (
            <li key={project.id} className={s.projectItem} onClick={() => handleProjectClick(project)}>
              <div className={s.imgWrap}>
                <Image src={project.image} fill sizes="(max-width: 768px) 100vw, 50vw" alt={project.title} priority />
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
        {modalType === "spaceLink" && <SpaceLinkModal />}
        {modalType === "travelmaker" && <TravelmakerModal />}
        {/* {modalType === "taskify" && <TaskifyModal />} */}
      </Modal>
    </section>
  );
};

export default Project;
