import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
