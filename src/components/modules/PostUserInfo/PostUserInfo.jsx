import { useState } from 'react';
import Img from '../../atoms/Img/img';
import {
  UserList,
  UserName,
  UserId,
  VerticalBtn,
  UserInfoLink,
} from './styled';
import { PostVerticalModal } from '../../CommonUI/PostModal/PostModal';

const PostUserInfo = ({ image, username, accountname, alt }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
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
      {modalOpen && <PostVerticalModal setModalOpen={setModalOpen} />}
    </UserList>
  );
};
export default PostUserInfo;
