import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  PostModalArticle,
  GrayLine,
  ModalInnerText,
  ModalBackGround,
} from '../styled';
import ProductAlert from './ProductAlert';

const ProductModal = ({ productId, setModal, productLink }) => {
  const [onAlert, setOnAlert] = useState(false);
  const handleAlertOpen = () => {
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
    <ModalBackGround onClick={handleCloseModal}>
      <PostModalArticle onClick={(e) => e.stopPropagation()}>
        <h2 className='ir'>모달창</h2>
        <GrayLine />
        <ModalInnerText onClick={handleAlertOpen}>삭제</ModalInnerText>
        <Link to={`/product/${productId}/modify`}>
          <ModalInnerText>수정</ModalInnerText>
        </Link>
        <a href={productLink} target='_blank' rel='noopener noreferrer'>
          <ModalInnerText>웹사이트에서 상품 보기</ModalInnerText>
        </a>
      </PostModalArticle>
      {onAlert && (
        <ProductAlert productId={productId} handleCancel={handleCancel} />
      )}
    </ModalBackGround>
  );
};

export default ProductModal;
