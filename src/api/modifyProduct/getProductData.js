import { accessInstance } from '../api';

const getProductData = async (productId) => {
  const res = await accessInstance.get(`/product/detail/${productId}`);
  return res.data;
};

export default getProductData;
