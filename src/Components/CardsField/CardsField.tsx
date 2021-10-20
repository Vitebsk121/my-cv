import './CardsField.scss';

import React from 'react';

import { arrayOfProjects } from '../../cardData';
import ProjectCard from '../ProjectCard/ProjectCard';

type CardsFieldProps = {};

const CardsField: React.FC<CardsFieldProps> = (props: CardsFieldProps) => (
  <div className="cardsField">
    {arrayOfProjects.map((project) => (
      <ProjectCard imageURL={project.imageURL} title={project.title} shortDescription={project.shortDescription} />
    ))}
  </div>
);

export default CardsField;
