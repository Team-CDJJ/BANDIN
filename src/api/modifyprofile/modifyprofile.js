import { accessInstance } from '../api';

const putModifiedData = async (formData) => {
  const res = await accessInstance.put('/user', formData);
  return res.data.user;
};

export default putModifiedData;
