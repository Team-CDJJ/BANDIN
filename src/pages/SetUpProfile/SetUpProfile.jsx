import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import noneProfileImage from '../../assets/profile.png';
import Button from '../../components/atoms/Button/Button';
import {
  SetUpProfileWrapper,
  SetUpProfileTitle,
  SetUpProfileSubTitle,
  ImgWrapper,
  ImgUploadBtn,
} from './styled';
import postSignUp from '../../api/login/postSignUP';
import InputBox from '../../components/atoms/InputBox/Input';
import ProfileImgInput from '../../components/modules/ProfileImgInput';

const SetUpProfile = () => {
  const [image, setImage] = useState(noneProfileImage);
  const [userName, setUserName] = useState('');
  const [accountName, setAccountName] = useState('');
  const [intro, setIntro] = useState('');

  const location = useLocation();
  // console.log(location);
  const email = location.state.email;
  const password = location.state.password;

  const handleGetImg = async (event) => {
    console.log(event);
  };

  const handleData = (event) => {
    if (event.target.id === 'userName') {
      setUserName(event.target.value);
    } else if (event.target.id === 'accountName') {
      setAccountName(event.target.value);
    } else if (event.target.id === 'intro') {
      setIntro(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email, userName, password, accountName, intro, image);

    const userData = {
      user: {
        email: email,
        username: userName,
        password: password,
        accountname: accountName,
      },
    };

    postSignUp(userData)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        if (error.response.status === 422) {
          alert(`${error.response.data.message}`);
        } else {
          console.log(error);
        }
      });
  };

  return (
    <SetUpProfileWrapper>
      <SetUpProfileTitle>프로필 설정</SetUpProfileTitle>
      <SetUpProfileSubTitle>
        나중에 언제든지 변경할 수 있습니다.
      </SetUpProfileSubTitle>
      <form onSubmit={handleSubmit}>
        {/* <ImgWrapper>
          <img src={noneProfileImage} alt='' />
          <ImgUploadBtn />
          <label htmlFor='profileImage' className='ir'></label>
          <input
            type='file'
            id='profileImage'
            onChange={handleGetImg}
            name='image'
            accept='image/*'
          />
        </ImgWrapper> */}
        <ProfileImgInput />
        {/* <InputBox
          type='file'
          id='profileImage'
          name='image'
          accept='image/*'
          onChange={handleGetImg}
        /> */}
        <InputBox
          label='사용자 이름'
          type='userName'
          id='userName'
          placeholder='2~10자 이내여야 합니다.'
          value={userName}
          onChange={handleData}
          required
        />
        <InputBox
          label='계정 ID'
          type='accountName'
          id='accountName'
          placeholder='영문, 숫자, 특수문자(.), (_)만 사용 가능합니다.'
          value={accountName}
          onChange={handleData}
          required
        />
        <InputBox
          label='자기소개'
          type='intro'
          id='intro'
          placeholder='한 줄로 나를 표현해 보세요!'
          value={intro}
          onChange={handleData}
        />
        <InputBox
          label='포지션'
          type='position'
          id='position'
          placeholder='가장 선호하는 악기 포지션은 어디인가요?'
        />
        <InputBox
          label='경력'
          type='year'
          id='year'
          placeholder='악기를 연주하신 기간은 얼마나 되셨나요?'
        />
        <InputBox
          label='장르'
          type='genre'
          id='genre'
          placeholder='가장 선호하는 장르는 무엇인가요?'
        />
        <Button
          type='submit'
          size='lg'
          state={
            userName.length === 0 || accountName.length === 0
              ? 'disabled'
              : null
          }
          tit='지금 바로 밴딘 시작하기!'
        ></Button>
      </form>
    </SetUpProfileWrapper>
  );
};

export default SetUpProfile;
