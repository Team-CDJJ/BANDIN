import { Link } from 'react-router-dom';

import DropDown from '../../DropDown/DropDown';

import { TopMainNavSection, TopMainNavInner, MainSearchBtn } from './styled';

import commentProfile from '../../../../assets/icon-search.png';
import logoSmall from '../../../../assets/logo-small.png';

const TopMainNav = () => {
  return (
    <>
      <DropDown />
      <TopMainNavSection>
        <h1 className='ir'>메인 화면과 검색</h1>
        <TopMainNavInner>
          <Link to='/'>
            <img className='logo-img' src={logoSmall} alt='밴딘 로고' />
          </Link>
          <MainSearchBtn>
            <Link to='/search'>
              <img src={commentProfile} alt='돋보기 검색 아이콘' />
            </Link>
          </MainSearchBtn>
        </TopMainNavInner>
      </TopMainNavSection>
    </>
  );
};

export default TopMainNav;
