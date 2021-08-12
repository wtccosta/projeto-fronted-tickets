import { Router, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import history from 'util/history';
import Footer from 'components/Footer';
import Computer from 'pages/PublicOpenForm/Computer';
import Printer from 'pages/PublicOpenForm/Printer';
import System from 'pages/PublicOpenForm/System';
import PublicOpenForm from 'pages/PublicOpenForm';

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/computador" exact>
        <Computer />
      </Route>
      <Route path="/impressora" exact>
        <Printer />
      </Route>
      <Route path="/sistemas" exact>
        <System />
      </Route>
      
      <Route path="/teste" exact>
        <PublicOpenForm />
      </Route>
    </Switch>
    <Footer />
  </Router>
);

export default Routes;
