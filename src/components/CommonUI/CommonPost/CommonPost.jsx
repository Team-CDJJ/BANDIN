import { Link } from 'react-router-dom';
import Img from '../../atoms/Img/img';
import PostUserInfo from '../../modules/PostUserInfo/PostUserInfo';

import {
  CommonPostWrapper,
  CommonPostSection,
  PostTxt,
  IconGroup,
  LikeBtn,
  Count,
  ChatBtn,
  PostUploadTime,
} from './styled';

const CommonPost = ({ post }) => {
  const changeDateFormat = (date) => {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);

    return `${year}년 ${month}월 ${day}일`;
  };

  console.log(post);
  return (
    <CommonPostWrapper>
      <PostUserInfo
        image={post.author.image}
        username={post.author.username}
        accountname={post.author.accountname}
      />
      <CommonPostSection>
        <PostTxt>{post.content}</PostTxt>
        <Link to={`/post/${post.id}`}>
          {post.image &&
            post.image
              .split(',')
              .map((item, idx) => (
                <Img
                  key={idx}
                  width='100%'
                  height='100%'
                  src={item}
                  alt='게시글 이미지'
                  borderRadius='10px'
                />
              ))}
        </Link>
        <IconGroup>
          <LikeBtn />
          <Count>{post.heartCount}</Count>
          <ChatBtn />
          <Count>{post.commentCount}</Count>
        </IconGroup>
        <PostUploadTime>{changeDateFormat(post.createdAt)}</PostUploadTime>
      </CommonPostSection>
    </CommonPostWrapper>
  );
};

export default CommonPost;
