import AboutPage from '../containers/Pages/AboutPage/AboutPage';
import CVPage from '../containers/Pages/CVPage/CVPage';
import ProjectsPage from '../containers/Pages/ProjectsPage/ProjectsPage';

const routes = [
  { path: '/cv', exact: true, component: CVPage },
  { path: '/about', exact: true, component: AboutPage },
  { path: '/projects', exact: true, component: ProjectsPage },
  // { path: '/projects/:id', exact: true, component: ProjectIDPage },
];

export default routes;
