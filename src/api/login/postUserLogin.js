import { instance } from '../api';

const postUserLogin = async (formData) => {
  const res = await instance.post('/user/login', formData);
  return res.data;
};

export default postUserLogin;
