import styled, { css } from 'styled-components';

export const TopUploadNavSection = styled.header`
  ${({ theme }) => {
    return css`
      width: 100vw;
      height: 48px;
      padding: 8px 16px;
      display: flex;
      align-items: center;
      position: fixed;
      top: 0;
      border-bottom: 0.5px solid ${theme.colors.greyDB};
      background-color: #fff;
    `;
  }}
`;

export const TopUploadInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const PrevBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
