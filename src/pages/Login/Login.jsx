import { Link } from 'react-router-dom';
import {
  LoginPageWrapper,
  BtnSocialLogin,
  LoginBtnContainer,
  LinkWrapper,
} from './styled';
import Splash from '../Splash/Splash';

import logoWhite from '../../assets/logo-white.png';
import facebookLogo from '../../assets/facebook.png';
import googleLogo from '../../assets/google.png';
import kakaoLogo from '../../assets/kakao.png';

const Login = () => {
  return (
    <>
      <Splash />
      <LoginPageWrapper>
        <h1>
          <img src={logoWhite} alt='bandin-logo' className='logo-white' />
        </h1>
        <LoginBtnContainer>
          <BtnSocialLogin type='BtnSocialLogin' className='btn-login'>
            <img src={kakaoLogo} alt='kakaoLogo' />
            카카오톡 계정으로 로그인
          </BtnSocialLogin>
          <BtnSocialLogin type='BtnSocialLogin' className='btn-login'>
            <img src={googleLogo} alt='googleLogo' />
            구글 계정으로 로그인
          </BtnSocialLogin>
          <BtnSocialLogin type='BtnSocialLogin' className='btn-login'>
            <img src={facebookLogo} alt='facebookLogo' />
            페이스북 계정으로 로그인
          </BtnSocialLogin>
          <LinkWrapper>
            <Link className='link-to' to='/emaillogin'>
              이메일로 로그인
            </Link>
            <Link className='link-to' to='/signup'>
              회원가입
            </Link>
          </LinkWrapper>
        </LoginBtnContainer>
      </LoginPageWrapper>
    </>
  );
};

export default Login;
