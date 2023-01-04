import { accessInstance } from '../api';

const deleteComment = async (postId, commentId) => {
  const res = await accessInstance.delete(
    `/post/${postId}/comments/${commentId}`,
  );
  return res.data;
};

export default deleteComment;
