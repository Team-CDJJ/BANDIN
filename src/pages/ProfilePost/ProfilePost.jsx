import React, { useEffect, useState } from 'react';
import { PostHeaderNav, ListIcon, AlbumIcon, PostUl, PostGrid } from './styled';
import profilePost from '../../api/getProfilePost/getProfilePost';
import CommonPost from '../../components/CommonUI/CommonPost/CommonPost';
import Img from '../../components/atoms/Img/img';

const ProfilePost = () => {
  const [postList, setPostList] = useState([]);
  const [listClicked, setListClicked] = useState(true);
  const [albumClicked, setAlbumClicked] = useState(false);

  console.log(postList);

  const handleListBtn = () => {
    setListClicked(true);
    setAlbumClicked(false);
  };

  const handleAlbumBtn = () => {
    setListClicked(false);
    setAlbumClicked(true);
    // console.log(albumClicked);
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

  console.log(listClicked, albumClicked);

  return (
    <>
      <PostHeaderNav>
        <ListIcon onClick={handleListBtn} />
        <AlbumIcon onClick={handleAlbumBtn} />
      </PostHeaderNav>
      {listClicked && !albumClicked ? (
        <PostUl>
          {postList &&
            postList.map((item) => (
              <CommonPost
                key={item.id}
                image={item.author.image}
                username={item.author.username}
                accountname={item.author.accountname}
                imageSrc={
                  item.image &&
                  item.image
                    .split(',')
                    .map((img) => (
                      <Img width='100%' src={img} alt='게시글 이미지' />
                    ))
                }
                content={item.content}
                id={item.id}
                heartCount={item.heartCount}
                commentCount={item.commentCount}
                createdAt={item.createdAt}
              ></CommonPost>
            ))}
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
