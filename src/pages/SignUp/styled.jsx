import styled, { css } from 'styled-components';

export const SignUpWrapper = styled.div`
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
`;

export const SignUpTitle = styled.h1`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.xxl};
      font-weight: 500;
      text-align: center;
      margin-bottom: 37px;
    `;
  }}
`;
