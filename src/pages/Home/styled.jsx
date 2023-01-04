import styled, { css } from 'styled-components';

export const EmptyHomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 210px auto 0;

  .profile-img {
    width: 110px;
    height: 110px;
  }
  .loading-img {
    margin-top: 100px;
  }
`;

export const FeedWrapper = styled.main`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  margin: 68px 16px 90px;
  gap: 14px;
`;

export const FeedTxt = styled.span`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.md};
      color: ${theme.colors.grey76};
      line-height: 14px;
      margin: 20px 0;
    `;
  }}
`;
export const LoadingTxt = styled(FeedTxt)`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.xl};
      font-weight: 500;
    `;
  }}
`;
