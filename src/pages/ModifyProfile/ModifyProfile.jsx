import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { ModifyProfileSection, ModifyProfileForm } from './styled';
import TopUploadNav from '../../components/CommonUI/Nav/TopUploadNav/TopUploadNav';
import ProfileImgInput from '../../components/modules/ProfileImgInput/ProfileImgInput';
import InputBox from '../../components/atoms/InputBox/Input';
import getMyProfile from '../../api/profile/getMyProfile';
import putModifiedData from '../../api/modifyprofile/modifyprofile';
import { profileImgSrc } from '../../atoms';

const ModifyProfile = () => {
  const [profileData, setProfileData] = useState({});
  const [image, setImage] = useRecoilState(profileImgSrc);
  const [userName, setUserName] = useState('');
  const [accountName, setAccountName] = useState('');
  const [intro, setIntro] = useState('');
  // 기존 프로필 데이터 변수
  // 프로필 정보 유효성 검사 및 에러메세지 변수
  const [isNameValid, setIsNameValid] = useState(false);
  const [nameError, setNameError] = useState('');

  const [isAccountValid, setIsAccountValid] = useState(false);
  const [accountError, setAccountError] = useState('');

  // 기존 프로필 정보 호출
  useEffect(() => {
    const accountname = localStorage.getItem('accountname');
    getMyProfile(accountname).then((data) => {
      console.log('기존프로필 정보 확인', data);
      setProfileData(data);
    });
  }, []);

  // 기존프로필정보 띄우기
  useEffect(() => {
    setImage(profileData.image);
    setUserName(profileData.username);
    setAccountName(profileData.accountname);
    setIntro(profileData.intro);
  }, [profileData]);

  const handleData = (event) => {
    if (event.target.id === 'userName') {
      setUserName(event.target.value);
    } else if (event.target.id === 'accountName') {
      setAccountName(event.target.value);
    } else if (event.target.id === 'intro') {
      setIntro(event.target.value);
    }
  };

  // 이름 유효성검사
  useEffect(() => {
    const nameValidator = () => {
      if (userName?.length >= 2 && userName?.length <= 10) {
        setIsNameValid(true);
        setNameError('');
      } else {
        setIsNameValid(false);
        setNameError('* 2~10자 이내여야 합니다.');
      }
    };
    nameValidator();
  }, [userName]);

  // 계정 유효성검사
  useEffect(() => {
    const accountValidator = () => {
      const accountReg = /^[-._a-z0-9]+$/gi;

      if (accountReg.test(accountName)) {
        setIsAccountValid(true);
        setAccountError('');
      } else {
        setIsAccountValid(false);
        setAccountError('* 영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.');
      }
    };
    accountValidator();
  }, [accountName]);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const modifiedData = {
      user: {
        username: userName,
        accountname: accountName,
        intro: intro,
        image: image,
      },
    };

    await putModifiedData(modifiedData)
      .then((data) => {
        console.log(data);
        localStorage.setItem('accountname', accountName);
        navigate(`/profile/${accountName}`);
      })
      .catch((error) => {
        if (error.response.status === 422) {
          console.log(error);
          alert(`${error.response.data.message}`);
        } else {
          console.log(error);
        }
      });
  };

  return (
    <>
      <TopUploadNav
        state={isNameValid && isAccountValid ? null : 'disabled'}
        disabled={isNameValid && isAccountValid ? null : 'disabled'}
        onClick={handleSubmit}
      />
      <ModifyProfileSection>
        <h1 className='ir'>프로필 수정 페이지</h1>
        <ModifyProfileForm>
          <ProfileImgInput />
          <InputBox
            label='사용자 이름'
            type='userName'
            id='userName'
            name='userName'
            placeholder='2~10자 이내여야 합니다.'
            value={userName || ''}
            onChange={handleData}
            errorMsg={nameError}
            required
          />
          <InputBox
            label='계정 ID'
            type='accountName'
            id='accountName'
            name='accountName'
            placeholder='영문, 숫자, 특수문자(.), (_)만 사용 가능합니다.'
            value={accountName || ''}
            onChange={handleData}
            errorMsg={accountError}
            required
          />
          <InputBox
            label='자기소개'
            type='intro'
            id='intro'
            name='intro'
            placeholder='한 줄로 나를 표현해 보세요!'
            value={intro || ''}
            onChange={handleData}
          />
        </ModifyProfileForm>
      </ModifyProfileSection>
    </>
  );
};

export default ModifyProfile;
