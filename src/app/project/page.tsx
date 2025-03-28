"use client";

import { useState } from "react";
import { projectData } from "@/data/projectData";
import { ProjectProps } from "@/types/project";
import { useProjectStore } from "@/store/projectStore";
import { useModalStore } from "@/store/modalStore";
import Container from "@/components/Layout/Container";
import ProjectHeader from "@/components/Project/ProjectHeader";
import ProjectList from "@/components/Project/ProjectList";
import Modal from "@/components/Modal/Modal";
import SpaceLinkModal from "@/components/Modal/SpaceLinkModal";
import TravelmakerModal from "@/components/Modal/TravelmakerModal";

const Project = () => {
  const [modalType, setModalType] = useState<string>("");
  const { category } = useProjectStore();
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
    <section>
      <Container>
        <ProjectHeader />
        <ProjectList filteredProjects={filteredProjects} handleProjectClick={handleProjectClick} />
      </Container>

      <Modal>
        {modalType === "spaceLink" && <SpaceLinkModal />}
        {modalType === "travelmaker" && <TravelmakerModal />}
      </Modal>
    </section>
  );
};

export default Project;
