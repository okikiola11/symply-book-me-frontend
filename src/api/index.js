// const baseUrl = 'http://localhost:3000/api/v1';
const baseUrl = 'https://glacial-chamber-50989.herokuapp.com/api/v1';
// const baseUrl = 'https://admiring-brown-f9346f.netlify.app/api/v1';

export const userRegistration = async (userObj) => {
  const createdUser = await fetch(`${baseUrl}/users`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(userObj),
  });
  console.log(createdUser);
  const { user, token } = createdUser;
  localStorage.setItem('token', token);
  return user;
};

export const userLogin = async (userObj) => {
  const loggedInUser = await fetch(`${baseUrl}/login`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userObj),
  });
  const user = await loggedInUser.json();
  localStorage.setItem('token', user.token);
  return user;
};

export const signOut = async () => {
  const logOut = await fetch(`${baseUrl}/logout`, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  const userLogOut = await logOut.json();
  return userLogOut;
};

export const fetchAllLawyers = async () => {
  const fetchedLawyers = await fetch(`${baseUrl}/lawyers`, {
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  const allLawyers = await fetchedLawyers.json();
  return allLawyers;
};

export const fetchALawyer = async (id, setLawyer) => {
  const getALawyer = await fetch(`${baseUrl}/lawyers/${id}`, {
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  const aLawyer = await getALawyer.json();
  return setLawyer(aLawyer);
};

export const bookAppointment = async (data) => {
  const appointmentBooking = await fetch(`${baseUrl}/appointments`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(data),
  });
  const appointmentCall = await appointmentBooking.json();
  return appointmentCall;
};

export const fetchAppointments = async () => {
  const displayAllAppointment = await fetch(`${baseUrl}/appointments`, {
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  const allAppointments = await displayAllAppointment.json();
  return allAppointments;
};

export const deleteAppointments = async (id) => {
  const deletedAppointed = await fetch(`${baseUrl}/appointments/${id}`, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  const appointment = await deletedAppointed.json();
  return appointment;
};
