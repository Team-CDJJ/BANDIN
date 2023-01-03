import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { follow, unfollow } from '../../../api/profile/follow';
import { accountNameValue } from '../../../atoms';
import Button from '../../atoms/Button/Button';
import UserItem from '../../CommonUI/UserItem/UserItem';
import FollowListDiv from './styled';

const FollowingList = ({ followingList }) => {
  const [isFollow, setIsFollow] = useState(false);
  const accountname = useRecoilValue(accountNameValue);

  useEffect(() => {
    setIsFollow(followingList.isfollow);
  }, []);

  const handleFollow = () => {
    if (!isFollow) {
      follow(followingList.accountname).then((data) => {
        setIsFollow(data.profile.isfollow);
      });
    } else {
      unfollow(followingList.accountname).then((data) => {
        setIsFollow(data.profile.isfollow);
      });
    }
  };

  return (
    <FollowListDiv>
      <UserItem
        width='50px'
        height='50px'
        accountname={followingList.accountname}
        username={followingList.username}
        intro={followingList.intro}
        image={followingList.image}
      />
      {accountname !== followingList.accountname ? (
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

export default FollowingList;
