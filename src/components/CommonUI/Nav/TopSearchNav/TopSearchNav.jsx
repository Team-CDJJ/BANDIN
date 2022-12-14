import { Link } from 'react-router-dom';

import {
  TopSearchNavSection,
  TopSearchInnerWrapper,
  TopSearchNavInput,
} from './styled';

import arrowLeft from '../../../../assets/icon-arrow-left.png';

const TopSearchNav = () => {
  return (
    <TopSearchNavSection>
      <h1 className='ir'>검색 상단바</h1>
      <TopSearchInnerWrapper>
        {/* 경로 수정 필요 */}
        <Link to='/'>
          <img src={arrowLeft} alt='' />
        </Link>
        <TopSearchNavInput type='text' placeholder='계정 검색' />
      </TopSearchInnerWrapper>
    </TopSearchNavSection>
  );
};

export default TopSearchNav;
