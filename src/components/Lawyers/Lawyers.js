/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Lawyer.module.css';

const Lawyer = ({ lawyer }) => {
  const { name, image, specialty } = lawyer;
  // const CLOUD_NAME = process.env.REACT_APP_CLOUD_NAME;
  const baseImg = `https://res.cloudinary.com/${process.env.REACT_APP_CLOUD_NAME}/image/upload/v1633465669/symply_book_me/`;

  const preventDrag = (e) => e.preventDefault();

  return (
    <div className={`${styles.container} text-center`} onDragStart={preventDrag}>
      <div className={styles.imgContainer}>
        <img src={`${baseImg}${image?.id}`} alt={name} />
      </div>
      <h5 className={`${styles.name} font-weight-bold`}>{name}</h5>
      <p className={styles.dots}>...........................</p>
      <p className={styles.specialty}>{specialty}</p>
      <p className={`${styles.docIcons} d-flex justify-content-center`}>
        <img src="https://img.icons8.com/dotty/50/A6A6A6/facebook-circled.png" alt="facebook" />
        <img src="https://img.icons8.com/dotty/50/A6A6A6/twitter-circled.png" alt="twitter" />
        <img src="https://img.icons8.com/dotty/50/A6A6A6/google-plus.png" alt="google" />
      </p>
    </div>
  );
};

Lawyer.propTypes = {
  lawyer: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.instanceOf(Object),
    specialty: PropTypes.string,
  }).isRequired,
};

export default Lawyer;
