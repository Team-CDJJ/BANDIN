import styled, { css } from 'styled-components';

export const TopMainNavSection = styled.section`
  ${({ theme }) => {
    return css`
      padding: 10px 16px;
      width: 100%;
      height: 48px;
      position: fixed;
      top: 0;
      border-bottom: 0.5px solid ${theme.colors.greyDB};
      background: #fff;
    `;
  }}
`;

export const TopMainNavInner = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `;
  }}
`;

export const TopMainNavSpan = styled.span`
  ${({ theme }) => {
    return css`
      > img {
        width: 21px;
      }
    `;
  }}
`;

export const MainSearchBtn = styled.button`
  ${({ theme }) => {
    return css`
      background: transparent;
      cursor: pointer;
      border: none;
    `;
  }}
`;
