import styled, { css } from 'styled-components';

export const Box = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 19px;
  flex-direction: column;
`;

export const InputLabel = styled.label`
  ${({ theme }) => {
    return css`
      display: block;
      line-height: 15px;
      font-size: ${theme.fontSizes.sm};
      color: ${theme.colors.grey76};
    `;
  }}
`;

export const Input = styled.input`
  ${({ theme }) => {
    return css`
      width: 100%;
      height: 33px;
      border: none;
      background: transparent;
      border-bottom: 1px solid ${theme.colors.greyDB};
      &::placeholder {
        color: ${theme.colors.greyDB};
      }
    `;
  }}
`;

export const ErrorP = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.errorRed};
  margin-top: 6px;
`;
