import { accessInstance } from '../api';

export const likeAxios = async (id, token) => {
  try {
    const res = await accessInstance.post(`/post/${id}/heart`, {});
    return res.data;
  } catch (error) {
    console.log(error);
    return '';
  }
};

export const unlikeAxios = async (formData) => {
  try {
    const res = await accessInstance.delete(
      `/post/${formData}/unheart`,
      formData,
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return '';
  }
};
