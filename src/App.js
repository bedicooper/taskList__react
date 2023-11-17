import { HashRouter, NavLink, Switch, Route, Redirect } from 'react-router-dom';
import Tasks from "./features/tasks/Tasks";
import Author from './features/author/Author';

function App() {
  return (
    <HashRouter>
      <nav>
        <li><NavLink activeClassName="" to="/zadania">Zadania</NavLink></li>
        <li><NavLink activeClassName="" to="/autor">O Autorze</NavLink></li>
      </nav>

      <Switch>
        <Route path="/zadania">
          <Tasks />
        </Route>
        <Route path="/autor">
          <Author />
        </Route>
        <Route path="/">
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </HashRouter>
  )
}

export default App;