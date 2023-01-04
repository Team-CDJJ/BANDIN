import { instance } from '../api';

const postUserLogin = async (formData) => {
  try {
    const res = await instance.post('/user/login', formData);
    // localStorage.setItem('token', res.data.user.token);
    return res.data;
  } catch (error) {
    console.log(error);
    return '';
  }
};

export default postUserLogin;
