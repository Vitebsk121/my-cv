import './App.scss';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppRouter from '../../Components/AppRouter/AppRouter';
import WrapperLayout from '../../Components/HOC/wrapperLayout';
import useTypedSelector from '../../hooks/useTypedSelector';

const App = () => {
  const { theme } = useTypedSelector((state) => state.appState);

  return (
    <div className={['app', theme].join(' ')}>
      <BrowserRouter>
        <WrapperLayout>
          <AppRouter />
        </WrapperLayout>
      </BrowserRouter>
    </div>
  );
};

export default App;
