import './TechList.scss';

import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import MyIcon from '../UI/MyIcon/MyIcon';

type TechListProps = {
  arrayOfTech: string[];
};

const TechList: React.FC<TechListProps> = ({ arrayOfTech }) => (
  <ul className="techList">
    <TransitionGroup component={null}>
      {arrayOfTech.map((tech) => (
        <CSSTransition timeout={1000} className="techItem" unmountOnExit key={tech}>
          <li className="techItem">
            <MyIcon imgSrc={tech} description="abc" />
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  </ul>
);

export default TechList;
