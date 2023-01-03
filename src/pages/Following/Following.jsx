import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  FollowingTopSpan,
  FollowingMain,
  FollowingMainUl as FollowingUserItem,
} from './styled';

import TopBasicNav from '../../components/CommonUI/Nav/TopBasicNav/TopBasicNav';
import TabMenu from '../../components/CommonUI/TabMenu/TabMenu';
import getFollowingList from '../../api/profile/getFollowingList';
import FollowingList from '../../components/modules/FollowList/FollowingList';

const Following = () => {
  const { accountName } = useParams();
  const [followingList, setFollowingList] = useState([]);

  useEffect(() => {
    getFollowingList(accountName)
      .then((data) => {
        setFollowingList(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <TopBasicNav moreBtn='followingNav' />
      <FollowingTopSpan>Following</FollowingTopSpan>
      <FollowingMain>
        <FollowingUserItem>
          {followingList && followingList.length > 0
            ? followingList.map((followingList) => (
                <FollowingList
                  key={followingList._id}
                  followingList={followingList}
                />
              ))
            : null}
        </FollowingUserItem>
      </FollowingMain>
      <TabMenu place='profile' />
    </>
  );
};

export default Following;
