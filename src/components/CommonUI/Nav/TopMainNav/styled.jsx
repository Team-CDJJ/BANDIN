import styled, { css } from 'styled-components';

export const TopMainNavSection = styled.header`
  ${({ theme }) => {
    return css`
      padding: 10px 16px;
      height: 48px;
      width: 100%;
      position: fixed;
      top: 0;
      border-bottom: 0.5px solid ${theme.colors.greyDB};
      background: #fff;
      z-index: 10;
    `;
  }}
`;

export const TopMainNavInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo-img {
    width: 21px;
  }
`;

export const MainSearchBtn = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
`;
