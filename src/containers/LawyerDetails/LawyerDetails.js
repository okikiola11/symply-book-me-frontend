/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { fetchALawyer, bookAppointment } from '../../api';
import { setAppointment } from '../../Redux/actions/index';
import styles from './LawyerDetails.module.css';
import Sidebar from '../Sidebar/Sidebar';

const LawyerDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { lawyer_id } = useParams();
  const user = useSelector((state) => state.user);
  const [lawyer, setLawyer] = useState(null);
  const [data, setData] = useState({
    lawyer_name: '',
    city: '',
    email: '',
    lawyer_id: '',
    user_id: '',
    date: '',
  });

  const handleChange = (e) => {
    setData({
      [e.target.name]: e.target.value,
      lawyer_name: lawyer.name,
      city: lawyer.location,
      email: user.username,
      lawyer_id: lawyer.id,
      user_id: user.id,
    });
  };

  useEffect(() => {
    const id = lawyer_id;
    fetchALawyer(id, setLawyer);
  }, []);

  const handleAppointments = () => {
    history.push('/appointments');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const value = bookAppointment(data);
    dispatch(setAppointment(value));
    handleAppointments();
    setData({
      lawyer_name: '',
      city: '',
      email: '',
      lawyer_id: '',
      user_id: '',
      date: '',
    });
  };

  const today = moment().format('YYYY-MM-DDThh:mm');

  const preventDrag = (e) => e.preventDefault();
  return (
    <>
      <Sidebar />
      {lawyer ? (
        <section className="content">
          <div className="text-center row" onDragStart={preventDrag}>
            <div className={`${styles.imgContainer} col-md-8`}>
              <img src={lawyer.image} alt={lawyer.name} />
            </div>
            <div className={`${styles.leftNav} col-md-4`}>
              <h3 className={`${styles.name} font-weight-bold`}>{lawyer.name}</h3>
              <p>{lawyer.speciality}</p>
              <div>
                <section className="modal-main text-center">
                  <form data-testid="form" onSubmit={handleSubmit}>
                    <h5 data-testid="title" className="text-center appoint-title pt-3">BOOK AN APPOINTMENT</h5>
                    <div className="form-group m-0">
                      <label htmlFor="lawyer_id">
                        <input type="text" name="lawyer_id" id="lawyer_id" className="form-control" value={lawyer.id} readOnly hidden />
                      </label>
                    </div>
                    <div className="form-group m-0">
                      <label htmlFor="user_id">
                        <input type="text" name="user_id" id="user_id" className="form-control" value={user.id} readOnly hidden />
                      </label>
                    </div>
                    <div className="form-group">
                      <label htmlFor="lawyer_name">
                        Lawyer&apos;s Name
                        <input type="text" name="lawyer_name" id="lawyer_name" className="form-control" value={lawyer.name} readOnly />
                      </label>
                    </div>
                    <div className="form-group">
                      <label htmlFor="date">
                        Date
                        <input
                          type="datetime-local"
                          name="date"
                          id="date"
                          className="form-control"
                          required
                          onChange={handleChange}
                          min={today}
                        />
                      </label>
                    </div>
                    <div className="form-group">
                      <label htmlFor="city">
                        City
                        <input type="text" name="city" id="city" className="form-control" value={lawyer.location} readOnly />
                      </label>
                    </div>
                    <div className="form-group">
                      <label htmlFor="username">
                        <input type="text" name="username" id="username" className="form-control" value={user.username} readOnly hidden />
                      </label>
                    </div>
                    <button type="submit" className={`${styles.submit} p-0 m-0 text-center`}>Submit</button>
                  </form>
                </section>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="text-center content">
          <h4>Loading lawyer&apos;s details...</h4>
        </section>
      )}
    </>
  );
};

LawyerDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      lawyer_id: PropTypes.string,
    }),
  }).isRequired,
};

export default LawyerDetails;
