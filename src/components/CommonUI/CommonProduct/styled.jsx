import styled, { css } from 'styled-components';

export const ProductWrap = styled.div`
  width: 140px;
  display: flex;
  flex-direction: column;

  .img-product {
    height: 90px;
  }
`;

export const ProductTxt = styled.p`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.md};
      line-height: 18px;
      margin: 6px 2px 4px 2px;
    `;
  }}
`;

export const ProductPrice = styled.p`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.sm};
      color: ${theme.colors.mainColor};
      line-height: 14px;
      font-weight: 700;
      margin: 0 2px;
    `;
  }}
`;
