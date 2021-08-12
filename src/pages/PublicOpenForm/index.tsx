import { Route, Switch } from 'react-router-dom';
import Computer from './Computer';
import Printer from './Printer';

import './styles.css';

const PublicOpenForm = () => {

  return (
    <>
    <h3>Olá Teste!</h3>
    <Switch>
    
      <Route path="/teste/doido">
        <h2>Teste</h2>
      </Route>
    </Switch>
    </>
  );
};

export default PublicOpenForm;
