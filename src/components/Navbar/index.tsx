import MainImageNav from 'assets/images/main-image-negative.png';
import { Link } from 'react-router-dom';
import './styles.css';


const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary text-white">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/">Abertura de Chamados - STIC</Link>
        </div>
        <div className="main-image-nav">
          <a href="https://www.corumba.ms.gov.br">
            <img src={MainImageNav} alt="logo-pmc" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
