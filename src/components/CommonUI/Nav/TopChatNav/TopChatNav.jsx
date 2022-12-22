import { useNavigate } from 'react-router-dom';

import {
  TopChatNavSection,
  InnerChatNav,
  PrevBtn,
  TopChatNavSpan,
  TopChatNavBtn,
} from './styled';

import arrowLeft from '../../../../assets/icon-arrow-left.png';
import moreVertical from '../../../../assets/icon-more-vertical.png';

// ChatRoom과 연결
const TopChatNav = ({ title }) => {
  const navigate = useNavigate();
  const handlePrev = () => {
    navigate(-1);
  };

  return (
    <TopChatNavSection>
      <h1 className='ir'>채팅방 상단바</h1>
      <InnerChatNav>
        <PrevBtn onClick={handlePrev}>
          <img src={arrowLeft} alt='뒤로 가기' />
        </PrevBtn>
        <TopChatNavSpan>{title}</TopChatNavSpan>
        <TopChatNavBtn>
          <img src={moreVertical} alt='더보기' />
        </TopChatNavBtn>
      </InnerChatNav>
    </TopChatNavSection>
  );
};

export default TopChatNav;
