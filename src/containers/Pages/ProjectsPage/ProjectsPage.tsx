import './ProjectsPage.scss';

import React from 'react';

import CardsField from '../../../Components/CardsField/CardsField';
import PageTitleLayout from '../../../Components/HOC/pageTitleLayout';

type ProjectsPageProps = {};

const ProjectsPage: React.FC<ProjectsPageProps> = (props: ProjectsPageProps) => (
  <PageTitleLayout title="Projects">
    <div className="projectsPage">
      <p className="projectDescription">Описание проекта будет тут</p>
      <CardsField />
    </div>
  </PageTitleLayout>
);

export default ProjectsPage;
