import { useEffect, useState } from 'react';
import {
  PostWrapper,
  PostHeaderNav,
  ListIcon,
  AlbumIcon,
  PostUl,
  PostGrid,
} from './styled';
import CommonPost from '../../components/CommonUI/CommonPost/CommonPost';

const ProfilePost = ({ data }) => {
  const [postList, setPostList] = useState(data);
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
    <PostWrapper>
      <PostHeaderNav>
        <ListIcon onClick={handleListBtn} />
        <AlbumIcon onClick={handleAlbumBtn} />
      </PostHeaderNav>
      {listClicked && !albumClicked ? (
        <PostUl>
          {data.post?.map((item) => (
            <CommonPost post={item}></CommonPost>
          ))}
        </PostUl>
      ) : (
        <PostGrid>
          {data.post?.map((item) => {
            return item.image ? (
              <img src={item.image} alt='게시글 이미지' key={item.id} />
            ) : null;
          })}
        </PostGrid>
      )}
    </PostWrapper>
  );
};
export default ProfilePost;
