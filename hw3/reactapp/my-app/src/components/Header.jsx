import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
<nav className="navbar navbar-expand-lg bg-primary p-3">
  <h1 className="navbar-brand text-white">GOT GETTER</h1>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
            <NavLink className="nav-item nav-link text-white mr-2" to="/" > Home </NavLink>
            <NavLink className="nav-item nav-link text-white mr-2" to="/search" > Search </NavLink>
            <NavLink className="nav-item nav-link text-white mr-2" to="/houses" > Houses </NavLink>
        </div>
    </div>
    </nav>
  );
};

export default Header;

