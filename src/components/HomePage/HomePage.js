import React from 'react';
import { Link } from 'react-router-dom';
import BgImage from '../../assets/lawyers-bg.jpeg';
import Footer from '../Footer';

import './HomePage.css';

const HomePage = () => (
  <div className="homepage">
    <nav className="d-flex px-5 justify-content-between align-items-center homepage__nav">
      <Link className="logo" to="/">SYMPLY BOOK ME</Link>
      <div className="d-flex">
        <Link className="mr-4 btn btn-info" to="/signup">Register</Link>
        <Link className="btn btn-info" to="/signin">Login</Link>
      </div>
    </nav>
    <main className="px-5 d-flex justify-content-start align-items-center homepage__main" style={{ backgroundImage: `url(${BgImage})` }}>
      <div className="homepage__welcome_text">
        <h1>We Never Stop! We never falter!</h1>
        <h3>Book a Lawyer for your affairs today</h3>
        <Link className="btn btn-primary btn-lg" to="/signup">Register</Link>
      </div>
    </main>
    <Footer />
  </div>
);

export default HomePage;
