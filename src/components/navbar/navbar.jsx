import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

class Navbar extends Component {
  state = { menuIsOpen: false };

  toggleMenu = () =>
    this.setState(prevState => ({ menuIsOpen: !prevState.menuIsOpen }));

  render() {
    const { menuIsOpen } = this.state;
    const buttonClass = menuIsOpen ? '' : 'collapsed';
    const navbarMenuClasses = menuIsOpen ? 'show slidedown' : 'slideup';
    const ariaExpended = menuIsOpen ? 'true' : 'false';

    return (
      <nav className="nav navbar navbar-expand-md black-nav">
        <button
          onClick={this.toggleMenu}
          className={`navbar-toggler ${buttonClass}`}
          type="button"
          data-toggle="collapse"
          data-target="#navForCollapseMenu"
          aria-controls="navForCollapseMenu"
          aria-expanded={ariaExpended}
          aria-label="Toggle navigation">
          <span> </span>
          <span> </span>
          <span> </span>
        </button>
        <div
          className={`navbar-collapse collapse justify-content-between align-items-center w-100 ${navbarMenuClasses}`}
          id="navForCollapseMenu">
          <ul
            className="navbar-nav mx-auto text-center align-items-center"
            dir="rtl">
            <li className="nav-item mx-2">
              <NavLink
                onClick={this.toggleMenu}
                className="nav-link"
                activeClassName="activeLink"
                to="/About">
                אודותינו
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                onClick={this.toggleMenu}
                className="nav-link"
                activeClassName="activeLink"
                to="/Treatments">
                הטיפולים שלנו
              </NavLink>
            </li>

            <li className="nav-item mx-2">
              <NavLink
                onClick={this.toggleMenu}
                className="nav-link"
                activeClassName="activeLink"
                to="/Contact">
                צרו קשר
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                onClick={this.toggleMenu}
                className="nav-link"
                activeClassName="activeLink"
                to="/Gallery">
                גלריה
              </NavLink>
            </li>
          </ul>
          <ul className="nav navbar-nav flex-row justify-content-center flex-nowrap">
            <li className="nav-item mr-md-3" style={{ lineHeight: '40px' }}>
              <a href="tel:+9723-7448862" className="nav-link">
                03-7448862
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
