import { Link } from 'react-router-dom';

import {
  TabMenuSection,
  TabMenuInner,
  TabMenuEachInner,
  EachTabImg,
  EachTabSpan,
} from './styled';

import homeTab from '../../../assets/icon-home.png';
import messageTab from '../../../assets/icon-message-circle.png';
import editTab from '../../../assets/icon-edit.png';
import userTab from '../../../assets/icon-user.png';
import userTabFill from '../../../assets/icon-user-fill.png';

const TabMenu = ({ followingUserTab, followerUserTab }) => {
  return (
    <TabMenuSection>
      <h1 className='ir'>하단 탭 메뉴바</h1>
      <TabMenuInner>
        <TabMenuEachInner>
          {/* 경로 수정 필요 */}
          <Link to='/'>
            <EachTabImg src={homeTab} alt='' />
            <EachTabSpan>홈</EachTabSpan>
          </Link>
        </TabMenuEachInner>
        <TabMenuEachInner>
          <Link to='/'>
            <EachTabImg src={messageTab} alt='' />
            <EachTabSpan>채팅</EachTabSpan>
          </Link>
        </TabMenuEachInner>
        <TabMenuEachInner>
          <Link to='/'>
            <EachTabImg src={editTab} alt='' />
            <EachTabSpan>게시물 작성</EachTabSpan>
          </Link>
        </TabMenuEachInner>
        {/* following일 경우 하단바 유저 fill 이미지 */}
        {followingUserTab && (
          <TabMenuEachInner>
            <Link to='/'>
              <EachTabImg src={userTabFill} alt='' />
              <EachTabSpan>프로필</EachTabSpan>
            </Link>
          </TabMenuEachInner>
        )}
        {/* follower일 경우 하단바 유저 fill 이미지 */}
        {followerUserTab && (
          <TabMenuEachInner>
            <Link to='/'>
              <EachTabImg src={userTabFill} alt='' />
              <EachTabSpan>프로필</EachTabSpan>
            </Link>
          </TabMenuEachInner>
        )}
      </TabMenuInner>
    </TabMenuSection>
  );
};

export default TabMenu;