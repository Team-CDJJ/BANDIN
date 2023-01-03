import { accessInstance } from '../api';

const putModifiedData = async (productId, formData) => {
  const res = await accessInstance.put(`/product/${productId}`, formData);
  return res.data;
};
export default putModifiedData;
