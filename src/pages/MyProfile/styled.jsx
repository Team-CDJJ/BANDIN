import styled, { css } from 'styled-components';

export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 310px auto 0;

  .loading-img {
    width: 110px;
    height: 110px;
  }
`;

export const LoadingTxt = styled.span`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.xl};
      color: ${theme.colors.grey76};
      line-height: 14px;
      margin: 20px 0;
      font-weight: 500;
    `;
  }}
`;
