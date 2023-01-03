import { useRef, useState } from 'react';
import { apiUrl } from '../../../api/api';
import Img from '../../atoms/Img/img';

import { ProductImgInputWrapper, UploadBtn } from './styled';
import postUploadImg from '../../../api/uploadImg/postUploadImg';
import noneProductImage from '../../../assets/product.png';

const ProductImgInput = ({ setNewItemImage, itemImage }) => {
  const [image, setImage] = useState('');
  const fileInput = useRef(null);

  const handleUploadBtnClick = (event) => {
    event.preventDefault();
    fileInput.current.click();
  };

  const handleProductImgInputOnchange = (event) => {
    const formData = new FormData();
    formData.append('image', event.target.files[0]);
    postUploadImg(formData)
      .then((data) => {
        console.log(data);
        setNewItemImage(`${apiUrl}/${data}`);
        setImage(`${apiUrl}/${data}`);
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
          src={!itemImage ? noneProductImage : image}
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
