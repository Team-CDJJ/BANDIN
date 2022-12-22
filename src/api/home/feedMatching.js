import { accessInstance } from '../api';

const feedMatching = async (formData) => {
  try {
    const res = await accessInstance.get('/post/feed', formData);
    return res.data;
  } catch (error) {
    console.log(error);
    return '';
  }
};

export default feedMatching;
