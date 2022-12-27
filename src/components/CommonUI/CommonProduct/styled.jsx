import styled, { css } from 'styled-components';

export const ProductWrapper = styled.div`
  padding: 20px 0 20px 16px;

  .productOnsale {
    ${({ theme }) => {
      return css`
        font-size: ${theme.fontSizes.lg};
        color: #000000;
        line-height: 20px;
        font-weight: 700;
        padding-bottom: 16px;
      `;
    }}
  }
`;

export const ProductSection = styled.article`
  display: flex;
  overflow: scroll;
  overflow-y: hidden;
  padding-bottom: 10px;

  .img-product {
    height: 90px;
    width: 140px;
    border: 0.5px solid #c4c4c4;
    border-radius: 8px;
  }
`;

export const ProductCont = styled.div`
  padding-right: 10px;
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
