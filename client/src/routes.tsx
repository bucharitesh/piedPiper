import Dashboard from './pages/Dashboard';

export interface RouteType {
  path: string;
  name: string;
  component: any;
}

export const UserProtectedRoutes: RouteType[] = [
      {
        path: '/', // path
        name: 'Dashboard', // display label
        component: Dashboard, //component
      }
];