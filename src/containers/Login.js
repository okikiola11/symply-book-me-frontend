/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';
import FormContainer from './FormContainer';
import Form from '../components/Form';
import * as action from '../Redux/actions/index';
import { userLogin } from '../api/index';
import Header from '../components/Header/Header';
import styles from '../styles/Auth.module.css';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const handleOnsubmit = async (userObj) => {
    const { email, password } = userObj;
    try {
      const res = await userLogin({ email, password });
      if (res) {
        dispatch(action.fetchUser(res));
        history.push('/lawyers');
        toast.success(`Welcome back ${res.name}`);
      } else {
        toast.error(res.error);
      }
    } catch (error) {
      toast.error('Invalid email/password');
    }
  };
  return (
    <section className={styles.container}>
      <Header />
      <div className={`${styles.formContainer}`}>
        <FormContainer title="Login">
          <Form handleSubmit={handleSubmit(handleOnsubmit)}>
            <div className="form-group">
              <span>Email address</span>
              <input {...register('email')} type="email" className="form-control" id="email" name="email" />
              <small className="text-danger">{errors?.email?.message}</small>
            </div>
            <div className="form-group">
              <span>Password</span>
              <input {...register('password')} type="password" className="form-control" id="password" name="password" />
              <small className="text-danger">{errors?.password?.message}</small>
            </div>
            <button type="submit" className="btn btn-primary mt-4">Submit</button>
          </Form>
        </FormContainer>
      </div>
    </section>
  );
};

export default Login;
