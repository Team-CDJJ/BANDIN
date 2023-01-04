import { instance } from '../api';

export const postEmailValid = async (formData) => {
  const res = await instance.post('/user/emailvalid', formData);
  return res.data;
};

export const postAccountNameValid = async (formData) => {
  const res = await instance.post('/user/accountnamevalid', formData);
  return res.data;
};
