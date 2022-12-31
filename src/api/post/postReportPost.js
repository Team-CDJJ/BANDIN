import { accessInstance } from '../api';

const postReportPost = async (postId) => {
  const res = await accessInstance.post(`/post/${postId}/report`);
  return res.data;
};

export default postReportPost;
