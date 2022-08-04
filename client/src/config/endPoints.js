const { REACT_APP_HOST: host } = process.env;

export const signUp = () => `/auth/signup`;
export const signIn = () => `/auth/signin`;
export const signOut = () => `/auth/signout`;
export const checkAuth = () => `/auth/check`;

export const getAllUsers = () => `/users`;
export const editUser = (id) => `/users/${id}`;
export const getUser = (id) => `/users/${id}`;
