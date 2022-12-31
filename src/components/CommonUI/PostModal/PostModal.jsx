import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  PostModalArticle,
  GrayLine,
  ModalInnerText,
  ModalBackGround,
} from '../../modal/styled';
import DeletePost from '../../modal/PostModal/PostAlert';

export const PostChatModal = ({ leaveChatRoom }) => {
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

export const CommentModal = ({ content, onClickDelete }) => {
  return (
    <PostModalArticle>
      <h1 className='ir'>모달창</h1>
      <GrayLine />
      <ModalInnerText onClick={onClickDelete}>{content}</ModalInnerText>
    </PostModalArticle>
  );
};

export const NavVerticalModal = ({ setModalOpen }) => {
  const [onAlert, setOnAlert] = useState(false);
  const navigate = useNavigate();

  // 모달 외부 클릭 시 끄기 처리
  const modalRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('accountname');
    localStorage.removeItem('recoil-persist');
    navigate('/');
    window.location.reload();
  };

  return (
    <ModalBackGround>
      <PostModalArticle ref={modalRef}>
        <h2 className='ir'>모달창</h2>
        <GrayLine />
        <ModalInnerText>설정 및 개인정보</ModalInnerText>
        <ModalInnerText onClick={handleLogout}>로그아웃</ModalInnerText>
      </PostModalArticle>
      {onAlert && <DeletePost />}
    </ModalBackGround>
  );
};
