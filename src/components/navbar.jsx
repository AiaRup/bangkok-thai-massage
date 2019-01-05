import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo-bm.jpg';

class Navbar extends Component {
  render() {
    return (
      <nav className="nav navbar navbar-expand-md bg-light">
        <span className="navbar-brand">
          <NavLink className="navbar-brand" to="/#banner">
            <img src={logo} width="50px" height="70px" alt="" />
          </NavLink>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navForCollapseMenu"
          aria-controls="navForCollapseMenu"
          aria-expanded="false"
          aria-label="Toggle navigation">
          {/* <span className="navbar-toggler-icon" /> */}
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
                אודות
              </NavLink>
            </li>
          </ul>
          <ul className="nav navbar-nav flex-row justify-content-center flex-nowrap">
            <li className="nav-item mr-2" style={{ lineHeight: '40px' }}>
              <a href="tel:+9723-7448862" className="nav-link">
                03-7448862
              </a>
            </li>
            <li className="nav-item" style={{ lineHeight: '40px' }}>
              <a
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/BangkokThaiMassageTLV/">
                <i className="fa fa-facebook mr-1" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
