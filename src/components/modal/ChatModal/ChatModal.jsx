import { Link } from 'react-router-dom';
import {
  PostModalArticle,
  GrayLine,
  ModalInnerText,
  ModalBackGround,
} from '../styled';

const ChatRoomModal = ({ leaveChatRoom, setIsModalOpen }) => {
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalBackGround onClick={handleModalClose}>
      <PostModalArticle onClick={(e) => e.stopPropagation()}>
        <h1 className='ir'>모달창</h1>
        <GrayLine />
        <Link to='/chatlist'>
          <ModalInnerText>{leaveChatRoom}</ModalInnerText>
        </Link>
      </PostModalArticle>
    </ModalBackGround>
  );
};

export default ChatRoomModal;
