import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { About } from "./components/About";

const AppRoutes = [
  {
    index: true,
    element: <FetchData />
  },
  {
    path: '/fetch-data',
    requireAuth: false,
    element: <FetchData />
    },
    {
        path: '/about',
        requireAuth: false,
        element: <About />
    },
    ...ApiAuthorzationRoutes
];

export default AppRoutes;
