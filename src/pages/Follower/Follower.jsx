import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  FollowerTopSpan,
  FollowerMain,
  FollowerMainUl as FollowerUserItem,
} from './styled';
import FollowerBtn from '../../components/atoms/Button/Button';

import TopBasicNav from '../../components/CommonUI/Nav/TopBasicNav/TopBasicNav';
import { UserItem } from '../../components/CommonUI/UserItem/UserItem';
import TabMenu from '../../components/CommonUI/TabMenu/TabMenu';
import getFollowerListApi from '../../api/profile/getFollowerList';
import { follow, unfollow } from '../../api/profile/follow';
import getMyProfile from '../../api/profile/getMyProfile';

const Follower = () => {
  const { accountName } = useParams();
  const [followerList, setFollowerList] = useState([]);
  console.log(11111, followerList);
  const getFollowerList = () => {
    getFollowerListApi(accountName)
      .then((data) => {
        setFollowerList(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (accountName) getFollowerList();
  }, [accountName]);

  const handleFollowBtn = (targetName, isfollow) => {
    if (isfollow) {
      unfollow(targetName);
    } else {
      follow(targetName);
    }

    const profile = getMyProfile(targetName);
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
              width='50px'
              height='50px'
              username={follower.username}
              accountname={follower.accountname}
              image={follower.image}
            />
            {follower.accountname !== localStorage.getItem('accountname') ? (
              <FollowerBtn
                size='xs'
                state={follower.isfollow ? 'active' : ''}
                tit={follower.isfollow ? '취소' : '팔로우'}
                onClick={() =>
                  handleFollowBtn(follower.accountname, follower.isfollow)
                }
              ></FollowerBtn>
            ) : null}
          </FollowerUserItem>
        ))}
      </FollowerMain>
      <TabMenu place='profile' />
    </div>
  );
};

export default Follower;
