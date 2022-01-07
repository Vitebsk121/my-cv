import './ProjectsPage.scss';

import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { arrayOfProjects } from '../../../cardData';
import CardsField from '../../../Components/CardsField/CardsField';
import PageTitleLayout from '../../../Components/HOC/pageTitleLayout';
import TechList from '../../../Components/TechList/TechList';

type ProjectsPageProps = {};

const ProjectsPage: React.FC<ProjectsPageProps> = () => {
  const [currentProjectID, setCurrentProjectID] = useState(0);
  const currentProject = arrayOfProjects.find((project) => project.id === currentProjectID);
  return (
    <PageTitleLayout title="Projects">
      <div className="projectsPage">
        <CardsField setCurrentProjectID={setCurrentProjectID} />
        {currentProject ? (
          <>
            <TechList arrayOfTech={currentProject.tech} />
            <Link className="navLink" to={`/projects/${currentProject.id}`}>
              <Button variant="contained">{`Перейти к ${currentProject.title}`}</Button>
            </Link>
          </>
        ) : (
          <h3 className="projectDescription">Выберите проект, чтобы узнать больше</h3>
        )}
      </div>
    </PageTitleLayout>
  );
};

export default ProjectsPage;
