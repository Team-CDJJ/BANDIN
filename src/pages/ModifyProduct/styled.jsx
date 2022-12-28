import styled, { css } from 'styled-components';

export const ModiProductSection = styled.section`
  margin-top: 48px;
  padding: 30px 34px;
`;

export const ModiProductForm = styled.form`
  width: 100%;
`;

export const ModiImageDesc = styled.span`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.grey76};
      font-size: ${theme.fontSizes.sm};
      font-weight: 400;
      margin-bottom: 18px;
      display: inline-block;
    `;
  }}
`;
