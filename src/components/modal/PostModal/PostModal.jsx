import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  PostModalArticle,
  GrayLine,
  ModalInnerText,
  ModalBackGround,
} from '../styled';
import PostAlert from './PostAlert';

const PostModal = ({ setIsModalOpen, id, isMyPost }) => {
  const [onAlert, setOnAlert] = useState(false);
  const navigate = useNavigate();
  const postId = id;

  const handleAlertOpen = () => {
    setOnAlert(!onAlert);
  };

  const handleAlertColse = () => {
    setOnAlert(false);
    setIsModalOpen(false);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleToEdit = () => {
    navigate(`/editpost/${postId}`);
  };

  return (
    <ModalBackGround onClick={handleModalClose}>
      <PostModalArticle onClick={(e) => e.stopPropagation()}>
        <h2 className='ir'>모달창</h2>
        <GrayLine />
        {isMyPost ? (
          <>
            <ModalInnerText onClick={handleAlertOpen}>삭제</ModalInnerText>
            <ModalInnerText onClick={handleToEdit}>수정</ModalInnerText>
          </>
        ) : (
          <ModalInnerText onClick={handleAlertOpen}>신고</ModalInnerText>
        )}
      </PostModalArticle>
      {onAlert && (
        <PostAlert
          handleAlertColse={handleAlertColse}
          id={id}
          isMyPost={isMyPost}
        />
      )}
    </ModalBackGround>
  );
};

export default PostModal;
