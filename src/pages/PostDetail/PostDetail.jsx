import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getPostDetail from '../../api/post/getPostDetail';
import getPostComments from '../../api/post/getPostComments';
import CommonPost from '../../components/CommonUI/CommonPost/CommonPost';
import TopMainNav from '../../components/CommonUI/Nav/TopMainNav/TopMainNav';
import Comment from '../../components/CommonUI/Comment/Comment';
import { CommentWrapper, PostWrapper } from './styled';
import PostComment from '../../components/modules/PostComment/PostComment';

const postDetail = () => {
  const { postId } = useParams();
  const [postData, setPostData] = useState();
  const [commentData, setCommentData] = useState([]);
  const [comment, setComment] = useState('');
  const [hasInput, setHasInput] = useState(false);

  useEffect(() => {
    getPostComments(postId)
      .then((data) => {
        setCommentData(data.comments);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [comment]);

  useEffect(() => {
    getPostDetail(postId)
      .then((data) => {
        setPostData(data.post);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [hasInput, commentData]);

  return (
    <>
      <TopMainNav />
      <PostWrapper>{postData && <CommonPost post={postData} />}</PostWrapper>
      <CommentWrapper>
        <h2 className='ir'>댓글</h2>
        {commentData.map((comment, idx) => {
          const { author, content, createdAt, id } = comment;
          return (
            <PostComment
              key={idx}
              accountname={author.accountname}
              username={author.username}
              comment={content}
              createdAt={createdAt}
              postId={postId}
              commentId={id}
              setCommentData={setCommentData}
              thumbnail={author.image}
            />
          );
        })}
      </CommentWrapper>
      <Comment
        comment={comment}
        setComment={setComment}
        setHasInput={setHasInput}
        hasInput={hasInput}
      />
    </>
  );
};
export default postDetail;
