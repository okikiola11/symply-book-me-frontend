import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

import './HomePage.css';

const HomePage = () => (
  <div className="homepage">
    <nav className="d-flex px-5 justify-content-between align-items-center homepage__nav">
      <div className="container-fluid bg-color">
        <Link className="logo" to="/">SYMPLY BOOK ME</Link>
      </div>
      <div className="d-flex homepage-links">
        <Link className="mr-4 btn btn-info" to="/signup">Register</Link>
        <Link className="btn btn-info" to="/signin">Login</Link>
      </div>
    </nav>
    <main className="px-5 d-flex justify-content-start align-items-center homepage__main">
      <div className="homepage__welcome_text">
        <h1>Book a Lawyer for your affairs today</h1>
        <Link className="btn btn-primary btn-lg" to="/signup">Register</Link>
      </div>
    </main>
    <Footer />
  </div>
);

export default HomePage;
