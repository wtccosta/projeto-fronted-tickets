import { Route, Switch } from 'react-router-dom';
import Computer from './Computer';
import Navbar from './Navbar';
import Printer from './Printer';
import System from './System';

import './styles.css';
import InfoPage from './InfoPage';


const PublicOpenForm = () => {

  return (
    <div className="openform-container">
      <Navbar />
       <div className="openform-content">
      <Switch>
        <Route path="/openform/info">
          <InfoPage />
        </Route>
        <Route path="/openform/computer">
          <Computer />
        </Route>
        <Route path="/openform/printer">
          <Printer />
        </Route>
        <Route path="/openform/system">
          <System />
        </Route>
      </Switch>
      </div>
    </div>
  );
};

export default PublicOpenForm;
