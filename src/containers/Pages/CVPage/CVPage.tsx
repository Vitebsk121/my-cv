import './CVPage.scss';

import React from 'react';

import PageTitleLayout from '../../../Components/HOC/pageTitleLayout';

type CVPageProps = {};

const CVPage: React.FC<CVPageProps> = () => (
  <PageTitleLayout title="CV">
    <div className="cvPage">
      <h1>CV PAGE</h1>
    </div>
  </PageTitleLayout>
);

export default CVPage;
