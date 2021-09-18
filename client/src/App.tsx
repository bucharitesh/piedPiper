import { MemoryRouter , Route, Switch } from 'react-router-dom';

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
      <Route exact path='/'>
        home
      </Route> 
      <Route exact path='/about'>
        About
      </Route> 
    </Switch> 
 )
}

export default App;
