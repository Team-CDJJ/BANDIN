import { accessInstance } from '../api';

const getProductList = async (accountname) => {
  const res = await accessInstance.get(`/product/${accountname}`);
  return res.data;
};

export default getProductList;
