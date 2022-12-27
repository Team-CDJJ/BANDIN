import React, { useEffect, useState } from 'react';
// import { PostHeaderNav } from './styled';
import styled, { css } from 'styled-components';
import ListIconOn from '../../assets/icon-post-list-on.png';
import ListIconOff from '../../assets/icon-post-list-off.png';
import AlbumIconOn from '../../assets/icon-post-album-on.png';
import AlbumIconOff from '../../assets/icon-post-album-off.png';
import profilePost from '../../api/GETprofilepost/GETprofilepost';
import CommonPost from '../../components/CommonUI/CommonPost/CommonPost';
import Img from '../../components/atoms/Img/img';

const ProfilePost = () => {
  const [postList, setPostList] = useState([]);
  const [listClicked, setListClicked] = useState(true);
  const [albumClicked, setAlbumClicked] = useState(false);

  const handleListBtn = () => {
    setListClicked(true);
    setAlbumClicked(false);
    console.log(listClicked);
  };

  const handleAlbumBtn = () => {
    setListClicked(false);
    setAlbumClicked(true);
    console.log(albumClicked);
  };

  useEffect(() => {
    const getPost = () => {
      profilePost()
        .then((data) => {
          setPostList(data.post);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getPost();
  }, []);

  return (
    <>
      <PostHeaderNav>
        <ListIcon onClick={handleListBtn} />
        <AlbumIcon onClick={handleAlbumBtn} />
      </PostHeaderNav>
      {listClicked ? (
        <PostUl>
          {postList.map((item) => {
            return (
              <CommonPost
                key={item.id}
                image={item.author.image}
                username={item.author.username}
                accountname={item.author.accountname}
                imageSrc={item.image}
                // imageSrc ={{item.image} && {item.image}.split(',').map((img) => (
                //   <Img width='100%' src={img} alt='게시글 이미지' />
                // ))}
                content={item.content}
                id={item.id}
                heartCount={item.heartCount}
                commentCount={item.commentCount}
                createdAt={item.createdAt}
              ></CommonPost>
            );
          })}
        </PostUl>
      ) : (
        <PostGrid>
          {postList.map((item) => {
            return item.image ? (
              <img src={item.image} alt='게시글 이미지' key={item.id} />
            ) : null;
          })}
        </PostGrid>
      )}
    </>
  );
};
export default ProfilePost;

const PostHeaderNav = styled.div`
  height: 44px;
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  align-items: center;
  padding-right: 16px;
  border-bottom: 0.5px solid #dbdbdb;
`;

const ListIcon = styled.button`
  outline: none;
  border: none;
  background: no-repeat center
    ${(props) =>
      props.listClicked ? `url(${ListIconOn})` : `url(${ListIconOff})`};
  background-size: 23px 23px;
  width: 26px;
  height: 26px;
`;

const AlbumIcon = styled.button`
  outline: none;
  border: none;
  background: no-repeat center
    ${(props) =>
      props.albumClicked ? `url(${AlbumIconOff})` : `url(${AlbumIconOn})`};
  background-size: 23px 23px;
  width: 26px;
  height: 26px;
`;

const PostUl = styled.ul`
  padding: 16px;
`;

const PostGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  padding: 16px;
  margin-bottom: 30px;

  & img {
    width: 114px;
    height: 114px;
  }
`;
