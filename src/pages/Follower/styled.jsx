import styled, { css } from 'styled-components';

export const FollowerTopSpan = styled.span`
  ${({ theme }) => {
    return css`
      position: fixed;
      top: 18px;
      left: 48px;
      font-size: ${theme.fontSizes.md};
      font-weight: 500;
      z-index: 100;
    `;
  }}
`;

export const FollowerMain = styled.main`
  width: 100%;
  padding: 72px 16px 84px;
`;

export const FollowerMainUl = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: space-between;
`;
