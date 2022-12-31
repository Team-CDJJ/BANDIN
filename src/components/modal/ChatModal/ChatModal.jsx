import { Link } from 'react-router-dom';
import {
  PostModalArticle,
  GrayLine,
  ModalInnerText,
  ModalBackGround,
} from '../styled';

const ChatRoomModal = ({ leaveChatRoom }) => {
  // 채팅방 나가기
  return (
    <ModalBackGround>
      <PostModalArticle>
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
