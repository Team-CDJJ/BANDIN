import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postEmailValid } from '../../api/login/postAccountValid';
import Button from '../../components/atoms/Button/Button';
import InputBox from '../../components/atoms/InputBox/Input';
import { SignUpWrapper, SignUpTitle } from './styled';

const SignUp = () => {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [emailError, setEmailError] = useState('');

  const [isPwValid, setIsPwValid] = useState(false);
  const [pwError, setPwError] = useState('');

  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  });

  const { email, password } = inputValue;

  const handleData = (event) => {
    const { name, value } = event.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  useEffect(() => {
    const emailValidator = async () => {
      const data = await postEmailValid({
        user: {
          email,
        },
      });
      // console.log(data);
      const emailReg =
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      const regResult = emailReg.test(email);
      setEmailError(`* ${data.message}`);
      if (!regResult) {
        setIsEmailValid(false);
        setEmailError('* 올바른 이메일 형식이 아닙니다');
      } else if (data.message === '사용 가능한 이메일 입니다.' && regResult) {
        setIsEmailValid(true);
      } else {
        setIsEmailValid(false);
      }
    };
    emailValidator();
  }, [email]);

  useEffect(() => {
    const pwValidator = () => {
      if (password.length >= 6) {
        setIsPwValid(true);
      } else {
        setIsPwValid(false);
        setPwError('* 비밀번호는 6자리 이상이어야 합니다.');
      }
    };
    pwValidator();
  });

  const handleNextPage = () => {
    navigate('/signup/setupprofile', {
      state: {
        email,
        password,
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
          name='email'
          // id='email'
          placeholder='이메일 주소를 입력해 주세요.'
          // value={email}
          onChange={handleData}
          isValid={isEmailValid}
          errorMsg={emailError}
          required
        />
        <InputBox
          label='비밀번호'
          type='password'
          name='password'
          // id='password'
          placeholder='비밀번호를 입력해 주세요.'
          // value={password}
          onChange={handleData}
          errorMsg={password && !isPwValid ? pwError : null}
          required
        />
        <Button
          size='lg'
          state={!isEmailValid || !isPwValid ? 'disabled' : null}
          disabled={!isEmailValid || !isPwValid ? 'disabled' : null}
          tit='다음'
          onClick={handleNextPage}
          needValid='false'
        ></Button>
      </form>
    </SignUpWrapper>
  );
};

export default SignUp;
