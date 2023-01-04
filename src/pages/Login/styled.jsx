import styled, { css, keyframes } from 'styled-components';

const showUp = keyframes`
0% {
  opacity: 0.7;
  transform: translateY(284px);
}
100% {
  opacity: 1;
  transform: translateY(0);
}
`;

const fadeInOut = keyframes`
0% {
  transform: translateY(170%);
}
100% {
  transform: translateY(100%);
}
`;

export const LoginPageWrapper = styled.div`
  ${({ theme }) => {
    return css`
      width: 100vw;
      height: 100vh;
      background-color: ${theme.colors.mainColor};

      .logo-white {
        display: block;
        width: 120px;
        margin: 0 auto;
        transform: translateY(100%);
        animation: ${fadeInOut} 0.8s linear forwards;
      }
    `;
  }}
`;

export const LoginBtnContainer = styled.section`
  display: flex;
  position: absolute;
  bottom: 0;
  flex-direction: column;
  padding: 50px 34px;
  background-color: #fff;
  border-radius: 20px 20px 0 0;
  width: 100%;
  animation: ${showUp} 0.8s linear forwards;
`;

export const BtnSocialLogin = styled.button`
  ${({ theme }) => {
    return css`
      width: 100%;
      background-color: transparent;
      line-height: 42px;
      padding: 0px 14px;
      border-radius: 20px;
      border: none;
      position: relative;
      font-size: ${theme.fontSizes.md};
      margin-bottom: 10px;
      color: ${theme.colors.grey76};

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
        border: 1px solid ${theme.colors.grey76};
      }

      &:nth-child(3) {
        border: 1px solid #2d9cdb;
        margin-bottom: 20px;
      }
    `;
  }}
`;

export const LinkWrapper = styled.div`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.sm};
      text-align: center;

      .link-to {
        text-decoration: none;
        color: ${theme.colors.grey76};

        &:first-child::after {
          content: '|';
          color: #c4c4c4;
          margin: 0 13px;
        }
      }
    `;
  }}
`;
