import styled, { css } from 'styled-components';

const Input = styled.input`
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

export default Input;
