import { useEffect, useRef, useState } from 'react';
import { apiUrl } from '../../../api/api';
import Img from '../../atoms/Img/img';

import { ProfileImgInputWrapper, UploadBtn } from './styled';
import postUploadImg from '../../../api/uploadImg/postUploadImg';
import getMyInfo from '../../../api/profile/getMyInfo';
import noneProfileImg from '../../../assets/profile.png';

const ProfileImgInput = ({ setNewImage }) => {
  const [image, setImage] = useState('');
  const fileInput = useRef(null);

  useEffect(() => {
    getMyInfo()
      .then((data) => {
        setImage(data.image);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleUploadBtnClick = (event) => {
    event.preventDefault();
    fileInput.current.click();
  };

  const handleProfileImgInputOnchange = (event) => {
    const formData = new FormData();
    formData.append('image', event.target.files[0]);
    postUploadImg(formData)
      .then((data) => {
        console.log(data);
        setNewImage(`${apiUrl}/${data}`);
        setImage(`${apiUrl}/${data}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ProfileImgInputWrapper>
      <label htmlFor='profileImg'>
        <Img
          width='110px'
          height='110px'
          src={image.includes('Ellipse.png') ? noneProfileImg : image}
          alt='프로필 이미지'
          borderRadius='50%'
        />
        <UploadBtn onClick={handleUploadBtnClick}></UploadBtn>
      </label>
      <input
        type='file'
        id='profileImg'
        className='ir'
        accept='image/*'
        name='profileImage'
        ref={fileInput}
        onChange={handleProfileImgInputOnchange}
      />
    </ProfileImgInputWrapper>
  );
};

export default ProfileImgInput;
