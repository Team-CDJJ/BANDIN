import { accessInstance } from '../api';

const searchUser = async (userInput) => {
  const res = await accessInstance.get(
    `/user/searchuser/?keyword=${userInput}`,
  );
  return res.data;
};

export default searchUser;
