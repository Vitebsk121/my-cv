import './AboutPage.scss';

import React from 'react';

import PageTitleLayout from '../../../Components/HOC/pageTitleLayout';

type AboutPageProps = {};

const AboutPage: React.FC<AboutPageProps> = () => (
  <PageTitleLayout title="About">
    <div className="AboutPage">
      <h1>ABOUT PAGE</h1>
    </div>
  </PageTitleLayout>
);

export default AboutPage;
