import './ProjectPage.scss';

import Button from '@mui/material/Button';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { arrayOfProjects } from '../../../../cardData';
import PageTitleLayout from '../../../../Components/HOC/pageTitleLayout';
import TechList from '../../../../Components/TechList/TechList';

type ProjectPageProps = {};

const ProjectPage: React.FC<ProjectPageProps> = () => {
  const { id } = useParams<{ id: string }>();
  const currentProject = arrayOfProjects.concat().find((card) => card.id === +id);
  if (!currentProject) throw new Error('Проект с таким id не найден');
  return (
    <PageTitleLayout title={currentProject.title}>
      <div className="projectPage">
        <div className="projectHeader">
          <div className="projectIntro">
            <Link className="navLink projectBackBtn" to="/projects/">
              <Button variant="contained">Назад к проектам</Button>
            </Link>
            <h1 className="projectTitle">{currentProject.title}</h1>
            <TechList arrayOfTech={currentProject.tech} />
          </div>
          <img className="projectPic" src={currentProject.imageURL} alt={currentProject.title} />
        </div>
        <div className="projectInfo">
          <p className="projectDescription">{currentProject.description.info}</p>
          {currentProject.description.serverLink ? (
            <div className="projectWarning">
              <p className="projectMessage">Внимание! Для запуска проекта требуеться локальный запуск сервера!</p>
              <a className="projectLink" target="_blank" href={currentProject.description.serverLink} rel="noreferrer">
                Репозиторий с сервером на GitHub
              </a>
            </div>
          ) : null}
          {currentProject.description.deployLink ? (
            <p className="projectMessage">
              Перейти к приложению{' '}
              <a className="projectLink" target="_blank" href={currentProject.description.deployLink} rel="noreferrer">
                {currentProject.title}
              </a>
            </p>
          ) : null}
          <p className="projectMessage">
            Перейти к файлам проекта на GitHub{' '}
            <a className="projectLink" target="_blank" href={currentProject.description.githubLink} rel="noreferrer">
              {currentProject.title}
            </a>
          </p>
        </div>
      </div>
    </PageTitleLayout>
  );
};

export default ProjectPage;
