import { Link } from "react-router-dom";

import "./index.css";

const Header = () => (
  <div className="main-header">
    <nav className="header-container">
      <div className="logo-and-title-container">
        <img
          alt="wave"
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        />
        <h1 className="title">Interview Prep</h1>
      </div>
      <ul className="nav-items-list">
        <li className="link-item">
          <Link className="route-link" to="/InterviewPrep/">
            JavaScript
          </Link>
        </li>
        <li className="link-item">
          <Link className="route-link" to="/Reactjs">
            ReactJS
          </Link>
        </li>
        <li className="link-item">
          <Link className="route-link" to="/html">
            HTML
          </Link>
        </li>
        <li className="link-item">
          <Link className="route-link" to="/css">
            CSS
          </Link>
        </li>
        <li className="link-item jsvspy">
          <Link className="route-link" to="/jsvspy">
            JSvsPY
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;
