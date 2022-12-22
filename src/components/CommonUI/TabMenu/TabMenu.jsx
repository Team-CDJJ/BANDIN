import { Link } from 'react-router-dom';

import {
  TabMenuSection,
  TabMenuInner,
  TabMenuEachInner,
  TabImg,
  EachTabSpan,
} from './styled';

import homeTab from '../../../assets/icon-home.png';
import homeTabFill from '../../../assets/icon-home-fill.png';
import messageTab from '../../../assets/icon-message-circle.png';
import messageTabFill from '../../../assets/icon-message-circle-fill.png';
import editTab from '../../../assets/icon-edit.png';
import userTab from '../../../assets/icon-user.png';
import userTabFill from '../../../assets/icon-user-fill.png';

const TabMenu = ({ place }) => {
  const accountName = localStorage.getItem('accountname');

  return (
    <TabMenuSection>
      <h1 className='ir'>하단 탭 메뉴바</h1>
      <TabMenuInner>
        <TabMenuEachInner>
          <Link to='/'>
            <TabImg
              src={place === 'search' ? homeTabFill : homeTab}
              alt='홈 피드'
            />
            <EachTabSpan>홈</EachTabSpan>
          </Link>
        </TabMenuEachInner>
        <TabMenuEachInner>
          <Link to='/chatlist'>
            <TabImg
              src={place === 'chat' ? messageTabFill : messageTab}
              alt='채팅'
            />
            <EachTabSpan>채팅</EachTabSpan>
          </Link>
        </TabMenuEachInner>
        <TabMenuEachInner>
          <Link to='/upload'>
            <TabImg src={editTab} alt='게시물 작성' />
            <EachTabSpan>게시물 작성</EachTabSpan>
          </Link>
        </TabMenuEachInner>
        <TabMenuEachInner>
          <Link to={`/profile/${accountName}`}>
            <TabImg
              src={place === 'myprofile' ? userTabFill : userTab}
              alt='내 프로필'
            />
            <EachTabSpan>프로필</EachTabSpan>
          </Link>
        </TabMenuEachInner>
      </TabMenuInner>
    </TabMenuSection>
  );
};

export default TabMenu;
