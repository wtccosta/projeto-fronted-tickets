import { Link, NavLink } from 'react-router-dom';
import './styles.css';

const Navbar = () =>{
    return (
      <nav className="admin-nav-container">
        <ul>
          <li>
            <NavLink to="/openform/computer" className="admin-nav-item">
              <p>Computador</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/openform/printer" className="admin-nav-item">
              <p>Impressora</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/openform/system" className="admin-nav-item">
              <p>Sistemas</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/openform/data" className="admin-nav-item">
              <p>Telefonia</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/openform/infraestructure" className="admin-nav-item">
              <p>Infraestrutura</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    );
}
export default Navbar;