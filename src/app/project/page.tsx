"use client";

import { useState } from "react";
import Image from "next/image";
import s from "./Project.module.scss";
import { useModalStore } from "@/store/modalStore";
import { ProjectProps } from "@/types/project";
import Container from "@/components/Layout/Container";
import Modal from "@/components/Modal/Modal";
import TravelmakerModal from "@/components/Modal/TravelmakerModal";
import TaskifyModal from "@/components/Modal/TaskifyModal";
import LinkbraryModal from "@/components/Modal/LinkbraryModal";

const projects: ProjectProps[] = [
  {
    id: 1,
    title: "✈️ TRAVEL MAKER",
    description: "체험 예약 플랫폼 프로젝트입니다.",
    image: "/images/travelmaker/travelmaker.jpg",
  },
  {
    id: 2,
    title: "Taskify",
    description: "협업 툴 및 일정 관리 시스템 프로젝트입니다.",
    image: "/images/taskify/taskify.jpg",
  },
  {
    id: 3,
    title: "Linkbrary",
    description: "링크 관리 서비스 프로젝트입니다.",
    image: "/images/linkbrary/linkbrary.jpg",
  },
  {
    id: 4,
    title: "PROJECT",
    description: "추가 프로젝트 설명입니다.",
    image: "/images/projectd.jpg",
  },
];

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
          {projects.map((project) => (
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
