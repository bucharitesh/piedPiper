import { MemoryRouter , Route, Switch } from 'react-router-dom';

import { UserProtectedRoutes } from './routes';


function App() {
  return (
    <MemoryRouter>
      <AppRouter />
    </MemoryRouter>
  );
}

function AppRouter() {
 return(
    <Switch>
      {UserProtectedRoutes.map((route: any) => {
          return (
            <Route
              exact
              path={route.path}
              component={route.component}
            />
          )
        }
      )}
    </Switch> 
 )
}

export default App;
