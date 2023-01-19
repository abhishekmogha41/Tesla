import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <header>
        <a href="/">
          <img src="images/logo.svg" alt="Logo" className="tesla_logo" />
        </a>
        <nav>
          <ul>
            <li>
              <a href="/">Model 3</a>
            </li>
            <li>
              <a href="/">Model S</a>
            </li>
            <li>
              <a href="/">Model X</a>
            </li>
            <li>
              <a href="/">Solar Roof</a>
            </li>
            <li>
              <a href="/">Solar Panels</a>
            </li>
          </ul>
        </nav>
        <div className="slideMenu">
          <nav>
            <ul>
              <li>
                <a href="/">Shop</a>
              </li>
              <li>
                <a href="/">Account</a>
              </li>
              <li>
                <a href="/">Menu</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
