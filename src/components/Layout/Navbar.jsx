import React from "react";
import logo from "./logo.png";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark text-light sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={logo}
            alt="Bootstrap"
            className="d-inline-block ms-2"
            width="30"
            height="30"
          />
          <span className="ms-2 text-light">The React News</span>
        </a>
       <button
          className="navbar-toggler align-content-center bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse nav-scroller navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav nav-underline text-center">
              <li className="nav-item">
                <a className="nav-link link-body-emphasis active text-light" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-body-emphasis text-light" href="#">
                  Politics
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-body-emphasis text-light" href="#">
                  Economics
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-body-emphasis text-light" href="#">
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-body-emphasis text-light" href="#">
                  Login
                </a>
              </li>
            </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
