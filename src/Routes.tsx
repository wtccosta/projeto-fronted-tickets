import { Router, Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import history from 'util/history';
import Footer from 'components/Footer';
import PublicOpenForm from 'pages/PublicOpenForm';

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Redirect from="/openform" to="/openform/info" exact />
      <Route path="/openform">
        <PublicOpenForm />
      </Route>
    </Switch>
    <Footer />
  </Router>
);

export default Routes;
