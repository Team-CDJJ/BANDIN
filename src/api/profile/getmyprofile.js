import { accessInstance } from '../api';

const getMyProfile = async (formData) => {
  const accountname = localStorage.getItem('accountname');
  const res = await accessInstance.get(`/profile/${accountname}`, formData);
  return res.data.profile;
};

export default getMyProfile;
