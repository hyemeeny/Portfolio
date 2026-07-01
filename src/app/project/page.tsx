'use client';

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
import KsiModal from '@/components/Modal/KsiModal';

const Project = () => {
  const { category } = useProjectStore();
  const { openModal, modalType } = useModalStore();

  const handleProjectClick = (project: ProjectProps) => {
    if (project.modalType) {
      openModal(project, project.modalType);
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
        {modalType === 'playAuto' && <PlayAutoModal />}
        {modalType === 'ksi' && <KsiModal />}
        {modalType === 'spaceLink' && <SpaceLinkModal />}
        {modalType === 'travelMaker' && <TravelmakerModal />}
      </Modal>
    </section>
  );
};

export default Project;
