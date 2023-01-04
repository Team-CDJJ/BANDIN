import styled, { css } from 'styled-components';

export const ProductWrapper = styled.div`
  padding: 20px 16px;

  .productOnsale {
    ${({ theme }) => {
      return css`
        font-size: ${theme.fontSizes.lg};
        color: #000000;
        line-height: 20px;
        font-weight: 700;
        margin-bottom: 16px;
      `;
    }}
  }
`;

export const ProductSection = styled.div`
  display: flex;
  overflow-x: scroll;
  padding-bottom: 10px;
`;

export const ProductCont = styled.div`
  width: 140px;
  margin-right: 10px;
  cursor: pointer;

  .img-cont {
    width: 140px;
    height: 90px;
    overflow: hidden;
  }

  .img-product {
    border: 0.5px solid #dbdbdb;
    border-radius: 8px;
    object-fit: cover;
  }
`;

export const ProductTxt = styled.p`
  ${({ theme }) => {
    return css`
      display: block;
      width: 95%;
      font-size: ${theme.fontSizes.md};
      font-weight: 400;
      line-height: 18px;
      margin: 6px 2px 4px;
      word-break: break-all;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
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
