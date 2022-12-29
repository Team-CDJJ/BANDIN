import { accessInstance } from '../api';

const putEditPost = async (postId, formData) => {
  const res = await accessInstance.put(`/post/${postId}`, formData);
  return res.data;
};

export default putEditPost;
