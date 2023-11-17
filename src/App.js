import { HashRouter, NavLink, Switch, Route, Redirect } from 'react-router-dom';
import TasksPage from './features/tasks/TasksPage';
import TaskPage from './features/tasks/TaskPage';
import AuthorPage from './features/author/AuthorPage';

function App() {
  return (
    <HashRouter>
      <nav>
        <li><NavLink activeClassName="" to="/zadania">Zadania</NavLink></li>
        <li><NavLink activeClassName="" to="/autor">O Autorze</NavLink></li>
      </nav>

      <Switch>
        <Route path="/zadania/:id">
          <TaskPage />
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/autor">
          <AuthorPage />
        </Route>
        <Route path="/">
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </HashRouter>
  )
}

export default App;