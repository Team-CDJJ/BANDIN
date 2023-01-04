import { accessInstance } from '../api';

const postComments = async (postId, content) => {
  const res = await accessInstance.post(`/post/${postId}/comments`, {
    comment: {
      content,
    },
  });
  return res.data;
};

export default postComments;
