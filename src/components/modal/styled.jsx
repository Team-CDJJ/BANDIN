import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
      bottom: -5rem;
      opacity: 0;
    }
    to {
      bottom: 0rem;
      opacity: 1;
    }

`;

export const ModalBackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  z-index: 99;
`;

export const PostModalArticle = styled.article`
  ${({ theme }) => {
    return css`
      width: 100%;
      min-height: 92px;
      background-color: #fff;
      position: absolute;
      bottom: 0;
      padding: 16px 26px 10px;
      outline: 1px solid ${theme.colors.greyDB};
      border-radius: ${theme.borderRadius.lv2} ${theme.borderRadius.lv2} 0 0;
      z-index: 100;
      animation: ${fadeIn} 0.5s;
    `;
  }}
`;

export const GrayLine = styled.div`
  ${({ theme }) => {
    return css`
      width: 50px;
      height: 4px;
      background-color: ${theme.colors.greyDB};
      margin: 0 auto;
      margin-bottom: 16px;
      border-radius: ${theme.borderRadius.lv1};
    `;
  }}
`;

export const ModalInnerText = styled.p`
  line-height: 46px;
  cursor: pointer;
  font-size: 14px;
  color: #000;
`;

export const AlertWrapper = styled.div`
  ${({ theme }) => {
    return css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 252px;
      height: 110px;
      border: 1px solid ${theme.colors.greyDB};
      border-radius: ${theme.borderRadius.lv2};
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      background-color: #fff;
    `;
  }}
`;

export const AlertTxt = styled.strong`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.lg};
      font-weight: 500;
    `;
  }}
`;

export const BtnsWrapper = styled.div`
  display: flex;
  height: 46px;
  width: 100%;
  margin-top: 22px;
`;

export const ModalBtn = styled.button`
  ${({ theme }) => {
    return css`
      width: 100%;
      background-color: transparent;
      font-size: ${theme.fontSizes.md};
      font-weight: 400;
      border: none;
      border-top: 1px solid ${theme.colors.greyDB};
      &:last-child {
        color: ${theme.colors.mainColor};
        border-left: 1px solid ${theme.colors.greyDB};
        font-weight: 500;
      }
    `;
  }}
`;
