import MainImageNav from 'assets/images/main-image-negative.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
  const [isAuthenticated] = useState<boolean>(false);
  return (
    <nav className="navbar navbar-dark bg-primary text-white">
      <div className="nav-container">
        <div className="nav-brand">
          {isAuthenticated ? (
            <Link to="/dashboard">Sistema de Chamados</Link>
          ) : (
            <Link to="/openform">Abertura de Chamados</Link>
          )}
          <div className="ticket-consulter-link">
            <Link to="/ticket-consulter" className="btn btn-info text-white">
              Consultar Chamado
            </Link>
          </div>
        </div>

        <div className="main-image-nav">
          <Link to="/">
            <img src={MainImageNav} alt="logo-pmc" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
