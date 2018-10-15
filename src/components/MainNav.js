import React from "react";

function MainNav() {
  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        <li className="main-nav__item">
          <a href="#" className="main-nav__link">
            Home
          </a>
        </li>
        <li className="main-nav__item">
          <a href="#" className="main-nav__link">
            About
          </a>
        </li>
        <li className="main-nav__item">
          <a href="#" className="main-nav__link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default MainNav;
