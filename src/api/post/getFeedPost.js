import { accessInstance } from '../api';

const getFeedPost = async () => {
  const res = await accessInstance.get('/post/feed');
  return res.data;
};

export default getFeedPost;
