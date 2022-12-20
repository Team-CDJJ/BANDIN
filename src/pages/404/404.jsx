import { useNavigate } from 'react-router-dom';
import {
  NotFoundSection,
  NotFoundSectionTitle,
  NotFoundTxt,
  PrevButton,
  NotFoundImg,
} from './styled';
import error404 from '../../assets/404.png';

const NotFound = () => {
  const navigate = useNavigate();
  const handlePrevPage = () => {
    navigate(-1);
  };

  return (
    <NotFoundSection>
      <NotFoundSectionTitle>
        <NotFoundImg src={error404} alt='404 에러 이미지' />
      </NotFoundSectionTitle>
      <NotFoundTxt>페이지를 찾을 수 없습니다. :(</NotFoundTxt>
      <PrevButton type='button' onClick={handlePrevPage}>
        이전 페이지
      </PrevButton>
    </NotFoundSection>
  );
};

export default NotFound;
