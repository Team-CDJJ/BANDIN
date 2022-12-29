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

// export const YourProfileModal = () => {
//   return (
//     <PostModalArticle>
//       <h1 className='ir'>모달창</h1>
//       <GrayLine />
//       <Link to='/chatlist'>
//         <ModalInnerText>설정 및 개인 정보</ModalInnerText>
//         <ModalInnerText>프로필 설정</ModalInnerText>
//         <ModalInnerText>로그아웃</ModalInnerText>
//       </Link>
//     </PostModalArticle>
//   );
// };

// export const MyProfilePostModal = () => {
//   return (
//     <PostModalArticle>
//       <h1 className='ir'>모달창</h1>
//       <GrayLine />
//       <Link to='/chatlist'>
//         <ModalInnerText>삭제</ModalInnerText>
//         <ModalInnerText>수정</ModalInnerText>
//       </Link>
//     </PostModalArticle>
//   );
// };

// export const MyProfileProductModal = () => {
//   return (
//     <PostModalArticle>
//       <h1 className='ir'>모달창</h1>
//       <GrayLine />
//       <Link to='/chatlist'>
//         <ModalInnerText>삭제</ModalInnerText>
//         <ModalInnerText>수정</ModalInnerText>
//         <ModalInnerText>웹사이트에서 상품 보기</ModalInnerText>
//       </Link>
//     </PostModalArticle>
//   );
// };

// export const MyProfileProductModal = () => {
//   return (
//     <PostModalArticle>
//       <h1 className='ir'>모달창</h1>
//       <GrayLine />
//       <Link to='/chatlist'>
//         <ModalInnerText>신고하기</ModalInnerText>
//       </Link>
//     </PostModalArticle>
//   );
// };

// export const MyProfileProductModal = () => {
//   return (
//     <PostModalArticle>
//       <h1 className='ir'>모달창</h1>
//       <GrayLine />
//       <Link to='/chatlist'>
//         <ModalInnerText>삭제</ModalInnerText>
//       </Link>
//     </PostModalArticle>
//   );
// };
