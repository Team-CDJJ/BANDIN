import { accessInstance } from '../api';

const deleteProductData = async (productId) => {
  const res = await accessInstance.delete(`/product/${productId}`);
  return res.data;
};

export default deleteProductData;
