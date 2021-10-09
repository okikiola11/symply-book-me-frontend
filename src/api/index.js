const baseUrl = 'http://localhost:3000/api/v1';

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
  const { user } = await createdUser.json();
  localStorage.setItem('token', user.token);
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