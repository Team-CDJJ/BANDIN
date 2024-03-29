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
import CommonPost from '../../CommonUI/CommonPost/CommonPost';
import postListOn from '../../../assets/icon-post-list-on.png';
import postListOff from '../../../assets/icon-post-list-off.png';
import postAlbumOn from '../../../assets/icon-post-album-on.png';
import postAlbumOff from '../../../assets/icon-post-album-off.png';

const ProfilePost = ({ data, isMyPost }) => {
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
        <ListIcon onClick={handleListBtn}>
          {listClicked === false ? (
            <img src={postListOff} alt=''></img>
          ) : (
            <img src={postListOn} alt=''></img>
          )}
        </ListIcon>
        <AlbumIcon onClick={handleAlbumBtn}>
          {albumClicked === false ? (
            <img src={postAlbumOff} alt=''></img>
          ) : (
            <img src={postAlbumOn} alt=''></img>
          )}
        </AlbumIcon>
      </PostHeaderNav>
      {listClicked && !albumClicked ? (
        <PostUl>
          {data.post?.map((item, idx) => (
            <CommonPost post={item} key={idx} isMyPost={isMyPost}></CommonPost>
          ))}
        </PostUl>
      ) : (
        <PostGrid>
          {data.post?.map((item) => {
            return item.image ? (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
              <li
                className='img-cont'
                onClick={() => navigate(`/post/${item.id}`)}
                key={item.id}
              >
                <img src={item.image.split(',')[0]} alt='게시글 이미지' />
              </li>
            ) : null;
          })}
        </PostGrid>
      )}
    </PostWrapper>
  );
};
export default ProfilePost;
