import { accessInstance } from '../api';

const getPostComments = async (postId) => {
  const res = await accessInstance.get(`/post/${postId}/comments`);
  return res.data;
};

export default getPostComments;
