import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="d-flex px-5 justify-content-between align-items-center homepage__nav">
    <div className="container-fluid bg-color">
      <Link className="logo" to="/">SYMPLY BOOK ME</Link>
    </div>
    <div className="d-flex homepage-links">
      <Link className="mr-4 btn btn-info" to="/signup">Register</Link>
      <Link className="btn btn-info" to="/signin">Login</Link>
    </div>
  </nav>
);

export default Header;
