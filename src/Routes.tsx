import { Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import history from 'util/history';
import Footer from 'components/Footer';
import PublicOpenForm from 'pages/PublicOpenForm';
import TicketConsulter from 'pages/PublicOpenForm/TicketConsulter';

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Redirect from="/" to="/openform/info" exact />
      <Route path="/" exact>
        <Home />
      </Route>
      <Redirect from="/openform" to="/openform/info" exact />
      <Route path="/openform">
        <PublicOpenForm />
      </Route>
      <Route path="/ticket-consulter">
       <TicketConsulter />
      </Route>
    </Switch>
    <Footer />
  </Router>
);

export default Routes;
