import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="d-flex px-5 justify-content-between align-items-center homepage__nav">
    <div className="container-fluid bg-color">
      <Link className="logo" to="/">SYMPLY BOOK ME</Link>
    </div>
  </nav>
);

export default Header;
