import styled, { css } from 'styled-components';

export const FollowingHeaderWrapper = styled.header`
  ${({ theme }) => {
    return css`
      width: 100vw;
      height: 72px;
      padding: 0 16px;
    `;
  }}
`;

export const FollowingHeader = styled.div`
  ${({ theme }) => {
    return css`
      /* margin-top: 36px; */
      /* line-height: ; */
      position: absolute;
      top: 36px;
      /* line-height: 26px; */
    `;
  }}
`;

export const HeaderArrow = styled.img`
  ${({ theme }) => {
    return css`
      width: 24px;
      height: 24px;
    `;
  }}
`;

export const FollowingTit = styled.span`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.md};
      font-weight: 400;
    `;
  }}
`;
