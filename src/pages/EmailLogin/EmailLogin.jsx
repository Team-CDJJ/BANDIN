import { Link } from 'react-router-dom';
import { useState } from 'react';

import { LoginWrapper, LoginTitle } from './styled';
import Button from '../../components/atoms/Button/Button';
import postUserLogin from '../../api/login/postUserLogin';
import InputBox from '../../components/atoms/InputBox/Input';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleData = (event) => {
    if (event.target.type === 'email') {
      setEmail(event.target.value);
    } else if (event.target.type === 'password') {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    postUserLogin({
      user: {
        email,
        password,
      },
    })
      .then((data) => {
        if (data.status === 422) {
          alert(data.message);
          console.log(data);
        } else {
          console.log(data);
          localStorage.setItem('token', data.user.token);
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
        />
        <InputBox
          label='비밀번호'
          type='password'
          id='password'
          required
          value={password}
          onChange={handleData}
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
