import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ProductModalArticle, GrayLine, ModalInnerText } from './styled';
import DeleteAlert from '../DeleteAlert/DeleteAlert';

const ProductModal = ({ productId }) => {
  const [onAlert, setOnAlert] = useState(false);
  const AlertOpen = () => {
    setOnAlert(!onAlert);
  };
  return (
    <>
      <ProductModalArticle>
        <h2 className='ir'>모달창</h2>
        <GrayLine />
        <ModalInnerText onClick={AlertOpen}>삭제</ModalInnerText>
        <Link to={`/product/${productId}/modify`}>
          <ModalInnerText>수정</ModalInnerText>
        </Link>
        <ModalInnerText>웹사이트에서 상품 보기</ModalInnerText>
      </ProductModalArticle>
      {onAlert && <DeleteAlert />}
    </>
  );
};

export default ProductModal;
