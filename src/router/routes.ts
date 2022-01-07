import CVPage from '../containers/Pages/CVPage/CVPage';
import ErrorPage404 from '../containers/Pages/ErrorPage404/ErrorPage404';
import ProjectPage from '../containers/Pages/ProjectsPage/ProjectPage.tsx/ProjectPage';
import ProjectsPage from '../containers/Pages/ProjectsPage/ProjectsPage';

const routes = [
  { path: '/', Component: CVPage },
  { path: '/projects', Component: ProjectsPage },
  { path: '/projects/:id', Component: ProjectPage },
  { path: '*', Component: ErrorPage404 },
];

export default routes;
