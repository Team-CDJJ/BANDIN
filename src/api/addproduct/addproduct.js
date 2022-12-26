import { accessInstance } from '../api';

const postProduct = async (formData) => {
  const res = await accessInstance.post('/product', formData);
  return res.data;
};
export default postProduct;
