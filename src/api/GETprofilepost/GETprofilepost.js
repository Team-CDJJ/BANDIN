import { accessInstance } from '../api';

const profilePost = async (formData) => {
  const userAccountname = localStorage.getItem('accountname');
  try {
    const res = await accessInstance.get(
      `/post/${userAccountname}/userpost`,
      formData,
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return '';
  }
};

export default profilePost;
