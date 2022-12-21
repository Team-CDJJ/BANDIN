import {
  UserList,
  ProfileImg,
  UserInfo,
  UserName,
  UserId,
  ProfileLink,
} from './styled';

const UserItem = ({ image, username, accountname, key, alt }) => {
  return (
    <UserList key={key}>
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
