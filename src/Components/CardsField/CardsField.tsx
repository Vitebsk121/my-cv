import './CardsField.scss';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from '@mui/material/IconButton';
import React, { useEffect, useMemo, useState } from 'react';

import { arrayOfProjects } from '../../cardData';
import useTypedSelector from '../../hooks/useTypedSelector';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import ProjectCard from '../ProjectCard/ProjectCard';

type CardsFieldProps = {};

const CardsField: React.FC<CardsFieldProps> = () => {
  const { theme } = useTypedSelector((state) => state.appState);
  const [page, setPage] = useState(1);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [totalPages, setTotalPages] = useState(1);
  const [cardOnPage, setCardOnPage] = useState(4);

  useEffect(() => {
    setTotalPages(Math.ceil(arrayOfProjects.length / cardOnPage));
  });

  const nextPageHandler = () => {
    if (page === totalPages) return;
    setPage((prevState) => prevState + 1);
  };

  const prevPageHandler = () => {
    if (page === 1) return;
    setPage((prevState) => prevState - 1);
  };

  useWindowWidth(setWindowSize);

  useEffect(() => {
    if (windowSize <= 680 && windowSize > 320) setCardOnPage(2);
    if (windowSize <= 980 && windowSize > 680) setCardOnPage(3);
    if (windowSize <= 1920 && windowSize > 980) setCardOnPage(4);
    if (windowSize > 1920) setCardOnPage(5);
  }, [windowSize]);

  const arrayOfCards = useMemo(() => {
    if (page > totalPages) setPage(totalPages);
    const firstIndexOfCard = page * cardOnPage - cardOnPage;
    const lastIndexOfCard = page * cardOnPage;
    return arrayOfProjects.concat().filter((card, index) => index >= firstIndexOfCard && index < lastIndexOfCard);
  }, [page, cardOnPage, windowSize]);

  return (
    <div className="cardsField">
      <div className="arrow">
        <IconButton
          color={theme === 'lightTheme' ? 'primary' : 'inherit'}
          disabled={page === 1}
          aria-label="prev"
          onClick={prevPageHandler}
        >
          <ArrowBackIosIcon />
        </IconButton>
      </div>
      {arrayOfCards.map((project) => (
        <ProjectCard
          key={project.imageURL}
          imageURL={project.imageURL}
          title={project.title}
          shortDescription={project.shortDescription}
        />
      ))}
      <div className="arrow">
        <IconButton
          color={theme === 'lightTheme' ? 'primary' : 'inherit'}
          disabled={page === totalPages}
          aria-label="next"
          onClick={nextPageHandler}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default CardsField;
