import './CVPage.scss';

import React from 'react';

import AboutCv from '../../../Components/AboutCV/AboutCV';
import Avatar from '../../../Components/Avatar/Avatar';
import Contacts from '../../../Components/Contacts/Contacts';
import PageTitleLayout from '../../../Components/HOC/pageTitleLayout';
import SkillsCV from '../../../Components/SkillsCV/SkillsCV';
import EducationCV from "../../../Components/EducationCV/EducationCV";
import ExperienceCV from "../../../Components/ExperienceCV/ExperienceCV";

type CVPageProps = {};

const CVPage: React.FC<CVPageProps> = () => (
  <PageTitleLayout title="CV">
    <div className="container">
      <div className="avatar">
        <Avatar />
      </div>
      <div className="name">
        <h3 className="title">Alexandr Demchenko</h3>
        <h4 className="subtitle">Junior Software Developer</h4>
      </div>
      <div className="contacts">
        <Contacts />
      </div>
      <div className="about">
        <AboutCv />
      </div>
      <div className="skills">
        <SkillsCV />
      </div>
      <div className="code">
        <h3 className="title">Code example</h3>
        <h4 className="subtitle">
          <pre className='codeExample'>
            {`
  function isPalindrome(line) {
    const str = String(line);
    const reverse = str.split('').reverse().join('');
    return reverse === line;
  }
        `}
          </pre>
        </h4>
      </div>
      <div className="education">
        <EducationCV />
      </div>
      <div className="experience">
        <ExperienceCV />
      </div>
      <div className="englishLevel">
        <h3 className="title">English level</h3>
        <h4 className="subtitle">A2</h4>
      </div>
    </div>
  </PageTitleLayout>
);

export default CVPage;
