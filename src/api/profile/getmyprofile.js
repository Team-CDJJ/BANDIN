import { accessInstance } from '../api';

const getMyProfile = async (accountName) => {
  const res = await accessInstance.get(`/profile/${accountName}`);
  return res.data.profile;
};

export default getMyProfile;
