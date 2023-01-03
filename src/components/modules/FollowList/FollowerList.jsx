import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { follow, unfollow } from '../../../api/profile/follow';
import { accountNameValue } from '../../../atoms';
import Button from '../../atoms/Button/Button';
import UserItem from '../../CommonUI/UserItem/UserItem';
import FollowListDiv from './styled';

const FollowerList = ({ followerList }) => {
  const [isFollow, setIsFollow] = useState(followerList.isfollow);
  const accountname = useRecoilValue(accountNameValue);

  const handleFollow = () => {
    if (!isFollow) {
      follow(followerList.accountname).then((data) => {
        setIsFollow(data.profile.isfollow);
      });
    } else {
      unfollow(followerList.accountname).then((data) => {
        setIsFollow(data.profile.isfollow);
      });
    }
  };

  return (
    <FollowListDiv>
      <UserItem
        width='50px'
        height='50px'
        accountname={followerList.accountname}
        username={followerList.username}
        intro={followerList.intro}
        image={followerList.image}
      />
      {accountname !== followerList.accountname ? (
        <Button
          size='xs'
          state={isFollow ? 'active' : null}
          tit={isFollow ? '취소' : '팔로우'}
          onClick={handleFollow}
        ></Button>
      ) : null}
    </FollowListDiv>
  );
};

export default FollowerList;
