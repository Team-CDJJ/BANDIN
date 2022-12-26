import { accessInstance } from '../api';

const getPost = async (postId) => {
  const res = await accessInstance.get(`/post/${postId}`);
  return res.data;
};

export default getPost;
