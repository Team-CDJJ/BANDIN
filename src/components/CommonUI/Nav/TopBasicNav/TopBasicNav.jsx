import { Link } from 'react-router-dom';

import { TopBasicNavSection, InnerBasicNav, TopBasicNavBtn } from './styled';

import arrowLeft from '../../../../assets/icon-arrow-left.png';
import moreVertical from '../../../../assets/icon-more-vertical.png';

const TopBasicNav = ({ moreBtn }) => {
  return (
    <TopBasicNavSection>
      <h1 className='ir'>기본 상단바</h1>
      <InnerBasicNav>
        {/* 경로 수정 필요 */}
        <Link to='/'>
          <img src={arrowLeft} alt='뒤로 가기' />
        </Link>
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
