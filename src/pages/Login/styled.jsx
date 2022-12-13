import styled from 'styled-components';

export const LoginPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #7143df;
  display: flex;
  flex-direction: column;
  align-items: center;

  .logo-white {
    width: 120px;
    margin-top: 204px;
  }
`;

export const LoginBtnContainer = styled.section`
  padding: 50px 34px;
  background-color: #fff;
  border-radius: 20px 20px 0 0;
  width: 100%;
  position: absolute;
  bottom: 0;
`;

export const BtnSocialLogin = styled.button`
  width: 100%;
  background-color: transparent;
  line-height: 42px;
  padding: 0px 14px;
  border-radius: 20px;
  border: none;
  position: relative;
  font-size: 14px;
  margin-bottom: 10px;
  color: #767676;

  > img {
    width: 24px;
    position: absolute;
    top: 50%;
    left: 14px;
    transform: translate(0, -50%);
  }

  &:nth-child(1) {
    border: 1px solid #f2c94c;
  }

  &:nth-child(2) {
    border: 1px solid #767676;
  }

  &:nth-child(3) {
    border: 1px solid #2d9cdb;
    margin-bottom: 20px;
  }
`;

export const LinkWrapper = styled.div`
  font-size: 12px;
  text-align: center;

  .link-to {
    text-decoration: none;
    color: #767676;

    &:first-child::after {
      content: '|';
      color: #c4c4c4;
      margin: 0 13px;
    }
  }
`;
