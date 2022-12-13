import styled, { css } from 'styled-components';

export const LoginPageWrapper = styled.div`
  ${({ theme }) => {
    return css`
      width: 100vw;
      height: 100vh;
      background-color: ${theme.colors.mainColor};
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;

      .logo-white {
        width: 120px;
        margin-bottom: 180px;
      }
    `;
  }}
`;

export const LoginBtnContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 50px 34px;
  background-color: #fff;
  border-radius: 20px 20px 0 0;
  width: 100%;
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
