import { useEffect, useState } from 'react';

import Img from '../../atoms/Img/img';
import noneProfileImg from '../../../assets/profile.png';

import {
  BtnWrapper,
  FollowAndImgWrapper,
  ProfileWrapper,
  TextWrapper,
} from './styled';
import getMyProfile from '../../../api/profile/getmyprofile';

const ProfileInfo = () => {
  const [userInfo, setUserInfo] = useState({});
  const [followerCount, setFollowerCount] = useState();
  const [followingCount, setFollowingCount] = useState();
  const [isFollow, setIsFollow] = useState();

  useEffect(() => {
    const getUserData = async () => {
      const userData = await getMyProfile();
      setUserInfo(userData);
      setFollowerCount(userData.followerCount);
      setFollowingCount(userData.followingCount);
      setIsFollow(userData.isfollow);
      // console.log(userData);
    };
    getUserData();
  }, []);
  console.log(userInfo);
  console.log(followerCount, followingCount, isFollow);

  return (
    <ProfileWrapper>
      <FollowAndImgWrapper>
        <div>
          <strong className='followNum'>{followerCount}</strong>
          <p className='followTxt'>follower</p>
        </div>
        <Img
          width='110px'
          height='110px'
          alt='프로필 이미지'
          src={noneProfileImg}
        />
        <div>
          <strong className='followNum'>{followingCount}</strong>
          <p className='followTxt'>following</p>
        </div>
      </FollowAndImgWrapper>
      <TextWrapper>
        <strong className=''>애월읍 위니브 감귤농장</strong>
      </TextWrapper>
      <BtnWrapper></BtnWrapper>
    </ProfileWrapper>
  );
};

export default ProfileInfo;
