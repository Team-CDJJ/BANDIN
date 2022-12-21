import { Link } from 'react-router-dom';

import {
  TopSearchNavSection,
  TopSearchInnerWrapper,
  TopSearchNavInput,
} from './styled';

import arrowLeft from '../../../../assets/icon-arrow-left.png';

const TopSearchNav = ({ onChangeGetInput }) => {
  return (
    <TopSearchNavSection>
      <h1 className='ir'>검색 상단바</h1>
      <TopSearchInnerWrapper>
        <Link to='/home'>
          <img src={arrowLeft} alt='뒤로 가기' />
        </Link>
        <TopSearchNavInput
          type='text'
          placeholder='계정 검색'
          onChange={onChangeGetInput}
        />
      </TopSearchInnerWrapper>
    </TopSearchNavSection>
  );
};

export default TopSearchNav;
