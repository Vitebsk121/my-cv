import './ErrorPage404.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import Game from '../../../Components/Game/Game';
import PageTitleLayout from '../../../Components/HOC/pageTitleLayout';

type ErrorPage404Props = {};

const ErrorPage404: React.FC<ErrorPage404Props> = () => (
  <PageTitleLayout title="404">
    <div className="errorPage404">
      <h1 className="errorPageTitle">404</h1>
      <h3 className="title">
        Извините, такой страницы у меня нет. Вы можете вернуться на
{' '}
        <Link className="navLink colorLink" to="/">
          главную страницу
        </Link>
{' '}
        или немного расслабиться
      </h3>
      <Game />
    </div>
  </PageTitleLayout>
);

export default ErrorPage404;
