import { Link } from 'react-router-dom';

import DropDown from '../../DropDown/DropDown';

import {
  TopContainer,
  TopMainNavSection,
  TopMainNavInner,
  TopMainNavSpan,
  MainSearchBtn,
} from './styled';

import commentProfile from '../../../../assets/icon-search.png';
import logoSmall from '../../../../assets/logo-small.png';

const TopMainNav = () => {
  return (
    <>
      <DropDown />
      <TopContainer>
        <TopMainNavSection>
          <h1 className='ir'>메인 화면과 검색</h1>
          <TopMainNavInner>
            <TopMainNavSpan>
              <img src={logoSmall} alt='밴딘 로고' />
            </TopMainNavSpan>
            <MainSearchBtn>
              <Link to='/search'>
                <img src={commentProfile} alt='돋보기 검색 아이콘' />
              </Link>
            </MainSearchBtn>
          </TopMainNavInner>
        </TopMainNavSection>
      </TopContainer>
    </>
  );
};

export default TopMainNav;
