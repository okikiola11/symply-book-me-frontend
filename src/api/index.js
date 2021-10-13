/* eslint-disable no-param-reassign */
import axios from 'axios';

// const baseURL = 'http://localhost:3000/api/v1';
const baseURL = 'https://glacial-chamber-50989.herokuapp.com/api/v1';

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
},
(error) => Promise.reject(error));

export const userRegistration = async (userObj) => {
  const { data } = await axiosInstance.post('/users', userObj);
  const { user, token } = data;
  localStorage.setItem('token', token);
  return user;
};

export const userLogin = async (userObj) => {
  const { data } = await axiosInstance.post('/login', userObj);
  const { user } = data;
  localStorage.setItem('token', user.token);
  return user;
};

export const signOut = async () => {
  const { data } = await axiosInstance.delete('/logout');
  return data;
};

export const fetchAllLawyers = async () => {
  const { data } = await axiosInstance.get('/lawyers');
  return data;
};

export const fetchALawyer = async (id, setLawyer) => {
  const { data } = await axiosInstance.get(`/lawyers/${id}`);
  return setLawyer(data);
};

export const bookAppointment = async (datas) => {
  const { data } = await axiosInstance.post('appointments', datas);
  return data;
};

export const fetchAppointments = async () => {
  const { data } = await axiosInstance.get('appointments');
  return data;
};

export const deleteAppointments = async (id) => {
  const { data } = await axiosInstance.delete(`appointments/${id}`);
  return data;
};
