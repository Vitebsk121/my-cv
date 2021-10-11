import './App.scss';

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import WrapperLayout from '../../Components/HOC/wrapperLayout';
import useTypedSelector from '../../hooks/useTypedSelector';
import AboutPage from '../Pages/AboutPage/AboutPage';
import CVPage from '../Pages/CVPage/CVPage';

const App = () => {
  const { theme } = useTypedSelector((state) => state.appState);

  return (
    <div className={['app', theme].join(' ')}>
      <BrowserRouter>
        <WrapperLayout>
          <Route path="/" exact>
            <CVPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
        </WrapperLayout>
      </BrowserRouter>
    </div>
  );
};

export default App;
