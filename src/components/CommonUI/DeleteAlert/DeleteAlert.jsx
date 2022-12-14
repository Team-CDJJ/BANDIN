import { AlertWrapper, AlertTxt, BtnsWrapper, ModalBtn } from './styled';

const DeleteAlert = () => {
  return (
    <AlertWrapper>
      <AlertTxt>상품을 삭제할까요?</AlertTxt>
      <BtnsWrapper>
        <ModalBtn type='button'>취소</ModalBtn>
        <ModalBtn type='button'>삭제</ModalBtn>
      </BtnsWrapper>
    </AlertWrapper>
  );
};

export default DeleteAlert;
