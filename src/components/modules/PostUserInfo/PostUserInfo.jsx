import { useState } from 'react';
import Img from '../../atoms/Img/img';
import PostModal from '../../modal/PostModal/PostModal';
import TimeAgo from '../TimeAgo/TimeAgo';
import noneProfileImge from '../../../assets/profile.png';
import {
  UserList,
  UserName,
  UserId,
  VerticalBtn,
  UserInfoLink,
  CreatedTime,
} from './styled';

const PostUserInfo = ({
  image,
  username,
  accountname,
  alt,
  id,
  isMyPost,
  createdAt,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <UserList>
      <UserInfoLink to={`/profile/${accountname}`}>
        <Img
          width='42px'
          height='42px'
          src={image.includes('Ellipse.png') ? noneProfileImge : image}
          alt={alt}
          borderRadius='50%'
        />
        <div className='user-info'>
          <div className='user-info-flex'>
            <UserName>{username}</UserName>
            <CreatedTime>{TimeAgo(new Date(createdAt))}</CreatedTime>
          </div>
          <UserId>@ {accountname}</UserId>
        </div>
      </UserInfoLink>
      <VerticalBtn type='button' onClick={showModal} />
      {isModalOpen && (
        <PostModal
          id={id}
          isMyPost={isMyPost}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </UserList>
  );
};
export default PostUserInfo;
