import { useState } from 'react';
import TopUploadNav from '../../components/CommonUI/Nav/TopUploadNav/TopUploadNav';
import { AddProductSection, AddImageDesc, AddProductForm } from './styled';
import AddProductInput from '../../components/modules/AddProductInput/AddProductInput';
import InputBox from '../../components/atoms/InputBox/Input';

const AddProduct = () => {
  const [productImage, setProductImage] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [salesLink, setSalesLink] = useState('');

  const handleData = (event) => {
    if (event.target.id === 'productName') {
      setProductName(event.target.value);
    } else if (event.target.id === 'productPrice') {
      setProductPrice(event.target.value);
    } else if (event.target.id === 'salesLink') {
      setSalesLink(event.target.value);
    }
  };
  return (
    <>
      <TopUploadNav />
      <AddProductSection>
        <h1 className='ir'>상품 등록 페이지</h1>
        <AddProductForm action=''>
          <AddImageDesc>이미지등록</AddImageDesc>
          <AddProductInput />
          <InputBox
            label='상품명'
            type='text'
            id='productName'
            placeholder='2~15자 이내여야 합니다.'
            value={productName}
            onChange={handleData}
            required
          />
          <InputBox
            label='가격'
            type='number'
            id='productPrice'
            placeholder='숫자만 입력 가능합니다.'
            value={productPrice}
            onChange={handleData}
            required
          />
          <InputBox
            label='판매 링크'
            type='url'
            id='salesLink'
            placeholder='URL을 입력해 주세요.'
            value={salesLink}
            onChange={handleData}
            required
          />
        </AddProductForm>
      </AddProductSection>
    </>
  );
};

export default AddProduct;
