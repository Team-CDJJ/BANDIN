import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import noneProfileImage from '../../assets/profile.png';
import Button from '../../components/atoms/Button/Button';
import Input from '../../components/atoms/Input/Input';
import InputLabel from '../../components/atoms/InputLabel/InputLabel';
import {
  SetUpProfileWrapper,
  SetUpProfileTitle,
  SetUpProfileSubTitle,
  ImgWrapper,
} from './styled';
import postSignUp from '../../api/login/postSignUP';

const SetUpProfile = () => {
  const [image, setImage] = useState('');
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
        <ImgWrapper>
          <img src={noneProfileImage} alt='' />
        </ImgWrapper>
        <Input
          type='file'
          id='profileImage'
          name='image'
          accept='image/*'
          onChange={handleGetImg}
        />
        <InputLabel htmlFor='userName'>사용자 이름</InputLabel>
        <Input
          type='userName'
          id='userName'
          required
          placeholder='2~10자 이내여야 합니다.'
          value={userName}
          onChange={handleData}
        />
        <InputLabel htmlFor='accountName'>계정 ID</InputLabel>
        <Input
          type='accountName'
          id='accountName'
          required
          placeholder='영문, 숫자, 특수문자(.), (_)만 사용 가능합니다.'
          value={accountName}
          onChange={handleData}
        />
        <InputLabel htmlFor='intro'>소개</InputLabel>
        <Input
          type='intro'
          id='intro'
          required
          placeholder='한 줄로 나를 표현해 보세요!'
          value={intro}
          onChange={handleData}
        />
        <InputLabel htmlFor='position'>포지션</InputLabel>
        <Input
          type='position'
          id='position'
          required
          placeholder='가장 선호하는 악기 포지션은 어디인가요?'
        />
        <InputLabel htmlFor='year'>경력</InputLabel>
        <Input
          type='year'
          id='year'
          required
          placeholder='악기를 연주하신 기간은 얼마나 되셨나요?'
        />
        <InputLabel htmlFor='genre'>장르</InputLabel>
        <Input
          type='genre'
          id='genre'
          required
          placeholder='가장 선호하는 장르는 무엇인가요?'
        />
        <Button type='submit'>지금 바로 밴딘 시작하기!</Button>
      </form>
    </SetUpProfileWrapper>
  );
};

export default SetUpProfile;
