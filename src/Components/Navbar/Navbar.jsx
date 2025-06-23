import React from 'react';
import Login from '../Login/Login';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand fw-bold"><Link to='/'>ShopSphere</Link></a>

        {/* Toggler for mobile */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible nav content */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          {/* Left nav links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" ><Link to='/'>Home</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link"><Link to='/products'>Shop</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link"><Link to='/mens'>Men</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link"><Link to='/women'>Women</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link"><Link to='/cart'>Cart</Link></a>
            </li>
          </ul>

          {/* Search bar */}
          <form className="d-flex me-3" role="search">
            <input className="form-control me-2" type="search" placeholder="Search products" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>

          {/* Login dropdown */}
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Account
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><a className="dropdown-item" href="/login">Login</a></li>
                <li><a className="dropdown-item" href="#">Register</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">My Profile</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;