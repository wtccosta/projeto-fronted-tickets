import 'assets/styles/custom.scss';
import { useState } from 'react';
import Routes from 'Routes';
import { AuthContext, AuthContextData } from 'util/AuthContext';

import './App.css';

function App() {
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false,
  });

  return (
    <AuthContext.Provider value={{ authContextData, setAuthContextData }}>
      <Routes />
    </AuthContext.Provider>
  );
}

export default App;