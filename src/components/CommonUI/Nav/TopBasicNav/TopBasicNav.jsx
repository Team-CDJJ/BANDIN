import { useNavigate } from 'react-router-dom';

import {
  TopBasicNavSection,
  InnerBasicNav,
  PrevBtn,
  TopBasicNavBtn,
} from './styled';

import arrowLeft from '../../../../assets/icon-arrow-left.png';
import moreVertical from '../../../../assets/icon-more-vertical.png';

const TopBasicNav = ({ moreBtn }) => {
  const navigate = useNavigate();
  const handlePrev = () => {
    navigate(-1);
  };

  return (
    <TopBasicNavSection>
      <h1 className='ir'>상단바</h1>
      <InnerBasicNav>
        <PrevBtn onClick={handlePrev}>
          <img src={arrowLeft} alt='뒤로 가기' />
        </PrevBtn>
        {/* 기존에 있던 moreVertical 이미지 following과 follower에서 감추기 위함 */}
        {moreBtn ? null : (
          <TopBasicNavBtn>
            <img src={moreVertical} alt='더보기' />
          </TopBasicNavBtn>
        )}
      </InnerBasicNav>
    </TopBasicNavSection>
  );
};

export default TopBasicNav;
