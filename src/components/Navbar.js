import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Shaheed Udham Singh Foundation</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Who We Are</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#who">History</a></li>
              <li><a className="dropdown-item" href="#who">Mission</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">What We Do</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#what">Activities</a></li>
              <li><a className="dropdown-item" href="#what">Events</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Media</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#media">Gallery</a></li>
              <li><a className="dropdown-item" href="#media">News</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
