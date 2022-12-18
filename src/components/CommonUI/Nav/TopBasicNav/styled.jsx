import styled, { css } from 'styled-components';

export const TopBasicNavSection = styled.section`
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

export const InnerBasicNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const TopBasicNavBtn = styled.div`
  cursor: pointer;
  background-color: #fff;
`;
