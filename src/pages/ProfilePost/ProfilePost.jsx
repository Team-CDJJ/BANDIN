import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();

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
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
              <img
                src={item.image.split(',')[0]}
                alt='게시글 이미지'
                key={item.id}
                onClick={() => navigate(`/post/${item.id}`)}
              />
            ) : null;
          })}
        </PostGrid>
      )}
    </PostWrapper>
  );
};
export default ProfilePost;
