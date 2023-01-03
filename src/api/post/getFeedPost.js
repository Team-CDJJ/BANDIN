import { accessInstance } from '../api';

const getFeedPost = async ({ numFeed }) => {
  const res = await accessInstance.get(`/post/feed/?limit=10&skip=${numFeed}`);
  return res.data;
};

export default getFeedPost;
