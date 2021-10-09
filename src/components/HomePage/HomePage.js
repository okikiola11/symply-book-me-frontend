import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer';

import './HomePage.css';

const HomePage = () => (
  <div className="homepage">
    <Header />
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
