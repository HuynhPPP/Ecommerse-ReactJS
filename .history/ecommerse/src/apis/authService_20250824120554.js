import axiosClient from './axiosClient';

const register = async (body) => {
  return await axiosClient.post('/register', body);
};
const signIn = async (body) => {
  return await axiosClient.post('/login', body)
}
const getInfo = async () => {
  return await axiosClient.get('/login')
}

export { register, signIn };
