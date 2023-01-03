import { accessInstance } from '../api';

const getFollowingList = async (accountName) => {
  const res = await accessInstance.get(
    `/profile/${accountName}/following?limit=100`,
  );
  return res.data;
};

export default getFollowingList;
