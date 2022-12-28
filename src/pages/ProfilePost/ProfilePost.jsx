import { useState } from 'react';
// import { ProfilePostWrapper } from './styled';
import ProfilePostNav from '../../components/modules/ProfilePost/ProfilePostNav';
import PostList from '../../components/modules/Post/PostList';
import PostAlbum from '../../components/modules/Post/PostAlbum';

const ProfilePost = ({ postList }) => {
  const [listClicked, setListClicked] = useState(true);
  const [albumClicked, setAlbumClicked] = useState(false);

  const handleListBtn = () => {
    setListClicked(true);
    setAlbumClicked(false);
  };

  const handleAlbumBtn = () => {
    setListClicked(false);
    setAlbumClicked(true);
  };

  return (
    <>
      <ProfilePostNav
        postList={postList}
        listClick={listClicked}
        albumClick={albumClicked}
        onClickList={handleListBtn}
        onClickAlbum={handleAlbumBtn}
      />
      {listClicked && !albumClicked ? (
        <PostList postList={postList} />
      ) : (
        <PostAlbum postList={postList} />
      )}
      {/* {listClicked && !albumClicked ? (
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
        )} */}
    </>
  );
};
export default ProfilePost;
