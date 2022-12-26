import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import Img from '../../atoms/Img/img';
import { follow, unfollow } from '../../../api/profile/follow';

import {
  BtnWrapper,
  FollowAndImgWrapper,
  ProfileWrapper,
  TextWrapper,
} from './styled';
import getMyProfile from '../../../api/profile/getmyprofile';
import MyProfileBtn from '../MyProfileBtn/MyProfileBtn';
import YourProfileBtn from '../YourProfileBtn/YourProfileBtn';
import noneProfileImg from '../../../assets/profile.png';

const ProfileInfo = () => {
  const { accountName } = useParams();
  const accountname = localStorage.getItem('accountname');

  const [userInfo, setUserInfo] = useState({});
  const [image, setImage] = useState('');
  const [followerCount, setFollowerCount] = useState();
  const [followingCount, setFollowingCount] = useState();
  const [isFollow, setIsFollow] = useState();

  const { username, intro } = userInfo;

  const navigate = useNavigate();

  useEffect(() => {
    getMyProfile(accountName)
      .then((data) => {
        setUserInfo(data);
        setFollowerCount(data.followerCount);
        setFollowingCount(data.followingCount);
        setIsFollow(data.isfollow);
        setImage(data.image);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [accountName]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('accountname');
    localStorage.removeItem('recoil-persist');
    navigate('/');
  };

  const handleFollow = () => {
    follow(accountName);
    setIsFollow((state) => true);
  };

  const handleUnFollow = () => {
    unfollow(accountName);
    setIsFollow((state) => false);
  };

  return (
    <ProfileWrapper>
      <button type='button' onClick={handleLogout}>
        하이
      </button>
      <FollowAndImgWrapper>
        <Link
          to={{
            pathname: `/${accountName}/follower`,
            state: { accountName },
          }}
        >
          <strong className='followNum'>{followerCount}</strong>
          <p className='followTxt'>follower</p>
        </Link>
        <Img
          width='110px'
          height='110px'
          borderRadius='50%'
          alt={`${username}님의 프로필 이미지`}
          src={image.includes('Ellipse.png') ? noneProfileImg : image}
        />
        <Link
          to={{
            pathname: `/${accountName}/following`,
            state: { accountName },
          }}
        >
          <strong className='followNum following'>{followingCount}</strong>
          <p className='followTxt'>following</p>
        </Link>
      </FollowAndImgWrapper>
      <TextWrapper>
        <strong className='user-name'>{username}</strong>
        <p className='account-name'>@ {accountName}</p>
        <p className='intro'>{intro}</p>
      </TextWrapper>
      <BtnWrapper>
        {accountname === accountName ? (
          <MyProfileBtn></MyProfileBtn>
        ) : (
          <YourProfileBtn
            isFollow={isFollow}
            accountName={accountName}
            handleFollow={handleFollow}
            handleUnFollow={handleUnFollow}
          ></YourProfileBtn>
        )}
      </BtnWrapper>
    </ProfileWrapper>
  );
};

export default ProfileInfo;
