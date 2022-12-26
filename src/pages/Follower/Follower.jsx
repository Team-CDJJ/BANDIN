import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import {
  FollowerTopSpan,
  FollowerMain,
  FollowerMainUl as FollowerUserItem,
} from './styled';
import FollowerBtn from '../../components/atoms/Button/Button';

import TopBasicNav from '../../components/CommonUI/Nav/TopBasicNav/TopBasicNav';
import UserItem from '../../components/CommonUI/UserItem/UserItem';
import TabMenu from '../../components/CommonUI/TabMenu/TabMenu';
import { accountNameValue } from '../../atoms';
import getFollowerListApi from '../../api/profile/getfollower';
import { follow, unfollow } from '../../api/profile/follow';
import getProfile from '../../api/profile/getmyprofile';

const Follower = () => {
  const myAccountName = useRecoilValue(accountNameValue);
  const [followerList, setFollowerList] = useState([]);

  const getFollowerList = () => {
    getFollowerListApi(myAccountName)
      .then((data) => {
        setFollowerList(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (myAccountName) getFollowerList();
  }, [myAccountName]);

  const handleFollowBtn = async (targetName, isfollow) => {
    if (isfollow) {
      await unfollow(targetName);
    } else {
      await follow(targetName);
    }

    const profile = await getProfile(targetName);
    setFollowerList((state) =>
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
    <div>
      <TopBasicNav moreBtn='followerNav' />
      <FollowerTopSpan>Followers</FollowerTopSpan>
      <FollowerMain>
        {followerList.map((follower) => (
          <FollowerUserItem key={follower.accountname}>
            <UserItem
              username={follower.username}
              accountname={follower.accountname}
              image={follower.image}
            />
            {myAccountName !== follower.accountname && (
              <FollowerBtn
                size='xs'
                state={follower.isfollow ? 'active' : ''}
                tit={follower.isfollow ? '취소' : '팔로우'}
                onClick={() =>
                  handleFollowBtn(follower.accountname, follower.isfollow)
                }
              ></FollowerBtn>
            )}
          </FollowerUserItem>
        ))}
      </FollowerMain>
      <TabMenu place='profile' />
    </div>
  );
};

export default Follower;
