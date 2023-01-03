import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
  intro,
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
  const location = useLocation();

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
          {location.pathname.includes('follow') ? (
            <>
              <UserName>{username}</UserName>
              <UserId>{intro}</UserId>
            </>
          ) : (
            <>
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
            </>
          )}
        </UserInfo>
      </ProfileLink>
    </UserList>
  );
};
export default UserItem;
