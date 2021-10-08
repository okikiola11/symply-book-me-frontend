export const fetchUser = (user) => ({
  type: 'LOGIN',
  payload: user,
});

export const destroyUser = () => ({
  type: 'LOGOUT',
});
