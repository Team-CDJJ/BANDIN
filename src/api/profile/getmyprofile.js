import { accessInstance } from '../api';

const getMyProfile = async (accountName) => {
  // const accountname = localStorage.getItem('accountname');
  const res = await accessInstance.get(`/profile/${accountName}`);
  return res.data;
};

export default getMyProfile;
