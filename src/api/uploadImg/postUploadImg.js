import { imgInstance } from '../api';

const postUploadImg = async (formData) => {
  const res = await imgInstance.post('/image/uploadfile', formData);
  return res.data.filename;
};

export default postUploadImg;
