import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import styles from './HomePage.module.css';

const HomePage = () => {
  const currentUser = localStorage.getItem('token');
  if (currentUser) { return <Redirect to="/lawyers" />; }

  return (
    <section className={styles.homeContainer}>
      <h1>Symply book me</h1>
      <Link to="/login" className="text-white">
        <button type="button">
          Log In
        </button>
      </Link>
    </section>
  );
};

export default HomePage;
