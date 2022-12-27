import { accessInstance } from '../api';

export const follow = async (accountName) => {
  const res = await accessInstance.post(`/profile/${accountName}/follow`);
  return res.data;
};

export const unfollow = async (accountName) => {
  const res = await accessInstance.delete(`/profile/${accountName}/unfollow`);
  return res.data;
};
