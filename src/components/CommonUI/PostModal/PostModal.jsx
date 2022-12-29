import { Link } from 'react-router-dom';
import {
  PostModalArticle,
  GrayLine,
  ModalInnerText,
  CommentModalContainer,
  CommentModalText,
} from './styled';

const PostChatModal = ({ leaveChatRoom }) => {
  // 채팅방 나가기
  return (
    <PostModalArticle>
      <h1 className='ir'>모달창</h1>
      <GrayLine />
      <Link to='/chatlist'>
        <ModalInnerText>{leaveChatRoom}</ModalInnerText>
      </Link>
    </PostModalArticle>
  );
};

const CommentModal = ({ content, onClickDelete }) => {
  return (
    <CommentModalContainer>
      <h1 className='ir'>모달창</h1>
      <GrayLine />
      <CommentModalText onClick={onClickDelete}>{content}</CommentModalText>
    </CommentModalContainer>
  );
};

export { PostChatModal, CommentModal };
