import { AlertWrapper, AlertTxt, BtnsWrapper, ModalBtn } from '../styled';

const CommentAlert = ({ content, handleAlertClose, onClickDelete }) => {
  return (
    <AlertWrapper>
      <AlertTxt>{`댓글을 ${content}할까요?`}</AlertTxt>
      <BtnsWrapper onClick={(e) => e.stopPropagation()}>
        <ModalBtn type='button' onClick={handleAlertClose}>
          취소
        </ModalBtn>
        <ModalBtn type='button' onClick={onClickDelete}>
          {content}
        </ModalBtn>
      </BtnsWrapper>
    </AlertWrapper>
  );
};

export default CommentAlert;
