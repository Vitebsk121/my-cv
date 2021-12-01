import React from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
          <Redirect to="/404" exact />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AppRouter;

// TODO пофиксить ошибку с несуществующими проектами!
