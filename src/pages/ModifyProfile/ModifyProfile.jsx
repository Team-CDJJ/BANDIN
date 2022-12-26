import { useState } from 'react';
import { ModifyProfileSection, ModifyProfileForm } from './styled';
import TopUploadNav from '../../components/CommonUI/Nav/TopUploadNav/TopUploadNav';
import ProfileImgInput from '../../components/modules/ProfileImgInput/ProfileImgInput';
import InputBox from '../../components/atoms/InputBox/Input';
import noneProfileImage from '../../assets/profile.png';

const ModifyProfile = () => {
  const [image, setImage] = useState(noneProfileImage);
  const [userName, setUserName] = useState('');
  const [accountName, setAccountName] = useState('');
  const [intro, setIntro] = useState('');

  const handleData = (event) => {
    if (event.target.id === 'userName') {
      setUserName(event.target.value);
    } else if (event.target.id === 'accountName') {
      setAccountName(event.target.value);
    } else if (event.target.id === 'intro') {
      setIntro(event.target.value);
    }
  };

  return (
    <>
      <TopUploadNav />
      <ModifyProfileSection>
        <h1 className='ir'>프로필 수정 페이지</h1>
        <ModifyProfileForm>
          <ProfileImgInput />
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
        </ModifyProfileForm>
      </ModifyProfileSection>
    </>
  );
};

export default ModifyProfile;
