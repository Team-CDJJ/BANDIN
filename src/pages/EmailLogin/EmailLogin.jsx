import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import {
  accountNameValue,
  introValue,
  isLogin,
  profileImgSrc,
  userDataAtom,
  userNameValue,
} from '../../atoms';

import { LoginWrapper, LoginTitle } from './styled';
import Button from '../../components/atoms/Button/Button';
import postUserLogin from '../../api/login/postUserLogin';
import InputBox from '../../components/atoms/InputBox/Input';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [pwError, setPwError] = useState('');
  const navigate = useNavigate();
  const setIsLoginState = useSetRecoilState(isLogin);
  const setUserData = useSetRecoilState(userDataAtom);
  const setUserName = useSetRecoilState(userNameValue);
  const setAccountName = useSetRecoilState(accountNameValue);
  const setIntro = useSetRecoilState(introValue);
  const setProfileImage = useSetRecoilState(profileImgSrc);

  const handleData = (event) => {
    if (event.target.type === 'email') {
      setEmail(event.target.value);
    } else if (event.target.type === 'password') {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postUserLogin({
      user: {
        email,
        password,
      },
    })
      .then((data) => {
        const emailReg =
          /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        console.log(data);
        if (!emailReg.test(email)) {
          setEmailError('올바른 이메일 형식이 아닙니다.');
        } else if (data.status === 422) {
          setPwError(data.message);
        } else {
          localStorage.setItem('token', data.user.token);
          const userData = data.user;
          console.log(data);
          setIsLoginState(true);
          setUserData(userData);
          setAccountName(userData.accountname);
          setUserName(userData.username);
          setIntro(userData.intro);
          setProfileImage(userData.image);
          navigate('/home');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <LoginWrapper>
      <LoginTitle>로그인</LoginTitle>
      <form onSubmit={handleSubmit}>
        <InputBox
          label='이메일'
          type='email'
          id='emailId'
          value={email}
          onChange={handleData}
          errorMsg={emailError}
          required
        />
        <InputBox
          label='비밀번호'
          type='password'
          id='password'
          min='6'
          value={password}
          onChange={handleData}
          errorMsg={pwError}
          required
        />
        <Button
          type='submit'
          size='lg'
          state={email.length === 0 || password.length < 6 ? 'disabled' : null}
          disabled={password.length < 6 ? 'disabled' : null}
          tit='로그인'
        ></Button>
      </form>
      <Link to='/signup' className='sign-up-email'>
        이메일로 회원가입
      </Link>
    </LoginWrapper>
  );
};

export default Login;
