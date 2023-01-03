import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { apiUrl } from '../../../api/api';
import Img from '../../atoms/Img/img';

import { ProfileImgInputWrapper, UploadBtn } from './styled';
import postUploadImg from '../../../api/uploadImg/postUploadImg';
import noneProfileImg from '../../../assets/profile.png';

const ProfileImgInput = ({ newImage, setNewImage, image }) => {
  const fileInput = useRef(null);
  const location = useLocation();

  const handleUploadBtnClick = (e) => {
    e.preventDefault();
    fileInput.current.click();
  };

  const handleProfileImgInputOnchange = (e) => {
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    postUploadImg(formData)
      .then((data) => {
        setNewImage(`${apiUrl}/${data}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(newImage);

  return (
    <ProfileImgInputWrapper>
      <label htmlFor='profileImg'>
        <Img
          width='110px'
          height='110px'
          src={
            location.pathname.includes('/modifyprofile') && image
              ? newImage || image
              : newImage ||
                (location.pathname.includes('/setupprofile') && image)
              ? image
              : noneProfileImg
          }
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
