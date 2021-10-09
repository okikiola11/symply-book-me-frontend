import 'react-alice-carousel/lib/alice-carousel.css';
import React, { useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Lawyer from '../../components/Lawyers/Lawyers';
// import './Lawyers.css';
import { fetchLawyers } from '../../Redux/actions';
import { fetchAllLawyers } from '../../api';

const Lawyers = () => {
  const dispatch = useDispatch();
  const lawyers = useSelector((state) => state.lawyers.lawyers);

  useEffect(() => {
    const lawyer = async () => {
      const res = await fetchAllLawyers();
      dispatch(fetchLawyers(res));
    };
    lawyer();
  }, []);

  const resp = {
    0: { items: 1 },
    750: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <>
      {lawyers.length ? (
        <section className="content">
          <div className="text-center docs-title">
            <h2 className="font-weight-bold">OUR LAWYERS</h2>
            <p>Please select a lawyer to book an appointment</p>
            <p>...........................</p>
          </div>
          <div>
            <AliceCarousel
              responsive={resp}
              autoPlayInterval={3200}
              autoPlayDirection="ltr"
              autoPlay
              fadeOutAnimation
              mouseTrackingEnabled
              disableAutoPlayOnAction
              dotsDisabled
              infinite
            >
              {lawyers.map((lawyer) => (
                <Link to={`/lawyers/${lawyer.id}`} key={lawyer.id}>
                  <div>
                    <Lawyer lawyer={lawyer} />
                  </div>
                </Link>
              ))}
            </AliceCarousel>
          </div>
        </section>
      ) : (
        <section className="content text-center">
          <h4>Loading lawyers...</h4>
        </section>
      )}
    </>
  );
};

export default Lawyers;
