import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ModifyProfileSection from './styled';
import TopUploadNav from '../../components/CommonUI/Nav/TopUploadNav/TopUploadNav';
import ProfileImgInput from '../../components/modules/ProfileImgInput/ProfileImgInput';
import InputBox from '../../components/atoms/InputBox/Input';
import putModifiedData from '../../api/modifyprofile/modifyprofile';
import getMyInfo from '../../api/profile/getMyInfo';

const ModifyProfile = () => {
  const [profileData, setProfileData] = useState({});
  const [image, setImage] = useState('');
  const [newImage, setNewImage] = useState('');

  const [isNameValid, setIsNameValid] = useState(false);
  const [nameError, setNameError] = useState('');

  const [isAccountValid, setIsAccountValid] = useState(false);
  const [accountError, setAccountError] = useState('');

  useEffect(() => {
    const getInfo = async () => {
      await getMyInfo()
        .then((data) => {
          setProfileData(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getInfo();
  }, []);

  const [inputValue, setInputValue] = useState({
    userName: '',
    accountName: '',
    intro: '',
  });

  const handleData = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const { userName, accountName, intro } = inputValue;

  useEffect(() => {
    setImage(profileData.image);
    setInputValue({
      userName: profileData.username,
      accountName: profileData.accountname,
      intro: profileData.intro,
    });
  }, [profileData]);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const modifiedData = {
      user: {
        username: userName,
        accountname: accountName,
        intro: intro,
        image: newImage === '' ? image : newImage,
      },
    };

    putModifiedData(modifiedData)
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
        tit='저장'
      />
      <ModifyProfileSection>
        <h1 className='ir'>프로필 수정 페이지</h1>
        <form>
          <ProfileImgInput
            setNewImage={setNewImage}
            newImage={newImage}
            image={image}
          />
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
        </form>
      </ModifyProfileSection>
    </>
  );
};

export default ModifyProfile;
