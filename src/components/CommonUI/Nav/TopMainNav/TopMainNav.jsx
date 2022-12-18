import { Link } from 'react-router-dom';

import {
  TopMainNavSection,
  TopMainNavInner,
  TopMainNavSpan,
  MainSearchBtn,
} from './styled';

import commentProfile from '../../../../assets/icon-search.png';
import logoSmall from '../../../../assets/logo-small.png';

const TopMainNav = () => {
  return (
    <TopMainNavSection>
      <h1 className='ir'>메인 화면과 검색</h1>
      <TopMainNavInner>
        <TopMainNavSpan>
          <img src={logoSmall} alt='' />
        </TopMainNavSpan>
        <MainSearchBtn>
          <Link to='/search'>
            <img src={commentProfile} alt='' />
          </Link>
        </MainSearchBtn>
      </TopMainNavInner>
    </TopMainNavSection>
  );
};

export default TopMainNav;
