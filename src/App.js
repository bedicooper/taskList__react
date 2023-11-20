import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navigation from './common/Navigation';
import { MainContainer } from './common/Main/MainContainer';
import TasksPage from './features/tasks/TasksPage';
import TaskPage from './features/tasks/TaskPage';
import AuthorPage from './features/author/AuthorPage';

function App() {
  return (
    <HashRouter>
      <Navigation />

      <MainContainer>
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
      </MainContainer>
    </HashRouter>
  )
}

export default App;