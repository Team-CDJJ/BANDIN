import { ProductWrap, ProductTxt, ProductPrice } from './styled';
import Product from '../../../assets/product.png';

const CommonProduct = () => {
  return (
    <ProductWrap>
      <img src={Product} alt='게시글 이미지' className='img-product' />
      <ProductTxt>애월읍 노지 감귤</ProductTxt>
      <ProductPrice>35,000원</ProductPrice>
    </ProductWrap>
  );
};

export default CommonProduct;
