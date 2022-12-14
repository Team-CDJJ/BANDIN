import styled, { css } from 'styled-components';

export const TopUploadNavSection = styled.section`
  ${({ theme }) => {
    return css`
      width: 100vw;
      height: 48px;
      padding: 13px 16px;
      display: flex;
      align-items: center;
      position: fixed;
      top: 0;
      margin-top: 24px;
      border-bottom: 0.5px solid ${theme.colors.greyDB};
    `;
  }}
`;

export const TopUploadInnerWrapper = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      > a {
        cursor: pointer;
      }
    `;
  }}
`;

export const TopUploadBtn = styled.button`
  ${({ theme }) => {
    return css`
      padding: 7px 32px;
      background-color: ${theme.colors.mainDisabled};
      color: #fff;
      font-size: ${theme.fontSizes.md};
      font-weight: 500;
      border-radius: 32px;
      border: none;
      cursor: pointer;
    `;
  }}
`;
