import styled, { css } from 'styled-components';

const InputLabel = styled.label`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.sm};
      color: ${theme.colors.grey76};
    `;
  }}
`;

export default InputLabel;
