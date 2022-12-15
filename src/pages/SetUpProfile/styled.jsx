import styled, { css } from 'styled-components';

export const SetUpProfileWrapper = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      padding: 54px 34px;
      button {
        &:last-child {
          margin-top: 11px;
        }
      }
    `;
  }}
`;

export const ImgWrapper = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      justify-content: center;
      margin-bottom: 34px;
      > img {
        width: 110px;
        height: 110px;
      }
    `;
  }}
`;

export const ImgUploadBtn = styled.button`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background: url('../../assets/upload-img.png') no-repeat center;
`;

export const SetUpProfileTitle = styled.h1`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.xxl};
      font-weight: 500;
      text-align: center;
      margin-bottom: 12px;
    `;
  }}
`;

export const SetUpProfileSubTitle = styled.p`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.md};
      text-align: center;
      margin-bottom: 30px;
      color: ${theme.colors.grey76};
    `;
  }}
`;
