import './ExperienceCV.scss';

import React from 'react';

const ExperienceCV: React.FC = () => (
  <>
    <h3 className="title">Опыт работы</h3>
    <ul className="educationList">
      <li>
        <h4 className="subtitle bold">British American Tobacco Russia</h4>
        <ul className="educationSubList">
          <li>
            <h4 className="subtitle">Trade marketing representative. 2016 - ...</h4>
          </li>
        </ul>
      </li>
      <li>
        <h4 className="subtitle bold">Эколайнбел</h4>
        <ul className="educationSubList">
          <li>
            <h4 className="subtitle">Торговый представитель. 2015-2016</h4>
          </li>
        </ul>
      </li>
      <li>
        <h4 className="subtitle bold">British american tobacco trading company</h4>
        <ul className="educationSubList">
          <li>
            <h4 className="subtitle">Коммерческий агент. 2014-2015</h4>
          </li>
        </ul>
      </li>
    </ul>
  </>
);

export default ExperienceCV;
