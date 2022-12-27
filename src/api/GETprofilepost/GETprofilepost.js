import { accessInstance } from '../api';

const profilePost = async (accountName) => {
  const res = await accessInstance.get(`/post/${accountName}/userpost`);
  return res.data;
};

export default profilePost;
