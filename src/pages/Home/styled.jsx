import styled, { css } from 'styled-components';

export const EmptyHomeWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 210px auto 0;

  .profile-img {
    width: 110px;
    height: 110px;
  }
`;

export const HomeWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 88px 16px 90px;
  gap: 10px;
`;

export const FeedTxt = styled.span`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.smd};
      color: ${theme.colors.grey76};
      line-height: 14px;
      margin: 20px 0;
    `;
  }}
`;
