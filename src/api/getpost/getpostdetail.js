import { accessInstance } from '../api';

const getPostDetail = async (postId) => {
  try {
    const res = await accessInstance.get(`/post/${postId}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return '';
  }
};

export default getPostDetail;
