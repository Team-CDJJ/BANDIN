import { accessInstance } from '../api';

const getSearchUser = async (userInput) => {
  const res = await accessInstance.get(
    `/user/searchuser/?keyword=${userInput}`,
  );
  return res.data;
};

export default getSearchUser;
