import { AlertWrapper, AlertTxt, BtnsWrapper, ModalBtn } from '../styled';

const ProfileAlert = ({ handleLogout, handleCancel }) => {
  return (
    <AlertWrapper>
      <AlertTxt>로그아웃 하시겠어요?</AlertTxt>
      <BtnsWrapper>
        <ModalBtn type='button' onClick={handleCancel}>
          취소
        </ModalBtn>
        <ModalBtn type='button' onClick={handleLogout}>
          로그아웃
        </ModalBtn>
      </BtnsWrapper>
    </AlertWrapper>
  );
};

export default ProfileAlert;
