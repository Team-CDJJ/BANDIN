import { Link } from 'react-router-dom';

import {
  TopChatNavSection,
  InnerChatNav,
  TopChatNavSpan,
  TopChatNavBtn,
} from './styled';

import arrowLeft from '../../../../assets/icon-arrow-left.png';
import moreVertical from '../../../../assets/icon-more-vertical.png';

const TopChatNav = () => {
  return (
    <TopChatNavSection>
      <h1 className='ir'>채팅방 상단바</h1>
      <InnerChatNav>
        {/* 경로 수정 필요 */}
        <Link to='/'>
          <img src={arrowLeft} alt='뒤로 가기' />
        </Link>
        <TopChatNavSpan>애월읍 위니브 감귤농장</TopChatNavSpan>
        <TopChatNavBtn>
          <img src={moreVertical} alt='더보기' />
        </TopChatNavBtn>
      </InnerChatNav>
    </TopChatNavSection>
  );
};

export default TopChatNav;
