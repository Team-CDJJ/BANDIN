import styled, { css } from 'styled-components';

export const TabMenuSection = styled.section`
  ${({ theme }) => {
    return css`
      padding: 0 6px;
      position: fixed;
      bottom: 0;
      width: 100%;
      border-top: 0.5px solid ${theme.colors.greyDB};
      background-color: #fff;
    `;
  }}
`;

export const TabMenuInner = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const TabMenuEachInner = styled.li`
  > a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    width: 84px;
    height: 60px;
  }
`;

export const EachTabImg = styled.img`
  width: 24px;
`;

export const EachTabSpan = styled.span`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.xs};
      color: ${theme.colors.grey76};
    `;
  }}
`;
