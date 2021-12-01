import './EducationCV.scss';

import React from 'react';

const EducationCV: React.FC = () => (
  <>
    <h3 className="title">Образование</h3>
    <ul className="educationList">
      <li>
        <h4 className="subtitle bold">Витебский Государственный Технологический Университет</h4>
        <ul className="educationSubList">
          <li>
            <h4 className="subtitle">Факультет «Экономической теории и маркетинга». 2009-2013</h4>
          </li>
          <li>
            <h4 className="subtitle">Факультет «Разработка информационных систем». 2013-2014</h4>
          </li>
        </ul>
      </li>
      <li>
        <h4 className="subtitle bold">British American Tobacco Russia</h4>
        <ul className="educationSubList">
          <li>
            <h4 className="subtitle">Myers–Briggs Type Indicator. 2018</h4>
          </li>
          <li>
            <h4 className="subtitle">Career management. 2018</h4>
          </li>
        </ul>
      </li>
      <li>
        <h4 className="subtitle bold">Epam</h4>
        <ul className="educationSubList">
          <li>
            <h4 className="subtitle">JavaScript / FRONT-END. 2021</h4>
          </li>
          <li>
            <h4 className="subtitle">React JS. 2021</h4>
          </li>
        </ul>
      </li>
    </ul>
  </>
);

export default EducationCV;
