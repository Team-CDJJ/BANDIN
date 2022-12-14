import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/atoms/Button/Button';
import Input from '../../components/atoms/Input/Input';
import InputLabel from '../../components/atoms/InputLabel/InputLabel';
import { SignUpWrapper, SignUpTitle } from './styled';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleData = (event) => {
    if (event.target.type === 'email') {
      setEmail(event.target.value);
    } else if (event.target.type === 'password') {
      setPassword(event.target.value);
    }
  };

  const handleNextPage = () => {
    navigate('/setupprofile', {
      state: {
        email: email,
        password: password,
      },
    });
  };

  return (
    <SignUpWrapper>
      <SignUpTitle>이메일로 회원가입</SignUpTitle>
      <form>
        <InputLabel htmlFor='email'>이메일</InputLabel>
        <Input
          type='email'
          id='email'
          required
          placeholder='이메일 주소를 입력해 주세요.'
          value={email}
          onChange={handleData}
        />
        <InputLabel htmlFor='password'>비밀번호</InputLabel>
        <Input
          type='password'
          id='password'
          required
          placeholder='비밀번호를 입력해 주세요.'
          value={password}
          onChange={handleData}
        />
        <Button
          type='submit'
          disabled={email.length === 0 || password.length === 0}
          onClick={handleNextPage}
        >
          다음
        </Button>
      </form>
    </SignUpWrapper>
  );
};

export default SignUp;
