import styled, { css } from 'styled-components';

export const ProfileWrapper = styled.section`
  ${({ theme }) => {
    return css`
      width: 100%;
      height: 364px;
      display: flex;
      flex-direction: column;
      padding: 78px 0 26px;
      border-bottom: 0.5px solid ${theme.colors.greyDB};
    `;
  }}
`;

export const FollowAndImgWrapper = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 110px;
      gap: 30px;
      margin-bottom: 16px;

      > div {
        display: flex;
        flex-direction: column;
        gap: 6px;
        text-align: center;

        .followNum {
          font-size: ${theme.fontSizes.xl};
          font-weight: 700;
          line-height: 23px;
          color: #000;
        }
        .followTxt {
          font-size: ${theme.fontSizes.xs};
          line-height: 10px;
          color: ${theme.colors.grey76};
        }
      }
    `;
  }}
`;

export const TextWrapper = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      text-align: center;
    `;
  }}
`;

export const BtnWrapper = styled.div`
  ${({ theme }) => {
    return css``;
  }}
`;
