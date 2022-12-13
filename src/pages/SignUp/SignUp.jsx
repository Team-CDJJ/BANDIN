import {
  SignUpWrapper,
  SignUpTitle,
  InputLabel,
  FormInput,
  SignUpButton,
} from './styled';

const SignUp = () => {
  return (
    <SignUpWrapper>
      <SignUpTitle>이메일로 회원가입</SignUpTitle>
      <form>
        <InputLabel htmlFor='emailId'>이메일</InputLabel>
        <FormInput
          type='text'
          id='emailId'
          required
          placeholder='이메일 주소를 입력해 주세요.'
        />
        <InputLabel htmlFor='password'>비밀번호</InputLabel>
        <FormInput
          type='text'
          id='password'
          required
          placeholder='비밀번호를 입력해 주세요.'
        />
        <SignUpButton disabled type='submit'>
          다음
        </SignUpButton>
      </form>
    </SignUpWrapper>
  );
};

export default SignUp;
