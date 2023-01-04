import { useState } from 'react';
import {
  PostModalArticle,
  GrayLine,
  ModalInnerText,
  ModalBackGround,
} from '../styled';
import CommentAlert from './CommentAlert';

const CommentModal = ({ content, setIsModalOpen, onClickDelete }) => {
  const [isAlert, setIsAlert] = useState(false);
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const onClickButton = () => {
    setIsAlert(true);
  };

  return (
    <ModalBackGround onClick={handleModalClose}>
      <PostModalArticle onClick={(e) => e.stopPropagation()}>
        <h1 className='ir'>모달창</h1>
        <GrayLine />
        <ModalInnerText onClick={onClickButton}>{content}</ModalInnerText>
      </PostModalArticle>
      {isAlert && (
        <CommentAlert
          content={content}
          onClickDelete={onClickDelete}
          handleAlertClose={handleModalClose}
        />
      )}
    </ModalBackGround>
  );
};

export default CommentModal;
