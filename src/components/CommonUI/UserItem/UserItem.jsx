import { useNavigate } from 'react-router-dom';
import Img from '../../atoms/Img/img';
import {
  UserList,
  UserInfo,
  UserName,
  UserId,
  ProfileLink,
  Keyword,
} from './styled';

const UserItem = ({
  width,
  height,
  image,
  username,
  accountname,
  keyValue,
  alt,
}) => {
  const navigate = useNavigate();

  const handleToProfile = () => {
    navigate(`/profile/${accountname}`);
  };

  return (
    <UserList key={keyValue} onClick={handleToProfile}>
      <ProfileLink to={`/profile/${accountname}`}>
        <Img
          width={width}
          height={height}
          src={image}
          alt={alt}
          borderRadius='50%'
        />
        <UserInfo>
          <UserName>{username}</UserName>
          <UserId>@ {accountname}</UserId>
        </UserInfo>
      </ProfileLink>
    </UserList>
  );
};

const SearchUserItem = ({
  width,
  height,
  image,
  accountname,
  keyValue,
  alt,
  keywordName,
  keywordId,
  firstUserName,
  lastUserName,
  firstUserId,
  lastUserId,
}) => {
  const navigate = useNavigate();

  const handleToProfile = () => {
    navigate(`/profile/${accountname}`);
  };

  return (
    <UserList key={keyValue} onClick={handleToProfile}>
      <ProfileLink to={`/profile/${accountname}`}>
        <Img
          width={width}
          height={height}
          src={image}
          alt={alt}
          borderRadius='50%'
        />
        <UserInfo>
          <UserName>
            {firstUserName}
            <Keyword>{keywordName}</Keyword>
            {lastUserName}
          </UserName>
          <UserId>
            @ {firstUserId}
            <Keyword>{keywordId}</Keyword>
            {lastUserId}
          </UserId>
        </UserInfo>
      </ProfileLink>
    </UserList>
  );
};
export { UserItem, SearchUserItem };
