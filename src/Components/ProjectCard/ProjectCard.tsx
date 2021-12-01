import './ProjectCard.scss';

import React from 'react';

type ProjectCardProps = {
  imageURL: string;
  title: string;
  shortDescription: string;
  id: number;
  setCurrentProjectID: React.Dispatch<React.SetStateAction<number>>;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageURL,
  title,
  shortDescription,
  id,
  setCurrentProjectID,
}: ProjectCardProps) => (
  <figure
    role="none"
    className="projectCard"
    style={{ backgroundImage: `url(${imageURL})` }}
    onClick={() => setCurrentProjectID(id)}
  >
    <figcaption className="cardTitle">{title}</figcaption>
    <figcaption className="cardDescription">{shortDescription}</figcaption>
  </figure>
);

export default ProjectCard;
