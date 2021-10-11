import './App.scss';

import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import WrapperLayout from '../../Components/HOC/wrapperLayout';
import useTypedSelector from '../../hooks/useTypedSelector';
import AboutPage from '../Pages/AboutPage/AboutPage';
import CVPage from '../Pages/CVPage/CVPage';
import ErrorPage404 from '../Pages/ErrorPage404/ErrorPage404';

const App = () => {
  const { theme } = useTypedSelector((state) => state.appState);

  const routes = [
    { path: '/cv', exact: true, Component: CVPage },
    { path: '/about', exact: true, Component: AboutPage },
  ];

  return (
    <div className={['app', theme].join(' ')}>
      <BrowserRouter>
        <WrapperLayout>
          <Switch>
            {routes.map(({ exact, path, Component }) => (
              <Route key={path} path={path} exact={exact}>
                {() => <Component />}
              </Route>
            ))}
            <Redirect from="/" to="/cv" exact />
            <Route component={ErrorPage404} />
          </Switch>
        </WrapperLayout>
      </BrowserRouter>
    </div>
  );
};

export default App;
