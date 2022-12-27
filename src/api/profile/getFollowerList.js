import { accessInstance } from '../api';

const getFollowerList = async (accountName) => {
  const res = await accessInstance.get(`/profile/${accountName}/follower`);
  return res.data;
};

export default getFollowerList;
