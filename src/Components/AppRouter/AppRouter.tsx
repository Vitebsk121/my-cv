import React from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ErrorPage404 from '../../containers/Pages/ErrorPage404/ErrorPage404';
import routes from '../../router';

const AppRouter: React.FC = () => {
  const location = useLocation();

  return (
    <TransitionGroup component={null}>
      <CSSTransition timeout={500} className="page" unmountOnExit key={location.key}>
        <Switch location={location}>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} exact={route.exact}>
              {() => (
                <div className="page">
                  <route.component />
                </div>
              )}
            </Route>
          ))}
          <Redirect from="/" to="/cv" exact />
          <Route component={ErrorPage404} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AppRouter;
