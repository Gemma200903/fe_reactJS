import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class HeaderPage extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    to="/ExPhoneCart"
                    className={({ isActive }) => {
                      return isActive ? "nav-link active" : "nav-link";
                    }}
                  >
                    ExPhoneCart
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/ExXemChiTiet"
                    className={({ isActive }) => {
                      return isActive ? "nav-link active" : "nav-link";
                    }}
                  >
                    ExXemChiTiet
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/ProductList"
                    className={({ isActive }) => {
                      return isActive ? "nav-link active" : "nav-link";
                    }}
                  >
                    ProductList
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/ExDemoForm"
                    className={({ isActive }) => {
                      return isActive ? "nav-link active" : "nav-link";
                    }}
                  >
                    ExDemoForm
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
