import { accessInstance } from '../api';

const getMyInfo = async () => {
  const res = await accessInstance.get(`/user/myinfo`);
  return res.data.user;
};

export default getMyInfo;
