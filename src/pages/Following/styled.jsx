import styled, { css } from 'styled-components';

export const FollowingTopSpan = styled.span`
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

export const FollowingMain = styled.main`
  padding: 72px 16px 84px;
`;

export const FollowingMainUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: space-between;
`;

export const FollowingBtn = styled.button`
  ${({ theme }) => {
    return css`
      display: inline-block;
      float: right;
      cursor: pointer;
      &:active{
        background-color: '#fff';
        color: ${theme.colors.grey76};
      }
      background-color: &{theme.colors.mainColor};
    `;
  }}
`;
