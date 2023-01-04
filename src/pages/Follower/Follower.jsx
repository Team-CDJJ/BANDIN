import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  FollowerTopSpan,
  FollowerMain,
  FollowerMainUl as FollowerUserItem,
} from './styled';

import TopBasicNav from '../../components/CommonUI/Nav/TopBasicNav/TopBasicNav';
import TabMenu from '../../components/CommonUI/TabMenu/TabMenu';
import getFollowerList from '../../api/profile/getFollowerList';
import FollowerList from '../../components/modules/FollowList/FollowerList';

const Follower = () => {
  const { accountName } = useParams();
  const [followerList, setFollowerList] = useState([]);

  useEffect(() => {
    getFollowerList(accountName)
      .then((data) => {
        setFollowerList(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <TopBasicNav moreBtn='followerNav' />
      <FollowerTopSpan>Followers</FollowerTopSpan>
      <FollowerMain>
        <FollowerUserItem>
          {followerList && followerList.length > 0
            ? followerList.map((followerList) => (
                <FollowerList
                  key={followerList._id}
                  followerList={followerList}
                />
              ))
            : null}
        </FollowerUserItem>
      </FollowerMain>
      <TabMenu place='profile' />
    </div>
  );
};

export default Follower;
