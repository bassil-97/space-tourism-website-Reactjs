import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

import logo from '../../assets/shared/logo.svg';

export default function Navbar() {
  return( 
    <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
                <Link to="/home" className="nav-link">Home</Link>
                <Link to="/destination" className="nav-link">destination</Link>
                <Link to="/crew" className="nav-link">crew</Link>
                <Link to="/technology" className="nav-link">technology</Link>
            </div>
        </div>
    </nav>
  );
}
