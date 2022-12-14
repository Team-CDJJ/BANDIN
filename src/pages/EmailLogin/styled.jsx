import styled, { css } from 'styled-components';

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 54px 34px;

  input {
    &:nth-child(4) {
      margin-bottom: 30px;
    }
  }

  .sign-up-email {
    ${({ theme }) => {
      return css`
        font-size: ${theme.fontSizes.sm};
        color: ${theme.colors.grey76};
        text-align: center;
        text-decoration: none;
        margin-top: 20px;
      `;
    }}
  }
`;

export const LoginTitle = styled.h1`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.xxl};
      font-weight: 500;
      text-align: center;
      margin-bottom: 37px;
    `;
  }}
`;
