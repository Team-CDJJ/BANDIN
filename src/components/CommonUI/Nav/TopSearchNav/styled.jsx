import styled, { css } from 'styled-components';

export const TopSearchNavSection = styled.section`
  ${({ theme }) => {
    return css`
      width: 100vw;
      height: 48px;
      padding: 13px 12px 13px 16px;
      display: flex;
      align-items: center;
      position: fixed;
      top: 0;
      margin-top: 24px;
      border-bottom: 0.5px solid ${theme.colors.greyDB};
    `;
  }}
`;

export const TopSearchInnerWrapper = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      width: 100%;
      > a {
        cursor: pointer;
      }
    `;
  }}
`;

export const TopSearchNavInput = styled.input`
  ${({ theme }) => {
    return css`
      width: 100%;
      height: 32px;
      border-radius: 32px;
      border: none;
      background-color: ${theme.colors.greyF2};
      margin-left: 20px;
      padding: 7px 0 7px 16px;
      &::placeholder {
        color: #c4c4c4;
        font-size: ${theme.fontSizes.md};
        font-weight: 400;
      }
    `;
  }}
`;
