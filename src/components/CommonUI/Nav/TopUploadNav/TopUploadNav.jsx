import { Link } from 'react-router-dom';

import {
  TopUploadNavSection,
  TopUploadInnerWrapper,
  TopUploadBtn,
} from './styled';

import arrowLeft from '../../../../assets/icon-arrow-left.png';
import Button from '../../../atoms/Button/Button';

const TopUploadNav = () => {
  return (
    <TopUploadNavSection>
      <h1 className='ir'>업로드 상단바</h1>
      <TopUploadInnerWrapper>
        {/* 경로 수정 필요 */}
        <Link to='/'>
          <img src={arrowLeft} alt='뒤로 가기' />
        </Link>
        <Button
          type='submit'
          size='sm'
          state='disabled'
          disabled='disabled'
          tit='저장'
        ></Button>
      </TopUploadInnerWrapper>
    </TopUploadNavSection>
  );
};

export default TopUploadNav;
