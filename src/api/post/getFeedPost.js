import { accessInstance } from '../api';

const getFeedPost = async (formData) => {
  const res = await accessInstance.get('/post/feed', formData);
  return res.data;
};

export default getFeedPost;
