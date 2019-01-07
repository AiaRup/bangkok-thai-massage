import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = ({ transperant }) => {
  const classes = transperant
    ? 'nav navbar navbar-expand-md transperant'
    : 'nav navbar navbar-expand-md black-nav';
  return (
    <nav className={classes}>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navForCollapseMenu"
        aria-controls="navForCollapseMenu"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <i className="fa fa-bars hamburger" aria-hidden="true" />
      </button>
      <div
        className="navbar-collapse collapse justify-content-between align-items-center w-100"
        id="navForCollapseMenu">
        <ul className="navbar-nav mx-auto text-center align-items-center">
          <li className="nav-item mx-2">
            <NavLink
              className="nav-link"
              activeClassName="activeLink"
              to="/Gallery">
              גלריה
            </NavLink>
          </li>
          <li className="nav-item mx-2">
            <NavLink
              className="nav-link"
              activeClassName="activeLink"
              to="/Treatments">
              הטיפולים שלנו
            </NavLink>
          </li>
          <li className="nav-item mx-2">
            <NavLink
              className="nav-link"
              activeClassName="activeLink"
              to="/Contact">
              צרו קשר
            </NavLink>
          </li>
          <li className="nav-item mx-2">
            <NavLink
              className="nav-link"
              activeClassName="activeLink"
              to="/About">
              אודותינו
            </NavLink>
          </li>
        </ul>
        <ul className="nav navbar-nav flex-row justify-content-center flex-nowrap">
          <li className="nav-item mr-2" style={{ lineHeight: '40px' }}>
            <a href="tel:+9723-7448862" className="nav-link">
              03-7448862
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
