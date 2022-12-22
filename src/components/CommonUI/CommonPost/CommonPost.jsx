import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Img from '../../atoms/Img/img';

import {
  CommonPostWrap,
  CommonPostSection,
  CommonHeaderSec,
  UserName,
  VerticalBtn,
  UserID,
  PostTxt,
  IconGroup,
  LikeBtn,
  LikeCount,
  ChatBtn,
  ChatCount,
  PostUploadTime,
} from './styled';

import Profile from '../../../assets/profile.png';

const CommonPost = ({ post }) => {
  const [postData, setPostData] = useState([]);

  const changeDateFormat = (date) => {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);

    return `${year}년 ${month}월 ${day}일`;
  };

  console.log(post);
  return (
    <CommonPostWrap>
      <img src={Profile} alt='프로필 이미지' className='img-profile' />
      <CommonPostSection>
        <CommonHeaderSec>
          <UserName>{post.author.username}</UserName>
          <VerticalBtn type='button' />
        </CommonHeaderSec>
        <UserID>@ {post.author.accountname}</UserID>
        <PostTxt>{post.content}</PostTxt>
        <Link to={`/post/${post.id}`}>
          {post.image &&
            post.image
              .split(',')
              .map((item) => (
                <Img width='100%' src={item} alt='게시글 이미지' />
              ))}
        </Link>
        <IconGroup>
          <LikeBtn />
          <LikeCount>{post.heartCount}</LikeCount>
          <ChatBtn />
          <ChatCount>{post.commentCount}</ChatCount>
        </IconGroup>
        <PostUploadTime>{changeDateFormat(post.createdAt)}</PostUploadTime>
      </CommonPostSection>
    </CommonPostWrap>
  );
};

export default CommonPost;
