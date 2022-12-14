import { Link } from 'react-router-dom';

import { TopBasicNavSection, InnerBasicNav, TopBasicNavBtn } from './styled';

import arrowLeft from '../../../../assets/icon-arrow-left.png';
import moreVertical from '../../../../assets/icon-more-vertical.png';

const TopBasicNav = () => {
  return (
    <TopBasicNavSection>
      <h1 className='ir'>기본 상단바</h1>
      <InnerBasicNav>
        {/* 경로 수정 필요 */}
        <Link to='/'>
          <img src={arrowLeft} alt='' />
        </Link>
        <TopBasicNavBtn>
          <img src={moreVertical} alt='' />
        </TopBasicNavBtn>
      </InnerBasicNav>
    </TopBasicNavSection>
  );
};

export default TopBasicNav;
