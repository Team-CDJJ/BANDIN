import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { postAccountNameValid } from '../../api/login/postAccountValid';

import Button from '../../components/atoms/Button/Button';
import {
  SetUpProfileWrapper,
  SetUpProfileTitle,
  SetUpProfileSubTitle,
} from './styled';

import postSignUp from '../../api/login/postSignUP';
import InputBox from '../../components/atoms/InputBox/Input';
import ProfileImgInput from '../../components/modules/ProfileImgInput/ProfileImgInput';

const SetUpProfile = () => {
  const [inputValue, setInputValue] = useState({
    username: '',
    accountname: '',
    intro: '',
  });
  const { username, accountname, intro } = inputValue;

  const [usernameError, setUsernameError] = useState('');
  const [usernameValid, setUsernameValid] = useState(false);
  const [accountnameError, setAccountnameError] = useState('');
  const [accountnameValid, setAccountnameValid] = useState(false);

  const [image, setImage] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state.email;
  const password = location.state.password;

  const handleData = (event) => {
    const { name, value } = event.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  useEffect(() => {
    if (!username) {
      setUsernameError('* 필수 입력 항목입니다.');
      setUsernameValid(false);
    } else if (username.length < 2 || username.length > 10) {
      setUsernameError('* 2 ~ 10자 이내여야 합니다.');
      setUsernameValid(false);
    } else {
      setUsernameValid(true);
    }
  });

  useEffect(() => {
    const accountnameValidator = async () => {
      try {
        postAccountNameValid({
          user: {
            accountname,
          },
        }).then((data) => {
          const accountReg = /^[-._a-z0-9]+$/gi;

          if (!accountReg.test(accountname)) {
            setAccountnameError(
              '* 영문, 숫자, 밑줄, 마침표만 사용할 수 있습니다.',
            );
            setAccountnameValid(false);
          } else if (data.message === '이미 가입된 계정ID 입니다.') {
            setAccountnameError(`* ${data.message}`);
            setAccountnameValid(false);
          } else if (data.message === '사용 가능한 계정ID 입니다.') {
            setAccountnameError(`* ${data.message}`);
            setAccountnameValid(true);
          } else if (accountname.length === 0) {
            setAccountnameError('* 계정ID는 필수 입력사항 입니다.');
            setAccountnameValid(false);
          } else {
            setAccountnameValid(false);
          }
        });
      } catch (err) {
        console.error(err);
      }
    };
    accountnameValidator();
  }, [accountname]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      user: {
        email,
        username,
        password,
        accountname,
        intro,
        image,
      },
    };

    postSignUp(userData)
      .then(() => {
        navigate('/emaillogin');
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
        <ProfileImgInput setNewImage={setImage} image={image} />
        <InputBox
          label='사용자 이름'
          type='username'
          id='username'
          min='2'
          max='10'
          placeholder='2~10자 이내여야 합니다.'
          name='username'
          onChange={handleData}
          errorMsg={usernameError}
          isValid={usernameValid}
          required
        />
        <InputBox
          label='계정 ID'
          type='accountname'
          id='accountname'
          placeholder='영문, 숫자, 특수문자(.), (_)만 사용 가능합니다.'
          name='accountname'
          onChange={handleData}
          errorMsg={accountnameError}
          isValid={accountnameValid}
          required
        />
        <InputBox
          label='자기소개'
          type='intro'
          id='intro'
          name='intro'
          placeholder='한 줄로 나를 표현해 보세요!'
          onChange={handleData}
        />
        <Button
          type='submit'
          size='lg'
          state={
            username.length === 0 || accountname.length === 0
              ? 'disabled'
              : null
          }
          disabled={!usernameValid || !accountnameValid ? 'disabled' : null}
          tit='지금 바로 밴딘 시작하기!'
        ></Button>
      </form>
    </SetUpProfileWrapper>
  );
};

export default SetUpProfile;
