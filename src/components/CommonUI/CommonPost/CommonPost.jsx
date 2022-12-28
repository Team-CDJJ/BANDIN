import { Link } from 'react-router-dom';
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

const CommonPost = ({ post }) => {
  const changeDateFormat = (date) => {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);

    return `${year}년 ${month}월 ${day}일`;
  };

  const handlePostDetail = () => {
    window.location.href = `/post/${post.id}`;
  };

  return (
    <CommonPostWrapper>
      <PostUserInfo
        image={post.author.image}
        username={post.author.username}
        accountname={post.author.accountname}
      />
      <CommonPostSection>
        <PostTxt>{post.content}</PostTxt>
        <PostImg onClick={handlePostDetail}>
          {post.image &&
            post.image
              .split(',')
              .map((item, idx) => (
                <Img
                  key={idx}
                  width='304px'
                  height='228px'
                  src={item}
                  alt='게시글 이미지'
                  borderRadius='10px'
                />
              ))}
        </PostImg>
        <IconGroup>
          <LikeBtn
            heartCount={post.heartCount}
            id={post.id}
            heartedBool={post.hearted}
          />
          <ChatBtn />
          <Count>{post.commentCount}</Count>
        </IconGroup>
        <PostUploadTime>{changeDateFormat(post.createdAt)}</PostUploadTime>
      </CommonPostSection>
    </CommonPostWrapper>
  );
};

export default CommonPost;
