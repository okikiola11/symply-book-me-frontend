export const fetchUser = (user) => ({
  type: 'LOGIN',
  payload: user,
});

export const destroyUser = () => ({
  type: 'LOGOUT',
});

export const fetchLawyers = (lawyers) => ({
  type: 'FETCH_LAWYERS',
  payload: lawyers,
});

export const fetchALawyers = (lawyer) => ({
  type: 'FETCH_LAWYERS',
  payload: lawyer,
});

export const setAppointment = (appoint) => ({
  type: 'SET_APPOINTMENT',
  payload: appoint,
});

export const getAppointments = (appoints) => ({
  type: 'GET_APPOINTMENT',
  payload: appoints,
});

export const destroyAppointments = (appoints) => ({
  type: 'DEL_APPOINTMENT',
  payload: appoints,
});
