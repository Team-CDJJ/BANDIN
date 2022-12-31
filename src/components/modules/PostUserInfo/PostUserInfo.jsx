import { useState } from 'react';
import Img from '../../atoms/Img/img';
import PostModal from '../../modal/PostModal/PostModal';
import {
  UserList,
  UserName,
  UserId,
  VerticalBtn,
  UserInfoLink,
} from './styled';

const PostUserInfo = ({ image, username, accountname, alt, id, isMyPost }) => {
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
          src={image}
          alt={alt}
          borderRadius='50%'
        />
        <div className='user-info'>
          <UserName>{username}</UserName>
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
