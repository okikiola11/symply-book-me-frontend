/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styles from './Appointment.module.css';

const Appointment = ({ appointment, handleClick, dataId }) => {
  const {
    lawyer_name, email, appointed_date, location,
  } = appointment;

  return (
    <tr>
      <td>{lawyer_name}</td>
      <td>{email}</td>
      <td>{moment.utc(appointed_date).format('LLL')}</td>
      <td>{location}</td>
      <td><button type="button" data-id={dataId} className={styles.button} onClick={handleClick}>Delete</button></td>
    </tr>
  );
};

Appointment.propTypes = {
  appointment: PropTypes.shape({
    lawyer_name: PropTypes.string,
    email: PropTypes.string,
    appointed_date: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
  dataId: PropTypes.number.isRequired,
};

export default Appointment;
