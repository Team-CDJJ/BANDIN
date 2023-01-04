import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { apiUrl } from '../../../api/api';
import Img from '../../atoms/Img/img';

import { ProductImgInputWrapper, UploadBtn } from './styled';
import postUploadImg from '../../../api/uploadImg/postUploadImg';
import noneProductImage from '../../../assets/product.png';

const ProductImgInput = ({ setNewItemImage, itemImage, newItemImage }) => {
  const fileInput = useRef(null);
  const location = useLocation();

  const handleUploadBtnClick = (e) => {
    e.preventDefault();
    fileInput.current.click();
  };

  const handleProductImgInputOnchange = (event) => {
    const formData = new FormData();
    formData.append('image', event.target.files[0]);
    postUploadImg(formData)
      .then((data) => {
        setNewItemImage(`${apiUrl}/${data}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ProductImgInputWrapper>
      <label htmlFor='productImg'>
        <Img
          width='322px'
          height='204px'
          src={
            location.pathname.includes('edit') && itemImage
              ? newItemImage || itemImage
              : newItemImage ||
                (location.pathname.includes('addproduct') && itemImage)
              ? newItemImage
              : noneProductImage
          }
          alt='프로필 이미지'
          borderRadius='10px'
        />
        <UploadBtn onClick={handleUploadBtnClick}></UploadBtn>
      </label>
      <input
        type='file'
        id='productImg'
        className='ir'
        accept='image/*'
        name='productImg'
        ref={fileInput}
        onChange={handleProductImgInputOnchange}
      />
    </ProductImgInputWrapper>
  );
};

export default ProductImgInput;
