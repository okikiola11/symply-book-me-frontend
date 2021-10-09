import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as action from '../Redux/actions/index';
import styles from '../styles/Auth.module.css';
import { userRegistration } from '../api';
import Header from '../components/Header/Header';

const Signup = ({ history }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [isLoaded, setIsLoaded] = useState(null);

  const userObj = {
    user: {},
  };

  const handleSignUp = () => {
    history.push('/lawyers');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const createdUser = await userRegistration(userObj);
    if (Object.keys(createdUser).length > 0) {
      setIsLoaded(true);
      handleSignUp();
      e.target.reset();
      setError('');
      dispatch(action.fetchUser(createdUser));
    } else {
      setError('Email already in use or invalid details');
      e.target.reset();
    }
  };

  useEffect(() => () => {
    setIsLoaded(false);
  }, [isLoaded]);

  const handleChange = (e) => {
    userObj.user = Object.assign(userObj.user, {
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className={styles.container}>
      <Header />

      <div className={`${styles.formContainer} text-center`}>
        <form data-testid="form" onSubmit={handleSubmit}>
          <h3 data-testid="title" className="text-center">Register</h3>
          <h6 className="text-danger">{error}</h6>
          <div className="form-group">
            <label htmlFor="name">
              Name
              <input type="text" name="name" id="name" className="form-control" required onChange={handleChange} />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Email
              <input type="email" name="email" id="email" className="form-control" required onChange={handleChange} />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="password">
              Password
              <input type="password" name="password" id="password" className="form-control" required onChange={handleChange} />
            </label>
          </div>
          <div className={`${styles.spaces}`}>
            <button type="submit" className="btn btn-primary p-0 m-0">Submit</button>
          </div>
          <div>
            Already have an account.
            {' '}
            <Link to="/signin">Sign in here.</Link>
          </div>
        </form>
      </div>
    </section>
  );
};

Signup.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default Signup;
