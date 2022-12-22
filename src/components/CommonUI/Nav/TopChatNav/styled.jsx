import styled, { css } from 'styled-components';

export const TopChatNavSection = styled.section`
  ${({ theme }) => {
    return css`
      width: 100vw;
      padding: 12px 12px 12px 16px;
      height: 48px;
      position: fixed;
      top: 0;
      border-bottom: 0.5px solid ${theme.colors.greyDB};
      background-color: #fff;
    `;
  }}
`;

export const InnerChatNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const PrevBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const TopChatNavSpan = styled.span`
  ${({ theme }) => {
    return css`
      position: absolute;
      margin-left: 32px;
      font-weight: 500;
      font-size: ${theme.fontSizes.md};
    `;
  }}
`;

export const TopChatNavBtn = styled.button`
  cursor: pointer;
  background: #fff;
  border: none;
`;
