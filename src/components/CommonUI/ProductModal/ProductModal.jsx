import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  ProductModalArticle,
  GrayLine,
  ModalInnerText,
  ModalBtnWrap,
} from './styled';
import DeleteAlert from '../DeleteAlert/DeleteAlert';

const ProductModal = ({ productId, setModal, onModal }) => {
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
          <ModalInnerText onClick={AlertOpen}>삭제</ModalInnerText>
          <Link to={`/product/${productId}/modify`}>
            <ModalInnerText>수정</ModalInnerText>
          </Link>
          <ModalInnerText>웹사이트에서 상품 보기</ModalInnerText>
        </ModalBtnWrap>
      </ProductModalArticle>
      {onAlert && (
        <DeleteAlert productId={productId} handleCancel={handleCancel} />
      )}
    </>
  );
};

export default ProductModal;
