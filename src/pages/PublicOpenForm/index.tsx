import { Route, Switch } from 'react-router-dom';
import Computer from './Computer';
import Navbar from './Navbar';
import Printer from './Printer';
import System from './System';

import './styles.css';
import InfoPage from './InfoPage';
import { useContext, useEffect, useState } from 'react';
import { requestBackendLogin } from 'util/requests';
import { saveAuthData } from 'util/storage';
import { AuthContext } from 'util/AuthContext';
import EndMessage from './EndMessage';
import Telephone from './Telephone';
import Infraestructure from './Infraestructure';
import Lgpd from './Lgpd';


const PublicOpenForm = () => {

  const { authContextData, setAuthContextData } = useContext(AuthContext);
  const [ firstTime, setFirstTime ] = useState<boolean>(true);

  useEffect(() => {
    requestBackendLogin().then((response) => {
      saveAuthData(response.data);
      setAuthContextData({
        authenticated: true,
      })
       setFirstTime(false);
    });
  }, [setAuthContextData])

  return (
    <div className="openform-container">
     
      { (authContextData.authenticated )? ( 
      <>
      
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
        <Route path="/openform/phone">
          <Telephone />
        </Route>
        <Route path="/openform/infraestruture">
          <Infraestructure />
        </Route>
        <Route path="/openform/lgpd">
          <Lgpd />
        </Route>
      </Switch>
      </div>
      </>)  : <EndMessage ticketId={authContextData.ticketId ? authContextData.ticketId : null} firstTimeProps={firstTime} />
  }
    </div>
  );
};

export default PublicOpenForm;
