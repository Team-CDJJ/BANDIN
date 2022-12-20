import { Link } from 'react-router-dom';
import { PostModalArticle, GrayLine, LeaveChatRoom } from './styled';

const PostModal = () => {
  return (
    <PostModalArticle>
      <h1 className='ir'>채팅방 나가기 모달창</h1>
      <GrayLine></GrayLine>
      <Link to='/chatlist'>
        <LeaveChatRoom>채팅방 나가기</LeaveChatRoom>
      </Link>
    </PostModalArticle>
  );
};

export default PostModal;
