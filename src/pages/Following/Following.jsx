import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FollowingTopSpan, FollowingMain, FollowingMainUl } from './styled';

import FollowingBtn from '../../components/atoms/Button/Button';

import TopBasicNav from '../../components/CommonUI/Nav/TopBasicNav/TopBasicNav';
import UserItem from '../../components/CommonUI/UserItem/UserItem';
import TabMenu from '../../components/CommonUI/TabMenu/TabMenu';

const Following = () => {
  const [tit, setTit] = useState(true);
  const [color, setColor] = useState(true);

  const handleFollowingBtn = () => {
    setTit(!tit);
    setColor(!color);
  };

  const toggleColorAndBg = color ? 'active' : '';

  return (
    <>
      <TopBasicNav moreBtn='followingNav' />
      <FollowingTopSpan>Following</FollowingTopSpan>
      <FollowingMain>
        <FollowingMainUl>
          <UserItem />
          <FollowingBtn
            state={`${toggleColorAndBg}`}
            size='xs'
            tit={tit ? '팔로잉' : '팔로우'}
            onClick={handleFollowingBtn}
          ></FollowingBtn>
        </FollowingMainUl>
      </FollowingMain>
      <TabMenu followingUserTab='following' />
    </>
  );
};

export default Following;