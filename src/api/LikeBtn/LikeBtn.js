import { accessInstance } from '../api';

export const likeBtn = async (formData) => {
  const res = await accessInstance.post(`/post/:id/heart`, formData);
  return res.data.post;
};

export const unLikeBtn = async (formData) => {
  const res = await accessInstance.delete(`/post/:id/unheart`, formData);
  return res.data.post;
};
