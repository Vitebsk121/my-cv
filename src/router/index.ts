import AboutPage from '../containers/Pages/AboutPage/AboutPage';
import CVPage from '../containers/Pages/CVPage/CVPage';
import ErrorPage404 from '../containers/Pages/ErrorPage404/ErrorPage404';
import ProjectPage from '../containers/Pages/ProjectsPage/ProjectPage.tsx/ProjectPage';
import ProjectsPage from '../containers/Pages/ProjectsPage/ProjectsPage';

const routes = [
  { path: '/cv', exact: true, component: CVPage },
  { path: '/about', exact: true, component: AboutPage },
  { path: '/projects', exact: true, component: ProjectsPage },
  { path: '/projects/:id', exact: false, component: ProjectPage },
  { path: '/404', exact: true, component: ErrorPage404 },
];

export default routes;
