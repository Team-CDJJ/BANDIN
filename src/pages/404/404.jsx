import error404 from '../../assets/404.png';
import {
  ErrorSection,
  ErrorTitle,
  ErrorTxt,
  PrevButton,
  Error404Img,
} from './styled';

const NotFound = () => {
  return (
    <ErrorSection>
      <ErrorTitle>
        <Error404Img src={error404} alt='404 에러 이미지' />
      </ErrorTitle>

      <ErrorTxt>페이지를 찾을 수 없습니다. :(</ErrorTxt>
      <PrevButton type='button'>이전 페이지</PrevButton>
    </ErrorSection>
  );
};

export default NotFound;
