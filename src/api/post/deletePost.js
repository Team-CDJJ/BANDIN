import { accessInstance } from '../api';

const deletePost = async (postId) => {
  const res = await accessInstance.delete(`/post/${postId}`);
  return res.data;
};

export default deletePost;
