import {
  UserList,
  ProfileImg,
  UserInfo,
  UserName,
  UserId,
  ProfileLink,
} from './styled';
import basicProfile from '../../../assets/profile.png';

const UserItem = () => {
  return (
    <UserList>
      <ProfileLink href='#'>
        <ProfileImg src={basicProfile} alt='기본 프로필 이미지' />
        <UserInfo>
          <UserName>애월읍 위니브 감귤농장</UserName>
          <UserId>@ weniv_Mandarin</UserId>
        </UserInfo>
      </ProfileLink>
    </UserList>
  );
};
export default UserItem;
