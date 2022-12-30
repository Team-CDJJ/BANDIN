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
  ProductModalArticle,
  ProductModalText,
  ModalBtnWrapper,
} from './styled';
import DeleteAlert from '../DeleteAlert/DeleteAlert';

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

export const ProductModal = ({ productId, setModal, productLink }) => {
  const [onAlert, setOnAlert] = useState(false);
  const AlertOpen = () => {
    setOnAlert(!onAlert);
  };
  const handleCancel = () => {
    setOnAlert(false);
    setModal(false);
  };
  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <>
      <ProductModalArticle onClick={handleCloseModal}>
        <h2 className='ir'>모달창</h2>
        <GrayLine />
        <ModalBtnWrapper type='button' onClick={(e) => e.stopPropagation()}>
          <ProductModalText onClick={AlertOpen}>삭제</ProductModalText>
          <Link to={`/product/${productId}/modify`}>
            <ProductModalText>수정</ProductModalText>
          </Link>
          <a href={productLink} target='_blank' rel='noopener noreferrer'>
            <ProductModalText>웹사이트에서 상품 보기</ProductModalText>
          </a>
        </ModalBtnWrapper>
      </ProductModalArticle>
      {onAlert && (
        <DeleteAlert productId={productId} handleCancel={handleCancel} />
      )}
    </>
  );
};

export const PostVerticalModal = ({ setModalOpen, isMyPost }) => {
  const [onAlert, setOnAlert] = useState(false);
  const AlertOpen = () => {
    setOnAlert(!onAlert);
  };

  // 모달 외부 클릭 시 끄기 처리
  const modalRef = useRef(null);
  console.log(modalRef);

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
        {isMyPost ? (
          <>
            <CommentModalText onClick={AlertOpen}>삭제</CommentModalText>
            <CommentModalText>수정</CommentModalText>
          </>
        ) : (
          <CommentModalText onClick={AlertOpen}>신고</CommentModalText>
        )}
      </PostModalArticle>
      {onAlert && <DeletePost />}
    </ModalBackGround>
  );
};

export const DeletePost = ({ isMyPost }) => {
  return (
    <AlertWrapper>
      {isMyPost ? (
        <>
          <AlertTxt>상품을 삭제할까요?</AlertTxt>
          <BtnsWrapper>
            <ModalBtn type='button'>취소</ModalBtn>
            <ModalBtn type='button'>삭제</ModalBtn>
          </BtnsWrapper>
        </>
      ) : (
        <>
          <AlertTxt>게시글을 신고 할까요?</AlertTxt>
          <BtnsWrapper>
            <ModalBtn type='button'>취소</ModalBtn>
            <ModalBtn type='button' onClick={console.log(`dd`)}>
              신고
            </ModalBtn>
          </BtnsWrapper>
        </>
      )}
    </AlertWrapper>
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
        <CommentModalText>설정 및 개인정보</CommentModalText>
        <CommentModalText onClick={handleLogout}>로그아웃</CommentModalText>
      </PostModalArticle>
      {onAlert && <DeletePost />}
    </ModalBackGround>
  );
};
