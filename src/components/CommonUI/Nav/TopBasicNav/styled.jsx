import styled, { css } from 'styled-components';

export const TopBasicNavSection = styled.section`
  ${({ theme }) => {
    return css`
      width: 100vw;
      padding: 13px 12px 13px 16px;
      position: fixed;
      top: 0;
      border-bottom: 0.5px solid ${theme.colors.greyDB};
    `;
  }}
`;

export const InnerBasicNav = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      justify-content: space-between;
      width: 100%;
    `;
  }}
`;

export const TopBasicNavBtn = styled.div`
  ${({ theme }) => {
    return css`
      cursor: pointer;
    `;
  }}
`;
