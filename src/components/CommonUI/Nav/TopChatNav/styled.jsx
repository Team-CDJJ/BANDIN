import styled, { css } from 'styled-components';

export const TopChatNavSection = styled.section`
  ${({ theme }) => {
    return css`
      width: 100vw;
      padding: 13px 12px 13px 16px;
      position: fixed;
      top: 0;
      margin-top: 24px;
      border-bottom: 0.5px solid ${theme.colors.greyDB};
    `;
  }}
`;

export const InnerChatNav = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      position: relative;
    `;
  }}
`;

export const TopChatNavSpan = styled.span`
  ${({ theme }) => {
    return css`
      position: absolute;
      margin-left: 32px;
      font-weight: 500;
    `;
  }}
`;

export const TopChatNavBtn = styled.button`
  ${({ theme }) => {
    return css`
      cursor: pointer;
      background: transparent;
      border: none;
    `;
  }}
`;
