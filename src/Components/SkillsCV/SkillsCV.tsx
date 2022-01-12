import './SkillsCV.scss';

import React from 'react';

type SkillsCVProps = {};

const SkillsCV: React.FC<SkillsCVProps> = () => (
  <>
    <h3 className="title">Навыки</h3>
    <ul className="skillsList">
      <li>
        <h4 className="subtitle">JavaScript</h4>
      </li>
      <li>
        <h4 className="subtitle">TypeScript</h4>
      </li>
      <li>
        <h4 className="subtitle">HTML</h4>
      </li>
      <li>
        <h4 className="subtitle">CSS</h4>
      </li>
      <li>
        <h4 className="subtitle">SCSS</h4>
      </li>
      <li>
        <h4 className="subtitle">WebPack</h4>
      </li>
      <li>
        <h4 className="subtitle">Vite</h4>
      </li>
      <li>
        <h4 className="subtitle">React</h4>
      </li>
      <li>
        <h4 className="subtitle">Redux</h4>
      </li>
      <li>
        <h4 className="subtitle">Git</h4>
      </li>
      <li>
        <h4 className="subtitle">JEST</h4>
      </li>
      <li>
        <h4 className="subtitle">React Testing library</h4>
      </li>
    </ul>
  </>
);

export default SkillsCV;
