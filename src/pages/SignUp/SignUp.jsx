import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/atoms/Button/Button';
import InputBox from '../../components/atoms/InputBox/Input';
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
    console.log('click');
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
        <InputBox
          label='이메일'
          type='email'
          id='email'
          required
          placeholder='이메일 주소를 입력해 주세요.'
          value={email}
          onChange={handleData}
        />
        <InputBox
          label='비밀번호'
          type='password'
          id='password'
          required
          placeholder='비밀번호를 입력해 주세요.'
          value={password}
          onChange={handleData}
        />
        <Button
          size='lg'
          state={
            email.length === 0 || password.length === 0 ? 'disabled' : null
          }
          tit='다음'
          onClick={handleNextPage}
        ></Button>
      </form>
    </SignUpWrapper>
  );
};

export default SignUp;
