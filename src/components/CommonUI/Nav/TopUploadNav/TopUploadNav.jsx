import { useNavigate } from 'react-router-dom';

import { TopUploadNavSection, TopUploadInnerWrapper, PrevBtn } from './styled';

import arrowLeft from '../../../../assets/icon-arrow-left.png';
import Button from '../../../atoms/Button/Button';

const TopUploadNav = ({ state, disabled, onClick }) => {
  const navigate = useNavigate();
  const handlePrev = () => {
    navigate(-1);
  };

  return (
    <TopUploadNavSection>
      <h1 className='ir'>업로드 상단바</h1>
      <TopUploadInnerWrapper>
        <PrevBtn onClick={handlePrev}>
          <img src={arrowLeft} alt='뒤로 가기' />
        </PrevBtn>
        <Button
          type='submit'
          size='sm'
          state={state}
          disabled={disabled}
          tit='저장'
          onClick={onClick}
        ></Button>
      </TopUploadInnerWrapper>
    </TopUploadNavSection>
  );
};

export default TopUploadNav;
