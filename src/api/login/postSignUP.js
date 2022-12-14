import { instance } from '../api';

const postSignUp = async (formData) => {
  const res = await instance.post('/user', formData);
  return res.data;
};

export default postSignUp;
