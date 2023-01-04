import { accessInstance } from '../api';

const postUpload = async (formData) => {
  const res = await accessInstance.post(`/post`, formData);
  return res.data;
};

export default postUpload;
