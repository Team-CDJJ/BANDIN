import { accessInstance } from '../api';

const getFollowingList = async (accountName) => {
  const res = await accessInstance.get(`/profile/${accountName}/following`);
  return res.data;
};

export default getFollowingList;
