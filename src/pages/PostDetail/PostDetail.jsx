import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import getPostDetail from '../../api/post/getPostDetail';
import getPostComments from '../../api/post/getPostComments';
import CommonPost from '../../components/CommonUI/CommonPost/CommonPost';
import TopBasicNav from '../../components/CommonUI/Nav/TopBasicNav/TopBasicNav';
import Comment from '../../components/CommonUI/Comment/Comment';
import { CommentWrapper, PostWrapper } from './styled';
import PostComment from '../../components/modules/PostComment/PostComment';
import { accountNameValue } from '../../atoms';

const postDetail = () => {
  const { postId } = useParams();
  const [postData, setPostData] = useState();
  const [commentData, setCommentData] = useState([]);
  const [comment, setComment] = useState('');
  const [hasInput, setHasInput] = useState(false);
  const [isMyPost, setIsMyPost] = useState(false);
  const [author, setAuthor] = useState('');
  const accountname = useRecoilValue(accountNameValue);

  useEffect(() => {
    setIsMyPost(accountname === author);
  }, [author]);

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
        console.log(data);
        setPostData(data.post);
        setAuthor(data.post.author.accountname);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [hasInput, commentData]);

  return (
    <>
      <TopBasicNav />
      <PostWrapper>
        {postData && <CommonPost post={postData} isMyPost={isMyPost} />}
      </PostWrapper>
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
