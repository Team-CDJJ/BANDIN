import {
  PostModalArticle,
  GrayLine,
  ModalInnerText,
  ModalBackGround,
} from '../styled';

const CommentModal = ({ content, setIsModalOpen, onClickDelete }) => {
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalBackGround onClick={handleModalClose}>
      <PostModalArticle>
        <h1 className='ir'>모달창</h1>
        <GrayLine />
        <ModalInnerText onClick={onClickDelete}>{content}</ModalInnerText>
      </PostModalArticle>
    </ModalBackGround>
  );
};

export default CommentModal;
