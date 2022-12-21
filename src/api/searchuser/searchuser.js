import { accessInstance } from '../api';

const searchUser = async (formData) => {
  const res = await accessInstance.get(
    `/user/searchuser/?keyword=${''}`,
    formData,
  );
  return res.data;
};

export default searchUser;
