import { useNavigate, useParams } from 'react-router-dom';
import {
  UserList,
  ProfileImg,
  UserInfo,
  UserName,
  UserId,
  ProfileLink,
} from './styled';

const UserItem = ({ image, username, accountname, keyValue, alt }) => {
  const { accountName } = useParams();
  const navigate = useNavigate();

  const handleToProfile = () => {
    navigate(`/profile/${accountName}`);
  };

  return (
    <UserList key={keyValue} onClick={handleToProfile}>
      <ProfileLink href='#'>
        <ProfileImg src={image} alt={alt} />
        <UserInfo>
          <UserName>{username}</UserName>
          <UserId>@ {accountname}</UserId>
        </UserInfo>
      </ProfileLink>
    </UserList>
  );
};
export default UserItem;
