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
      text-align: center;
      .followNum {
        display: block;
        font-size: ${theme.fontSizes.xl};
        font-weight: 700;
        line-height: 23px;
        margin-bottom: 6px;
        color: #000;
      }
      .followTxt {
        font-size: ${theme.fontSizes.xs};
        line-height: 10px;
        color: ${theme.colors.grey76};
      }
      .following {
        color: ${theme.colors.grey76};
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
      margin-bottom: 24px;
      .user-name {
        font-size: ${theme.fontSizes.lg};
        font-weight: 700;
        line-height: 20px;
        margin-bottom: 6px;
      }

      .account-name {
        font-size: ${theme.fontSizes.sm};
        line-height: 14px;
        margin-bottom: 16px;
        color: ${theme.colors.grey76};
      }
      .intro {
        font-size: ${theme.fontSizes.md};
        line-height: 18px;
        color: ${theme.colors.grey76};
      }
    `;
  }}
`;

export const BtnWrapper = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      justify-content: center;
      gap: 12px;
    `;
  }}
`;
