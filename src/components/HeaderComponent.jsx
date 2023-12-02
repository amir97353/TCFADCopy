import React from "react";
import { NavLink } from "react-router-dom";

function HeaderComponent() {
  return (
    <div id="header">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
        <div className="container-fluid">
          <a className="navbar-brand">This Calls For a Drink</a>
          <NavLink className="nav-link navbar-brand" to="/">
            Home
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">{}</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav" style={{ marginLeft: "25em" }}>
              <li className="nav-item active">
                <NavLink className="nav-link navbar-brand" to="/cm">
                  Cocktail Menu
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink className="nav-link navbar-brand" to="/map">
                  Where to find them
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link navbar-brand" to="/contactus">
                  Contact/Feedback
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link navbar-brand" to="/aboutus">
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HeaderComponent;
