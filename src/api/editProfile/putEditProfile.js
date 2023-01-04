import { accessInstance } from '../api';

const putEditProfile = async (formData) => {
  const res = await accessInstance.put('/user', formData);
  return res.data.user;
};

export default putEditProfile;
