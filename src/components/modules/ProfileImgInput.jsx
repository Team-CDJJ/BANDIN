import { useRef, useState } from 'react';
import noneProfileImg from '../../assets/profile.png';
import Img from '../atoms/Img/img';
import { ProfileImgInputWrapper, UploadBtn } from './styled';
import postUploadImg from '../../api/uploadImg/uploadImg';

const ProfileImgInput = () => {
  const [image, setImage] = useState(noneProfileImg);
  const fileInput = useRef(null);

  // const handleFileChange = (event) => {
  //   if (event.target.files[0]) {
  //     setImage(event.target.files[0]);
  //   } else {
  //     setImage(noneProfileImg);
  //   }
  // };

  const handleUploadBtnClick = (event) => {
    event.preventDefault();
    fileInput.current.click();
  };

  const handleProfileImgInputOnchange = async (event) => {
    const src = await postUploadImg(event.target.files[0]);
    setImage(src);
    console.log(event);
  };

  return (
    <ProfileImgInputWrapper>
      <label htmlFor='profileImg'>
        <Img
          width='110px'
          height='110px'
          src={image}
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
