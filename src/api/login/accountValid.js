import { instance } from '../api';

export const emailValid = async (formData) => {
  const res = await instance.post('/user/emailvalid', formData);
  return res.data;
};

export const accountNameValid = async (formData) => {
  const res = await instance.post('/user/accountnamevalid', formData);
  return res.data;
};
