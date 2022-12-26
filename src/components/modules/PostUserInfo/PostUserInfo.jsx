import Img from '../../atoms/Img/img';
import {
  UserList,
  UserName,
  UserId,
  VerticalBtn,
  UserInfoLink,
} from './styled';

const PostUserInfo = ({ image, username, accountname, alt }) => {
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
      <VerticalBtn type='button' />
    </UserList>
  );
};
export default PostUserInfo;
