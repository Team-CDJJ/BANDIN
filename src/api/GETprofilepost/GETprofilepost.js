import { accessInstance } from '../api';

const getProfilePost = async (accountname) => {
  const res = await accessInstance.get(`/post/${accountname}/userpost`);
  return res.data;
};

export default getProfilePost;
