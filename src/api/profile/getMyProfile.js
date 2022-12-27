import { accessInstance } from '../api';

const getMyProfile = async (accountname) => {
  const res = await accessInstance.get(`/profile/${accountname}`);
  return res.data.profile;
};

export default getMyProfile;
