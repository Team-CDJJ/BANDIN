import { accessInstance } from '../api';

const getPostDetail = async (postId) => {
  const res = await accessInstance.get(`/post/${postId}`);
  return res.data;
};

export default getPostDetail;
