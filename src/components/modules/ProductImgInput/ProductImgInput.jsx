import { useRef } from 'react';
import { useRecoilState } from 'recoil';
import { productImgSrc } from '../../../atoms';
import { apiUrl } from '../../../api/api';
import Img from '../../atoms/Img/img';

import { ProductImgInputWrapper, UploadBtn } from './styled';
import postUploadImg from '../../../api/uploadImg/uploadImg';

const ProductImgInput = () => {
  const [image, setImage] = useRecoilState(productImgSrc);
  const fileInput = useRef(null);

  const handleUploadBtnClick = (event) => {
    event.preventDefault();
    fileInput.current.click();
  };

  const handleProductImgInputOnchange = (event) => {
    const formData = new FormData();
    formData.append('image', event.target.files[0]);
    postUploadImg(formData).then((data) => {
      setImage(`${apiUrl}/${data}`);
    });
  };

  return (
    <ProductImgInputWrapper>
      <label htmlFor='productImg'>
        <Img
          width='322px'
          height='204px'
          src={image}
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
