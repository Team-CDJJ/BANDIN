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

const CommonPost = ({
  image,
  username,
  imageSrc,
  accountname,
  content,
  id,
  heartCount,
  commentCount,
  createdAt,
}) => {
  const changeDateFormat = (date) => {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);

    return `${year}년 ${month}월 ${day}일`;
  };

  return (
    <CommonPostWrapper>
      <PostUserInfo
        image={image}
        username={username}
        accountname={accountname}
      />
      <CommonPostSection>
        <PostTxt>{content}</PostTxt>
        <Link to={`/post/${id}`}>
          {imageSrc &&
            imageSrc
              .split(',')
              .map((item) => (
                <Img
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
          <Count>{heartCount}</Count>
          <ChatBtn />
          <Count>{commentCount}</Count>
        </IconGroup>
        <PostUploadTime>{changeDateFormat(createdAt)}</PostUploadTime>
      </CommonPostSection>
    </CommonPostWrapper>
  );
};

export default CommonPost;
