import { accessInstance } from '../api';

const getFollowerList = async (accountName) => {
  const res = await accessInstance.get(
    `/profile/${accountName}/follower?limit=100`,
  );
  return res.data;
};

export default getFollowerList;
