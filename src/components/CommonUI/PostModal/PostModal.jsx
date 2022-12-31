import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  PostModalArticle,
  GrayLine,
  ModalInnerText,
  CommentModalContainer,
  CommentModalText,
  ProductModalArticle,
  ModalBtnWrap,
  ProductModalText,
  WebModalArticle,
} from './styled';
import DeleteAlert from '../DeleteAlert/DeleteAlert';

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

// 상품수정 모달
const ProductModal = ({ productId, setModal, onModal, productLink }) => {
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
        <ModalBtnWrap type='button' onClick={(e) => e.stopPropagation()}>
          <ProductModalText onClick={AlertOpen}>삭제</ProductModalText>
          <Link to={`/product/${productId}/modify`}>
            <ProductModalText>수정</ProductModalText>
          </Link>
          <a href={productLink} target='_blank' rel='noopener noreferrer'>
            <ProductModalText>웹사이트에서 상품 보기</ProductModalText>
          </a>
        </ModalBtnWrap>
      </ProductModalArticle>
      {onAlert && (
        <DeleteAlert productId={productId} handleCancel={handleCancel} />
      )}
    </>
  );
};
// 웹사이트로 다른유저 상품 보는 모달
const WebLinkModal = ({ setModal, productLink }) => {
  const handleCloseModal = () => {
    setModal(false);
  };
  return (
    <WebModalArticle onClick={handleCloseModal}>
      <h2 className='ir'>모달창</h2>
      <GrayLine />
      <a href={productLink} target='_blank' rel='noopener noreferrer'>
        <ProductModalText>웹사이트에서 상품 보기</ProductModalText>
      </a>
    </WebModalArticle>
  );
};

export { PostChatModal, CommentModal, ProductModal, WebLinkModal };
