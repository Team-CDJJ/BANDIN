import { useNavigate } from 'react-router-dom';
import Img from '../../atoms/Img/img';
import PostUserInfo from '../../modules/PostUserInfo/PostUserInfo';
import LikeBtn from '../../modules/LikeBtn/LikeBtn';
import {
  CommonPostWrapper,
  CommonPostSection,
  PostTxt,
  IconGroup,
  Count,
  ChatBtn,
  PostUploadTime,
  PostImg,
} from './styled';

const CommonPost = ({ post, isMyPost }) => {
  const navigate = useNavigate();
  const changeDateFormat = (date) => {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);

    return `${year}년 ${month}월 ${day}일`;
  };

  const handlePostDetail = () => {
    window.location.href = `/post/${post.id}`;
  };

  const onClickComment = () => {
    navigate(`/post/${post.id}`);
  };

  const text = post.content.replaceAll(/\n|\r\n/g, '<br/>');

  return (
    <CommonPostWrapper>
      <PostUserInfo
        image={post.author.image}
        username={post.author.username}
        accountname={post.author.accountname}
        id={post.id}
        isMyPost={isMyPost}
        createdAt={post.createdAt}
      />
      <CommonPostSection onClick={handlePostDetail}>
        <PostTxt dangerouslySetInnerHTML={{ __html: text }}></PostTxt>
        {post.image ? (
          <PostImg className='img-cont'>
            {post.image.split(',').map((item, idx) => (
              <Img
                className='img-cell'
                key={idx}
                width='100%'
                height='100%'
                src={item}
                alt='게시글 이미지'
                borderRadius='10px'
              />
            ))}
          </PostImg>
        ) : null}
      </CommonPostSection>
      <div className='post-footer'>
        <IconGroup>
          <LikeBtn
            heartCount={post.heartCount}
            id={post.id}
            heartedBool={post.hearted}
          />
          <ChatBtn onClick={onClickComment} />
          <Count>{post.commentCount}</Count>
        </IconGroup>
        <PostUploadTime>{changeDateFormat(post.createdAt)}</PostUploadTime>
      </div>
    </CommonPostWrapper>
  );
};

export default CommonPost;
