import { useState } from 'react';
import ProductModal from '../../modal/ProductModal/ProductModal';
import {
  ProductWrapper,
  ProductSection,
  ProductTxt,
  ProductPrice,
  ProductCont,
} from './styled';

const CommonProduct = ({ data }) => {
  const accountName = localStorage.getItem('accountname');
  const [onModal, setModal] = useState(false);
  const [productId, setProductId] = useState(null);
  const [productLink, setProductLink] = useState(null);
  const [productAuthor, setProductAuthor] = useState(null);

  const ModalOpen = (item) => {
    setModal(!onModal);
    setProductId(item.id);
    setProductLink(item.link);
    setProductAuthor(item.author.accountname);
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
              <ProductCont
                key={item.id}
                onClick={() => {
                  ModalOpen(item);
                }}
              >
                <img
                  src={item.itemImage}
                  alt='게시글 이미지'
                  className='img-product'
                />
                <ProductTxt>{item.itemName}</ProductTxt>
                <ProductPrice>
                  {`${item.price.toLocaleString()}원`}
                </ProductPrice>
              </ProductCont>
            ))}
        </ProductSection>
      </ProductWrapper>
      {onModal && (
        <ProductModal
          productId={productId}
          setModal={setModal}
          onModal={onModal}
          productLink={productLink}
        />
      )}
    </>
  );
};

export default CommonProduct;
