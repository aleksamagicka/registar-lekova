import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/fetch-data',
    requireAuth: false,
    element: <FetchData />
  },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
