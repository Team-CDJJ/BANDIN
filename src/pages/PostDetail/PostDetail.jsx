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
  const [commentData, setCommentData] = useState();
  const [comment, setComment] = useState('');
  const [hasInput, setHasInput] = useState(false);

  useEffect(() => {
    getPostComments(postId)
      .then((data) => {
        setCommentData(data.comments);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [comment, hasInput]);

  useEffect(() => {
    getPostDetail(postId)
      .then((data) => {
        setPostData(data.post);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [hasInput, commentData]);
  console.log(postData);

  return (
    <>
      <TopMainNav />
      <PostWrapper>{postData && <CommonPost post={postData} />}</PostWrapper>
      <CommentWrapper>
        <h2 className='ir'>댓글</h2>
        {/* commentData map 돌려서 띄워주시면 됩니다. */}
        {/* <PostComment></PostComment> */}
        {commentData.map((comment) => {
          const { author, content, createdAt, id } = comment;
          return (
            <PostComment
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
      {/* input에 입력 후 게시 버튼 클릭 시 실시간으로 댓글 정보 업데이트 되게 해 주세요 */}
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
