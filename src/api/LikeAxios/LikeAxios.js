import { accessInstance } from '../api';

export const likeAxios = async (id) => {
  const res = await accessInstance.post(`/post/${id}/heart`);
  return res.data;
};

export const unlikeAxios = async (id) => {
  const res = await accessInstance.delete(`/post/${id}/unheart`);
  return res.data;
};
