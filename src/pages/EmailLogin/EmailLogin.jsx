import { Link } from 'react-router-dom';
import {
  LoginWrapper,
  LoginTitle,
  InputLabel,
  FormInput,
  LoginButton,
} from './styled';

const Login = () => {
  return (
    <LoginWrapper>
      <LoginTitle>로그인</LoginTitle>
      <form>
        <InputLabel htmlFor='emailId'>이메일</InputLabel>
        <FormInput type='text' id='emailId' required />
        <InputLabel htmlFor='password'>패스워드</InputLabel>
        <FormInput type='text' id='password' required />
        <LoginButton disabled type='submit'>
          로그인
        </LoginButton>
      </form>
      <Link to='/signup' className='sign-up-email'>
        이메일로 회원가입
      </Link>
    </LoginWrapper>
  );
};

export default Login;
