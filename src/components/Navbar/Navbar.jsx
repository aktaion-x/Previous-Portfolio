import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [activateNavlinks, setActivateNavlinks] = useState(false);
  const handleActivateNavlinks = (e) => {
    e.target.closest('.dropdown').classList.add('active');
    setActivateNavlinks(!activateNavlinks);
    setTimeout(() => {
      e.target.closest('.dropdown').classList.remove('active');
    }, 1000);
  };
  const handleCloseNavlinks = () => {
    setActivateNavlinks(false);
  };
  return (
    <div className="Navbar">
      <nav>
        <Link to="/" className="logo">
          <div className="img">
            <img src={logo} alt="" />
          </div>
          <h2>Ghassan Athamin</h2>
        </Link>
        <ul>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li className="dropdown" onClick={handleActivateNavlinks}>
            <i className="fa-solid fa-bars-staggered"></i>
          </li>
        </ul>
        <div className={activateNavlinks ? 'nav-links active' : 'nav-links'}>
          <ul>
            <li>
              <NavLink onClick={handleCloseNavlinks} to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleCloseNavlinks} to="/projects">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleCloseNavlinks} to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
