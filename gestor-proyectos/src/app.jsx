import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import ProjectsPage from './pages/Projects';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <PrivateRoute path="/projects" component={ProjectsPage} />
        {/* Otras rutas */}
      </Switch>
    </Router>
  );
}

export default App;
