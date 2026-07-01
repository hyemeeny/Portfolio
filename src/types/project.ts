export interface ProjectProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  modalType?: 'spaceLink' | 'ksi' | 'travelMaker' | 'playAuto';
  link?: string;
}

export interface ProjectListProps {
  filteredProjects: ProjectProps[];
  handleProjectClick: (project: ProjectProps) => void;
}
