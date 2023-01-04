import styled, { css } from 'styled-components';

export const AddProductSection = styled.section`
  margin-top: 48px;
  padding: 30px 34px;
`;
export const AddImageDesc = styled.span`
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
export const AddProductForm = styled.form`
  width: 100%;
`;
