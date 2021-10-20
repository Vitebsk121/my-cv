import './ProjectCard.scss';

import React from 'react';

type ProjectCardProps = {
  imageURL: string;
  title: string;
  shortDescription: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ imageURL, title, shortDescription }: ProjectCardProps) => (
  <figure className="projectCard" style={{ backgroundImage: `url(${imageURL})` }}>
    <figcaption className="cardTitle">{title}</figcaption>
    <figcaption className="cardDescription">{shortDescription}</figcaption>
  </figure>
);

export default ProjectCard;
