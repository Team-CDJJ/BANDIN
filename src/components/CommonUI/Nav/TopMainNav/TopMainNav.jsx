import { Link } from 'react-router-dom';

import DropDown from '../../DropDown/DropDown';

import {
  TopMainNavSection,
  // TopMainNavInner,
  TopMainNavSpan,
  // MainSearchBtn,
} from './styled';

import commentProfile from '../../../../assets/icon-search.png';
import logoSmall from '../../../../assets/logo-small.png';

const TopMainNav = () => {
  return (
    // <TopContainer>
    <TopMainNavSection>
      <h1 className='ir'>메인 화면과 검색</h1>
      <TopMainNavSpan>
        <img src={logoSmall} alt='밴딘 로고' />
      </TopMainNavSpan>
      <DropDown />
      <TopMainNavSpan>
        <Link to='/search'>
          <img src={commentProfile} alt='돋보기 검색 아이콘' />
        </Link>
      </TopMainNavSpan>
    </TopMainNavSection>
    // </TopContainer>
  );
};

export default TopMainNav;
