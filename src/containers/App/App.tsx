import './App.scss';

import React from 'react';

import PageTitleLayout from '../../Components/HOC/pageTitleLayout';
import WrapperLayout from '../../Components/HOC/wrapperLayout';

const App = () => (
  <div className="app">
    <WrapperLayout>
      <PageTitleLayout title="Alexandr Demchenko CV | About">
        <h1>Under development...</h1>
      </PageTitleLayout>
    </WrapperLayout>
  </div>
);

export default App;
