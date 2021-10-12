import './CVPage.scss';

import React from 'react';

import avatar from '../../../../public/images/Avatar.jpeg';
import PageTitleLayout from '../../../Components/HOC/pageTitleLayout';

type CVPageProps = {};

const CVPage: React.FC<CVPageProps> = () => (
  <PageTitleLayout title="CV">
    <div className="cvPage">
      <div className="gridItem item1">
        <img className="cv__avatar" src={avatar} alt="asd" />
      </div>
      <div className="gridItem item2">
        <h3 className="cv__title">Alexandr Demchenko</h3>
        <h4 className="cv__subTitle">Junior Software Developer</h4>
      </div>
      <div className="gridItem item3">
        <h3 className="cv__title">Contacts</h3>
        <h4 className="cv__subTitle">+7(977)848-08-11</h4>
        <h4 className="cv__subTitle">Alexandr.Demchenko@list.ru</h4>
        <h4 className="cv__subTitle">@Alexandr.Demchenko</h4>
        <h4 className="cv__subTitle">Vitebsk121</h4>
        <h4 className="cv__subTitle">Moscow</h4>
      </div>
      <div className="gridItem item4">
        <h3 className="cv__title">About Me</h3>
        <h4 className="cv__subTitle">
          Hi! My name is Alexandr. I was born in Belarus where I started to make myself a career. Some time later moved
          to Russia. Nowadays I work for the international nicotine company British American Tobacco Russia. While
          working I proved to be one of the 8 best workers (out of 100 workers on the similar vacation in Moscow.
        </h4>
        <h4 className="cv__subTitle">
          Interesting projects, possibility of personal and careers development , the team itself - that’s what keeps me
          motivated. I really like to optimize everything; to find out the mistakes, analyze numbers and provide
          solutions.
        </h4>
        <h4 className="cv__subTitle"> Development areas: fear of flights, English level.</h4>
        <h4 className="cv__subTitle">
          I’m moderately hard-working ( prefer work and life balance theory ) at present I devote much time to my family
          and self-development. Love traveling with family and friends to Europe.
        </h4>
      </div>
      <div className="gridItem item5">
        <h3 className="cv__title">Key skills</h3>
        <h4 className="cv__subTitle">JavaScript</h4>
        <h4 className="cv__subTitle">HTML</h4>
        <h4 className="cv__subTitle">CSS</h4>
        <h4 className="cv__subTitle">Git</h4>
        <h4 className="cv__subTitle">Development tools</h4>
        <h5 className="description">GitHub</h5>
        <h5 className="description">Visual Studio Code</h5>
      </div>
      <div className="gridItem item6">
        <h3 className="cv__title">Code example</h3>
      </div>
      <div className="gridItem item7">7</div>
      <div className="gridItem item8">8</div>
      <div className="gridItem item9">9</div>
    </div>
  </PageTitleLayout>
);

export default CVPage;
