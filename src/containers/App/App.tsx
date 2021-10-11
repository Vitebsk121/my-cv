import './App.scss';

import React from 'react';

import PageTitleLayout from '../../Components/HOC/pageTitleLayout';
import WrapperLayout from '../../Components/HOC/wrapperLayout';
import useTypedSelector from '../../hooks/useTypedSelector';

const App = () => {
  const { theme } = useTypedSelector((state) => state.appState);
  return (
    <div className={['app', theme].join(' ')}>
      <WrapperLayout>
        <PageTitleLayout title="About">
          <h1>Under development...</h1>
        </PageTitleLayout>
      </WrapperLayout>
    </div>
  );
};

export default App;
