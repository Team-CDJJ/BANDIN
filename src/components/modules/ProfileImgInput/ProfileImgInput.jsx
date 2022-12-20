import { useRef } from 'react';
import { useRecoilState } from 'recoil';

// import noneProfileImg from '../../../assets/profile.png';
import Img from '../../atoms/Img/img';
import { ProfileImgInputWrapper, UploadBtn } from './styled';
import postUploadImg from '../../../api/uploadImg/uploadImg';
import { profileImgSrc } from '../../../atoms';
import { apiUrl } from '../../../api/api';

const ProfileImgInput = () => {
  const [image, setImage] = useRecoilState(profileImgSrc);
  const fileInput = useRef(null);

  const handleUploadBtnClick = (event) => {
    event.preventDefault();
    fileInput.current.click();
  };

  const handleProfileImgInputOnchange = (event) => {
    const formData = new FormData();
    formData.append('image', event.target.files[0]);
    postUploadImg(formData).then((data) => {
      console.log(data);
      setImage(`${apiUrl}/${data}`);
    });
    console.log(formData);
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
