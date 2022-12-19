import { useState } from 'react';
import { FollowerTopSpan, FollowerMain, FollowerMainUl } from './styled';
import FollowerBtn from '../../components/atoms/Button/Button';

import TopBasicNav from '../../components/CommonUI/Nav/TopBasicNav/TopBasicNav';
import UserItem from '../../components/CommonUI/UserItem/UserItem';
import TabMenu from '../../components/CommonUI/TabMenu/TabMenu';

const Follower = () => {
  const [tit, setTit] = useState(true);
  const [color, setColor] = useState(true);

  const handleFollowingBtn = () => {
    setTit(!tit);
    setColor(!color);
  };

  const toggleColorAndBg = color ? '' : 'active';

  return (
    <div>
      <TopBasicNav moreBtn='followerNav' />
      <FollowerTopSpan>Followers</FollowerTopSpan>
      <FollowerMain>
        <FollowerMainUl>
          <UserItem />
          <FollowerBtn
            state={`${toggleColorAndBg}`}
            size='xs'
            tit={tit ? '팔로우' : '취소'}
            onClick={handleFollowingBtn}
          ></FollowerBtn>
        </FollowerMainUl>
      </FollowerMain>
      <TabMenu place='profile' />
    </div>
  );
};

export default Follower;
