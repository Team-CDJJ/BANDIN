import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Img from '../../atoms/Img/img';
import UserItem from '../UserItem/UserItem';

import {
  CommonPostWrap,
  CommonPostSection,
  CommonHeaderSec,
  VerticalBtn,
  PostTxt,
  IconGroup,
  LikeBtn,
  LikeCount,
  ChatBtn,
  ChatCount,
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
    <CommonPostWrap>
      <CommonPostSection>
        <CommonHeaderSec>
          <UserItem
            image={image}
            username={username}
            accountname={accountname}
          />
          <VerticalBtn type='button' />
        </CommonHeaderSec>
        <PostTxt>{content}</PostTxt>
        <Link to={`/post/${id}`}>
          {imageSrc &&
            imageSrc
              .split(',')
              .map((item) => (
                <Img width='100%' src={item} alt='게시글 이미지' />
              ))}
        </Link>
        <IconGroup>
          <LikeBtn />
          <LikeCount>{heartCount}</LikeCount>
          <ChatBtn />
          <ChatCount>{commentCount}</ChatCount>
        </IconGroup>
        <PostUploadTime>{changeDateFormat(createdAt)}</PostUploadTime>
      </CommonPostSection>
    </CommonPostWrap>
  );
};

export default CommonPost;
