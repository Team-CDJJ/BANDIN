import { accessInstance } from '../api';

const postAddProduct = async (formData) => {
  const res = await accessInstance.post('/product', formData);
  return res.data;
};
export default postAddProduct;
