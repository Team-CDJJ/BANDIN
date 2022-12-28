import { imgInstance } from '../api';

const postUploadImgs = async (formData) => {
  const res = await imgInstance.post('/image/uploadfiles', formData);
  return res.data.filename;
};

export default postUploadImgs;
