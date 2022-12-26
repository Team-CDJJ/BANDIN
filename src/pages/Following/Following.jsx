import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import {
  FollowingTopSpan,
  FollowingMain,
  FollowingMainUl as FollowingUserItem,
} from './styled';

import FollowingBtn from '../../components/atoms/Button/Button';

import TopBasicNav from '../../components/CommonUI/Nav/TopBasicNav/TopBasicNav';
import UserItem from '../../components/CommonUI/UserItem/UserItem';
import TabMenu from '../../components/CommonUI/TabMenu/TabMenu';
import getFollowingListApi from '../../api/profile/getfollowing';

import { accountNameValue } from '../../atoms';
import { follow, unfollow } from '../../api/profile/follow';
import getProfile from '../../api/profile/getmyprofile';

const Following = () => {
  const myAccountName = useRecoilValue(accountNameValue);
  const [followingList, setFollowingList] = useState([]);

  const getFollowingList = () => {
    getFollowingListApi(myAccountName)
      .then((data) => {
        setFollowingList(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (myAccountName) getFollowingList();
  }, [myAccountName]);

  const handleFollowingBtn = async (targetName, isfollow) => {
    if (isfollow) {
      await unfollow(targetName);
    } else {
      await follow(targetName);
    }

    const profile = await getProfile(targetName);
    setFollowingList((state) =>
      state.map((s) => {
        if (s.accountname !== targetName) return s;
        return {
          ...s,
          isfollow: profile.isfollow,
        };
      }),
    );
  };

  return (
    <>
      <TopBasicNav moreBtn='followingNav' />
      <FollowingTopSpan>Following</FollowingTopSpan>
      <FollowingMain>
        {followingList.map((user) => (
          <FollowingUserItem key={user.accountname}>
            <UserItem
              image={user.image}
              username={user.username}
              accountname={user.accountname}
            />
            {myAccountName !== user.accountname && (
              <FollowingBtn
                size='xs'
                state={user.isfollow ? 'active' : ''}
                tit={user.isfollow ? '취소' : '팔로우'}
                onClick={() =>
                  handleFollowingBtn(user.accountname, user.isfollow)
                }
              ></FollowingBtn>
            )}
          </FollowingUserItem>
        ))}
      </FollowingMain>
      <TabMenu place='profile' />
    </>
  );
};

export default Following;
