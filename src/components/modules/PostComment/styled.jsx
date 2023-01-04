import styled, { css } from 'styled-components';

export const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  z-index: 99;
`;

export const CommentHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const UserName = styled.strong`
  ${({ theme }) => {
    return css`
      font-weight: 500;
      font-size: ${theme.fontSizes.md};
      margin: 0 5px 0 10px;
    `;
  }}
`;

export const CreatedTime = styled.p`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.xs};
      color: ${theme.colors.grey76};
    `;
  }}
`;

export const CommentContent = styled.p`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.md};
      margin-left: 46px;
      margin-top: 4px;
      font-weight: 400;
    `;
  }}
`;
