/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import FormContainer from './FormContainer';
import Form from '../components/Form';

import * as action from '../Redux/actions/index';
import styles from '../styles/Auth.module.css';
import { userRegistration } from '../api';
import Header from '../components/Header/Header';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });
  const [error, setError] = useState('');
  const [isLoaded, setIsLoaded] = useState(null);

  const userObj = {
    user: {},
  };

  const handleSignUp = () => {
    history.push('/lawyers');
  };

  const handleOnSubmit = async (userObj) => {
    console.log(userObj);
    const createdUser = await userRegistration(userObj);
    if (createdUser && Object.keys(createdUser).length > 0) {
      setIsLoaded(true);
      handleSignUp();
      setError('');
      dispatch(action.fetchUser(createdUser));
      toast.success('Please book a lawyers appointment');
    } else {
      setError('Email already in use or invalid details');
      toast.error(error);
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
      <div className={`${styles.formContainer} mt-5`}>
        <FormContainer title="register">
          <Form handleSubmit={handleSubmit(handleOnSubmit)}>
            {/* <h3 data-testid="title" className="text-center">Register</h3> */}
            <h6 className="text-danger">{error}</h6>
            <div className="form-group">
              <span>Name</span>
              <input {...register('name')} type="text" name="name" id="name" className="form-control" required onChange={handleChange} />
              <small className="text-danger">{errors?.name?.message}</small>
            </div>
            <div className="form-group">
              <span>Email address</span>
              <input {...register('email')} type="email" name="email" id="email" className="form-control" required onChange={handleChange} />
              <small className="text-danger">{errors?.email?.message}</small>
            </div>
            <div className="form-group">
              <span>Password</span>
              <input {...register('password')} type="password" name="password" id="password" className="form-control" required onChange={handleChange} />
              <small className="text-danger">{errors?.password?.message}</small>
            </div>
            <div className={`${styles.spaces}`}>
              <button type="submit" className="btn btn-primary p-0 m-0">Submit</button>
            </div>
          </Form>
        </FormContainer>
      </div>
    </section>
  );
};

export default Signup;
