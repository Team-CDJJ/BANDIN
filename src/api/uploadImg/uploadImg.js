import { imgInstance } from '../api';

// const postUploadImg = async (formData) => {
//   const res = await imgInstance.post('/user/uploadfile', formData);
//   console.log(formData);
//   return res.data;
// };

const postUploadImg = async (formData) => {
  const res = await imgInstance.post('/user/uploadfile', formData);
  console.log(formData);
  return res.data.filename;
};

export default postUploadImg;
