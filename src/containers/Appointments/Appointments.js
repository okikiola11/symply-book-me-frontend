import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Appointment from '../../components/Appointment/Appointment';
import Sidebar from '../Sidebar/Sidebar';
import { fetchAppointments, deleteAppointments } from '../../api';
import { getAppointments, destroyAppointments } from '../../Redux/actions';

const Appointments = () => {
  const dispatch = useDispatch();
  const appointments = useSelector((state) => state.appointments);
  // const [isLoaded, setIsLoaded] = useState(null);

  useEffect(() => {
    const getAllAppointments = async () => {
      if (localStorage.getItem('token')) {
        const value = await fetchAppointments();
        dispatch(getAppointments(value));
      }
    };
    getAllAppointments();
    // if (appointments?.length > 0) {
    //   setIsLoaded(true);
    // }
    // return () => {
    //   setIsLoaded(false);
    // };
  }, []);

  const handleDeleteAppointment = async (e) => {
    const { id } = e.target.dataset;
    const action = await deleteAppointments(id);
    dispatch(destroyAppointments(action));
  };

  return (
    <>
      <Sidebar />
      {appointments?.length ? (
        <section className="content">
          <h2 className="font-weight-bold text-center pb-5">APPOINTMENTS</h2>
          <div className="table-responsive">
            <table className="container table table-striped">
              <thead>
                <tr>
                  <th>Lawyer&apos;s Name</th>
                  <th>Email</th>
                  <th>Date</th>
                  <th>City</th>
                  <th>Cancel Appointment</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment) => (
                  <Appointment
                    key={appointment.id}
                    appointment={appointment}
                    handleClick={handleDeleteAppointment}
                    dataId={appointment?.id}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : (
        <section className="content text-center">
          <h4 className="py-5 font-weight-bold  mt-5">No appointments yet!</h4>
        </section>
      )}
    </>
  );
};

export default Appointments;
