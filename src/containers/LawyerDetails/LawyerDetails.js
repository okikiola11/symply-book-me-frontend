/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import dotenv from 'dotenv';
import moment from 'moment';
import { fetchALawyer, bookAppointment } from '../../api';
import { setAppointment } from '../../Redux/actions/index';
import styles from './LawyerDetails.module.css';
import Sidebar from '../Sidebar/Sidebar';

dotenv.config();

const LawyerDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { lawyer_id } = useParams();
  const user = useSelector((state) => state.user);
  const [lawyer, setLawyer] = useState(null);
  const [data, setData] = useState({
    lawyer_name: '',
    location: '',
    email: '',
    specialty: '',
    lawyer_id: '',
    user_id: '',
    appointed_date: '',
  });

  const handleChange = (e) => {
    setData({
      [e.target.name]: e.target.value,
      lawyer_name: lawyer.data.name,
      location: lawyer.data.location,
      email: user.email,
      lawyer_id: lawyer.data.id,
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
    const value = await bookAppointment(data);
    dispatch(setAppointment(value));
    handleAppointments();
    setData({
      lawyer_name: '',
      location: '',
      email: '',
      lawyer_id: '',
      user_id: '',
      date: '',
    });
  };

  const today = moment().format('YYYY-MM-DDThh:mm');

  const preventDrag = (e) => e.preventDefault();
  const CLOUD_NAME = process.env.REACT_APP_CLOUD_NAME;
  const baseImg = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1633465669/symply_book_me/`;
  let imageId = '';
  if (lawyer && lawyer.data) {
    imageId = JSON.parse(lawyer?.data?.image_data).id;
  }
  return (
    <>
      <Sidebar />
      {lawyer ? (
        <section className="content">
          <div className="text-center row" onDragStart={preventDrag}>
            <div className={`${styles.imgContainer} col-md-7`}>
              <img src={`${baseImg}${imageId}`} alt={lawyer.name} />
            </div>
            <div className={`${styles.leftNav} col-md-5`}>
              <h3 className={`${styles.name} font-weight-bold`}>{lawyer.name}</h3>
              <p>{lawyer.data.specialty}</p>
              <div>
                <section className="modal-main text-center">
                  <form data-testid="form" onSubmit={handleSubmit}>
                    <h5 data-testid="title" className="text-center appoint-title pt-3">BOOK AN APPOINTMENT</h5>
                    <div className="form-group m-0">
                      <label htmlFor="lawyer_id">
                        <input type="text" name="lawyer_id" id="lawyer_id" className="form-control" value={lawyer.data.id} readOnly hidden />
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
                        <input type="text" name="lawyer_name" id="lawyer_name" className="form-control" value={lawyer.data.name} readOnly />
                      </label>
                    </div>
                    <div className="form-group">
                      <label htmlFor="date">
                        Date
                        <input
                          type="datetime-local"
                          name="appointed_date"
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
                        <input type="text" name="location" id="city" className="form-control" value={lawyer.data.location} readOnly />
                      </label>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">
                        <input type="text" name="email" id="email" className="form-control" value={user.email} readOnly hidden />
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

export default LawyerDetails;
