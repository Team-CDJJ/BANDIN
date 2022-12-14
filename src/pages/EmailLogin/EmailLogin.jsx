import { Link } from 'react-router-dom';
import { useState } from 'react';

import { LoginWrapper, LoginTitle } from './styled';
import Button from '../../components/atoms/Button/Button';
import Input from '../../components/atoms/Input/Input';
import InputLabel from '../../components/atoms/InputLabel/InputLabel';
import postUserLogin from '../../api/login/postUserLogin';

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
          alert(`${data.message}`);
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
        <InputLabel htmlFor='emailId'>이메일</InputLabel>
        <Input
          type='email'
          id='emailId'
          required
          value={email}
          onChange={handleData}
        />
        <InputLabel htmlFor='password'>패스워드</InputLabel>
        <Input
          type='password'
          id='password'
          required
          value={password}
          onChange={handleData}
        />
        <Button
          disabled={email.length === 0 || password.length === 0}
          type='submit'
        >
          로그인
        </Button>
      </form>
      <Link to='/signup' className='sign-up-email'>
        이메일로 회원가입
      </Link>
    </LoginWrapper>
  );
};

export default Login;
