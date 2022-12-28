import { useState } from 'react';
import {
  ProductWrapper,
  ProductSection,
  ProductTxt,
  ProductPrice,
  ProductCont,
} from './styled';
import ProductModal from '../ProductModal/ProductModal';

const CommonProduct = ({ data }) => {
  console.log(data);
  const [onModal, setModal] = useState(false);
  const ModalOpen = () => {
    setModal(!onModal);
  };
  return (
    <>
      <ProductWrapper>
        {data && data.length > 0 ? (
          <h1 className='productOnsale'>판매 중인 상품</h1>
        ) : null}
        <ProductSection>
          {data &&
            data.map((item) => (
              <ProductCont key={item.id} onClick={ModalOpen}>
                <img
                  src={item.itemImage}
                  alt='게시글 이미지'
                  className='img-product'
                />
                <ProductTxt>{item.itemName}</ProductTxt>
                <ProductPrice>
                  {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </ProductPrice>
              </ProductCont>
            ))}
        </ProductSection>
      </ProductWrapper>
      {onModal && data.map((item) => <ProductModal productId={item.id} />)}
    </>
  );
};

export default CommonProduct;
