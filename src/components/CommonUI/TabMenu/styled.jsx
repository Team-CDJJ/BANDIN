import styled, { css } from 'styled-components';

export const TabMenuSection = styled.section`
  ${({ theme }) => {
    return css`
      padding: 0 6px;
      position: fixed;
      bottom: 0;
      width: 100%;
      border-top: 0.5px solid ${theme.colors.greyDB};
    `;
  }}
`;

export const TabMenuInner = styled.ul`
  ${({ theme }) => {
    return css`
      display: flex;
      justify-content: space-between;
      padding: 12px 30px 10px;
    `;
  }}
`;

export const TabMenuEachInner = styled.li`
  ${({ theme }) => {
    return css`
      > a {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        gap: 4px;
        width: 60px;
      }
    `;
  }}
`;

export const EachTabImg = styled.img`
  ${({ theme }) => {
    return css`
      width: 24px;
    `;
  }}
`;

export const EachTabSpan = styled.span`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.xs};
      color: ${theme.colors.grey76};
    `;
  }}
`;
