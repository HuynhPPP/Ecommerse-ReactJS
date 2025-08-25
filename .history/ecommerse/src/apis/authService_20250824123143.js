import axiosClient from './axiosClient';

const register = async (body) => {
  return await axiosClient.post('/register', body);
};
const signIn = async (body) => {
  return await axiosClient.post('/login', body)
}
const getInfo = async () => {
  return await axiosClient.get('/user/info/4d5e7ab5-90b2-48aa-8214-9d0c54c7ee7a')
}

export { register, signIn, getInfo };
