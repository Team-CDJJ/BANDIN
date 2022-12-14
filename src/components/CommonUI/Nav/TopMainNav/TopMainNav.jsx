import { Link } from 'react-router-dom';

import {
  TopMainNavSection,
  TopMainNavInner,
  TopMainNavSpan,
  MainSearchBtn,
} from './styled';

import commentProfile from '../../../../assets/icon-search.png';

const TopMainNav = () => {
  return (
    <TopMainNavSection>
      <h1 className='ir'>메인 화면과 검색</h1>
      <TopMainNavInner>
        <TopMainNavSpan>감귤마켓 피드</TopMainNavSpan>
        <MainSearchBtn>
          <img src={commentProfile} alt='' />
        </MainSearchBtn>
      </TopMainNavInner>
    </TopMainNavSection>
  );
};

export default TopMainNav;
