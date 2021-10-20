import './ProjectsPage.scss';

import React from 'react';

import PageTitleLayout from '../../../Components/HOC/pageTitleLayout';

type ProjectsPageProps = {};

const ProjectsPage: React.FC<ProjectsPageProps> = (props: ProjectsPageProps) => (
  <PageTitleLayout title="Projects">
    <div className="projectsPage">
      <h1>PROJECTS</h1>
    </div>
  </PageTitleLayout>
);

export default ProjectsPage;
