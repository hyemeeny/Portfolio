'use client';

import { useState } from 'react';
import { projectData } from '@/data/projectData';
import { ProjectProps } from '@/types/project';
import { useProjectStore } from '@/store/projectStore';
import { useModalStore } from '@/store/modalStore';
import Container from '@/components/Layout/Container';
import ProjectHeader from '@/components/Project/ProjectHeader';
import ProjectList from '@/components/Project/ProjectList';
import Modal from '@/components/Modal/Modal';
import SpaceLinkModal from '@/components/Modal/SpaceLinkModal';
import TravelmakerModal from '@/components/Modal/TravelmakerModal';
import PlayAutoModal from '@/components/Modal/PlayAutoModal';

const Project = () => {
  const [modalType, setModalType] = useState<string>('');
  const { category } = useProjectStore();
  const { openModal } = useModalStore();

  const handleProjectClick = (project: ProjectProps) => {
    switch (project.id) {
      case 1:
        setModalType('spaceLink');
        openModal(project, 'spaceLink');
        break;
      case 2:
        setModalType('travelmaker');
        openModal(project, 'travelmaker');
        break;
      case 23:
        setModalType('playAuto');
        openModal(project, 'playAuto');
        break;
      default:
        window.open(project.link, '_blank', 'noopener,noreferrer');
    }
  };

  const filteredProjects = projectData.filter((project) => {
    if (category === 'All') return true;
    const categoryText = category.replace(/[^a-zA-Z]/g, '');
    return project.category.includes(categoryText);
  });

  return (
    <section>
      <Container>
        <ProjectHeader />
        <ProjectList filteredProjects={filteredProjects} handleProjectClick={handleProjectClick} />
      </Container>

      <Modal>
        {modalType === 'spaceLink' && <SpaceLinkModal />}
        {modalType === 'travelmaker' && <TravelmakerModal />}
        {modalType === 'playAuto' && <PlayAutoModal />}
      </Modal>
    </section>
  );
};

export default Project;
