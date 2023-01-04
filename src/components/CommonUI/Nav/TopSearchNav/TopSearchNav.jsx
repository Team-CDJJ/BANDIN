import { useNavigate } from 'react-router-dom';

import {
  TopSearchNavSection,
  TopSearchInnerWrapper,
  PrevBtn,
  TopSearchNavInput,
} from './styled';

import arrowLeft from '../../../../assets/icon-arrow-left.png';

const TopSearchNav = ({ onChangeGetInput }) => {
  const navigate = useNavigate();
  const handlePrev = () => {
    navigate(-1);
  };

  return (
    <TopSearchNavSection>
      <h1 className='ir'>검색 상단바</h1>
      <TopSearchInnerWrapper>
        <PrevBtn onClick={handlePrev}>
          <img src={arrowLeft} alt='뒤로 가기' />
        </PrevBtn>
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
