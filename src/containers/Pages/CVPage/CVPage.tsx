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
        <h3 className="cv__title">Contacts:</h3>
      </div>
      <div className="gridItem item4">4</div>
      <div className="gridItem item5">5</div>
      <div className="gridItem item6">6</div>
      <div className="gridItem item7">7</div>
      <div className="gridItem item8">8</div>
      <div className="gridItem item9">9</div>
      <div className="gridItem item10">10</div>
    </div>
  </PageTitleLayout>
);

export default CVPage;
