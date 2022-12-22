import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import Img from '../../atoms/Img/img';

import {
  BtnWrapper,
  FollowAndImgWrapper,
  ProfileWrapper,
  TextWrapper,
} from './styled';
import Button from '../../atoms/Button/Button';
// import getMyProfile from '../../../api/profile/getmyprofile';
// import { accessInstance } from '../../../api/api';
import getMyProfile from '../../../api/profile/getmyprofile';

const ProfileInfo = () => {
  const path = useLocation().pathname;
  const accountName = path.split('/')[2];
  console.log(accountName);
  // const { accountName } = useParams();
  // console.log(accountName);

  const [userInfo, setUserInfo] = useState({});
  const [followerCount, setFollowerCount] = useState();
  const [followingCount, setFollowingCount] = useState();
  const [isFollow, setIsFollow] = useState();

  const { accountname, username, intro, image } = userInfo;

  useEffect(() => {
    // const accountName = localStorage.getItem('accountname');
    // const getMyProfile = async () => {
    //   try {
    //     const res = await accessInstance.get(
    //       `/profile/${accountName}`,
    //       formData,
    //     );
    //     console.log(res);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // getMyProfile();
    getMyProfile(accountName).then((data) => {
      console.log(data);
    });
  }, []);

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
          borderRadius='50%'
          alt={`${username}님의 프로필 이미지`}
          src={image}
        />
        <div>
          <strong className='followNum'>{followingCount}</strong>
          <p className='followTxt'>following</p>
        </div>
      </FollowAndImgWrapper>
      <TextWrapper>
        <strong className='user-name'>{username}</strong>
        <p className='account-name'>@ {accountname}</p>
        <p className='intro'>{intro}</p>
      </TextWrapper>
      <BtnWrapper>
        <Button
          size='md'
          type='button'
          state='active'
          tit='프로필 수정'
        ></Button>
        <Button size='md' type='button' state='active' tit='상품 등록'></Button>
      </BtnWrapper>
    </ProfileWrapper>
  );
};

export default ProfileInfo;
