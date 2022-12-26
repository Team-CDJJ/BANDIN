import styled, { css } from 'styled-components';

export const TopSearchNavSection = styled.header`
  ${({ theme }) => {
    return css`
      width: 100%;
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

export const TopSearchInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  > a {
    cursor: pointer;
  }
`;

export const PrevBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
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
