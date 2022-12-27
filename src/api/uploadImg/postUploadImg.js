import { imgInstance } from '../api';

// eslint-disable-next-line consistent-return
const postUploadImg = async (formData) => {
  try {
    const res = await imgInstance.post('/image/uploadfile', formData);
    return res.data.filename;
  } catch (error) {
    console.log(error);
  }
};

export default postUploadImg;
