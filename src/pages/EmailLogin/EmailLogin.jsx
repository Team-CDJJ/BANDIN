import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { isLogin } from '../../atoms';

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
  const isLoginState = useSetRecoilState(isLogin);

  const emailReg =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  const handleData = (event) => {
    if (event.target.type === 'email') {
      setEmail(event.target.value);
    } else if (event.target.type === 'password') {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await postUserLogin({
      user: {
        email,
        password,
      },
    })
      .then((data) => {
        if (!emailReg.test(email)) {
          setEmailError('올바른 이메일 형식이 아닙니다.');
        } else if (data.status === 422) {
          const msg = data.message;
          setPwError(msg);
          // console.log(msg);
        } else {
          // console.log(data);
          localStorage.setItem('token', data.user.token);
          const userData = data.user;
          console.log(userData);
          isLoginState(true);
          navigate('/');
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
          required
          value={email}
          onChange={handleData}
          errorMsg={emailError}
        />
        <InputBox
          label='비밀번호'
          type='password'
          id='password'
          required
          value={password}
          onChange={handleData}
          errorMsg={pwError}
        />
        <Button
          type='submit'
          size='lg'
          state={
            email.length === 0 || password.length === 0 ? 'disabled' : null
          }
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
