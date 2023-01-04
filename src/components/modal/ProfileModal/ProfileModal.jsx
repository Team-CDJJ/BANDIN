import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PostModalArticle,
  GrayLine,
  ModalInnerText,
  ModalBackGround,
} from '../styled';
import ProfileAlert from './ProfileAlert';

const ProfileModal = ({ setIsModalOpen }) => {
  const [onAlert, setOnAlert] = useState(false);
  const navigate = useNavigate();

  const handleAlertOpen = () => {
    setOnAlert(!onAlert);
  };

  const handleAlertClose = () => {
    setOnAlert(false);
    setIsModalOpen(false);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('accountname');
    localStorage.removeItem('recoil-persist');
    navigate('/');
    window.location.reload();
  };

  return (
    <ModalBackGround onClick={handleModalClose}>
      <PostModalArticle onClick={(e) => e.stopPropagation()}>
        <h2 className='ir'>모달창</h2>
        <GrayLine />
        <ModalInnerText>설정 및 개인정보</ModalInnerText>
        <ModalInnerText onClick={handleAlertOpen}>로그아웃</ModalInnerText>
      </PostModalArticle>
      {onAlert && (
        <ProfileAlert
          handleAlertClose={handleAlertClose}
          handleLogout={handleLogout}
        />
      )}
    </ModalBackGround>
  );
};

export default ProfileModal;
