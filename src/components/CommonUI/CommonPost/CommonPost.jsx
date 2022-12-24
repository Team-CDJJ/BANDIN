import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Img from '../../atoms/Img/img';
import LikeBtnTest from '../../modules/LikeBtn/LikeBtn';

import {
  CommonPostWrap,
  CommonPostSection,
  CommonUserInfo,
  UserName,
  UserInfoCont,
  VerticalBtn,
  UserID,
  PostTxt,
  IconGroup,
  LikeCount,
  ChatBtn,
  ChatCount,
  PostUploadTime,
} from './styled';

import Profile from '../../../assets/profile.png';

const CommonPost = ({ post }) => {
  const changeDateFormat = (date) => {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);

    return `${year}년 ${month}월 ${day}일`;
  };

  return (
    <CommonPostWrap>
      <Link
        to={`/profile/${post.author.accountname}`}
        style={{ textDecoration: 'none', color: '#767676' }}
      >
        <UserInfoCont>
          <img src={Profile} alt='프로필 이미지' className='img-profile' />
          <CommonUserInfo className='linkWrap'>
            <UserName className='h1'>{post.author.username}</UserName>
            <UserID>@ {post.author.accountname}</UserID>
          </CommonUserInfo>
        </UserInfoCont>
      </Link>
      <VerticalBtn type='button' />
      <CommonPostSection>
        <PostTxt>{post.content}</PostTxt>
        <Link to={`/post/${post.id}`}>
          {post.image &&
            post.image
              .split(',')
              .map((item) => (
                <Img
                  key={post.id}
                  width='100%'
                  src={item}
                  alt='게시글 이미지'
                />
              ))}
        </Link>
        <IconGroup>
          <LikeBtnTest id={post.id} />
          <LikeCount
            heartCount={post.heartCount}
            id={post.id}
            hearted={post.hearted}
          >
            {post.heartCount}
          </LikeCount>
          <ChatBtn />
          <ChatCount>{post.commentCount}</ChatCount>
        </IconGroup>
        <PostUploadTime>{changeDateFormat(post.createdAt)}</PostUploadTime>
      </CommonPostSection>
    </CommonPostWrap>
  );
};

export default CommonPost;
