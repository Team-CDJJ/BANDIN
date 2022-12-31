import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  FollowingTopSpan,
  FollowingMain,
  FollowingMainUl as FollowingUserItem,
} from './styled';

import FollowingBtn from '../../components/atoms/Button/Button';

import TopBasicNav from '../../components/CommonUI/Nav/TopBasicNav/TopBasicNav';
import { UserItem } from '../../components/CommonUI/UserItem/UserItem';
import TabMenu from '../../components/CommonUI/TabMenu/TabMenu';
import getFollowingListApi from '../../api/profile/getFollowingList';

import { follow, unfollow } from '../../api/profile/follow';
import getMyProfile from '../../api/profile/getMyProfile';

const Following = () => {
  const { accountName } = useParams();
  const [followingList, setFollowingList] = useState([]);
  const getFollowingList = () => {
    getFollowingListApi(accountName)
      .then((data) => {
        setFollowingList(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (accountName) getFollowingList();
  }, [accountName]);

  const handleFollowingBtn = (targetName, isfollow) => {
    if (isfollow) {
      unfollow(targetName);
    } else {
      follow(targetName);
    }

    const profile = getMyProfile(targetName);
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
              width='50px'
              height='50px'
              image={user.image}
              username={user.username}
              accountname={user.accountname}
            />
            {localStorage.getItem('accountname') !== user.accountname && (
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
