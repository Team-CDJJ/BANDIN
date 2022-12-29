import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  PostModalArticle,
  GrayLine,
  ModalInnerText,
  CommentModalContainer,
  CommentModalText,
  ModalBackGround,
  AlertWrapper,
  AlertTxt,
  BtnsWrapper,
  ModalBtn,
} from './styled';

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
    <CommentModalContainer>
      <h1 className='ir'>모달창</h1>
      <GrayLine />
      <CommentModalText onClick={onClickDelete}>{content}</CommentModalText>
    </CommentModalContainer>
  );
};

export const PostVerticalModal = ({ setModalOpen }) => {
  const [onAlert, setOnAlert] = useState(false);
  const AlertOpen = () => {
    setOnAlert(!onAlert);
  };

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

  return (
    <ModalBackGround>
      <PostModalArticle ref={modalRef}>
        <h2 className='ir'>모달창</h2>
        <GrayLine />
        <CommentModalText onClick={AlertOpen}>삭제</CommentModalText>
        <CommentModalText>수정</CommentModalText>
      </PostModalArticle>
      {onAlert && <DeleteAlert />}
    </ModalBackGround>
  );
};

export const DeleteAlert = () => {
  return (
    <AlertWrapper>
      <AlertTxt>상품을 삭제할까요?</AlertTxt>
      <BtnsWrapper>
        <ModalBtn type='button'>취소</ModalBtn>
        <ModalBtn type='button'>삭제</ModalBtn>
      </BtnsWrapper>
    </AlertWrapper>
  );
};
