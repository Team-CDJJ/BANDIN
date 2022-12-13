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
      text-align: center;
      margin-bottom: 37px;
    `;
  }}
`;

export const InputLabel = styled.label`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.sm};
      color: ${theme.colors.grey76};
    `;
  }}
`;

export const FormInput = styled.input`
  ${({ theme }) => {
    return css`
      width: 100%;
      height: 33px;
      border: none;
      background: transparent;
      border-bottom: 1px solid ${theme.colors.greyDB};
      margin-bottom: 19px;
      &::placeholder {
        color: ${theme.colors.greyDB};
      }
    `;
  }}
`;

export const SignUpButton = styled.button`
  ${({ theme }) => {
    return css`
      width: 100%;
      background-color: ${theme.colors.mainColor};
      color: #ffffff;
      padding: 13px 0;
      border: none;
      border-radius: 44px;
      margin-bottom: 20px;
      &:disabled {
        background-color: ${theme.colors.mainDisabled};
      }
    `;
  }}
`;
