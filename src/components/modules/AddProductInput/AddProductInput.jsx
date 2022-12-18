import { useRef, useState } from 'react';
import Img from '../../atoms/Img/img';
import { ProductImgInputWrapper, AddProductBtn } from './styled';
import postUploadImg from '../../../api/uploadImg/uploadImg';

const AddProductInput = () => {
  const [image, setImage] = useState('');
  const fileInput = useRef(null);

  const handleAddProductBtnClick = (event) => {
    event.preventDefault();
    fileInput.current.click();
  };

  const handleProfileImgInputOnchange = async (event) => {
    const src = await postUploadImg(event.target.files[0]);
    setImage(src);
    console.log(event);
  };

  return (
    <ProductImgInputWrapper>
      <label htmlFor='productImg'>
        <AddProductBtn onClick={handleAddProductBtnClick}></AddProductBtn>
      </label>
      <input
        type='file'
        id='productImg'
        className='ir'
        accept='image/*'
        name='productImage'
        ref={fileInput}
        onChange={handleProfileImgInputOnchange}
      />
    </ProductImgInputWrapper>
  );
};

export default AddProductInput;
