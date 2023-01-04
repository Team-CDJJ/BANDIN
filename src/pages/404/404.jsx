import { useNavigate } from 'react-router-dom';
import {
  NotFoundSection,
  NotFoundSectionTitle,
  NotFoundTxt,
  NotFoundImg,
} from './styled';
import Button from '../../components/atoms/Button/Button';
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
      <Button
        type='button'
        size='md, lg'
        tit='이전 페이지'
        onClick={handlePrevPage}
      ></Button>
    </NotFoundSection>
  );
};

export default NotFound;
