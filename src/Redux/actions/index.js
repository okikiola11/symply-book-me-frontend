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
