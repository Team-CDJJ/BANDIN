import { accessInstance } from '../api';

const reportComment = async (postId, commentId) => {
  const res = await accessInstance.post(
    `/post/${postId}/comments/${commentId}/report`,
  );
  return res.data;
};

export default reportComment;
