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
export const ProductModalArticle = styled.article`
  ${({ theme }) => {
    return css`
      width: 100%;
      height: 184px;
      background-color: #fff;
      position: fixed;
      bottom: 0;
      padding-bottom: 24px;
      outline: 1px solid ${theme.colors.greyDB};
      border-radius: ${theme.borderRadius.lv2} ${theme.borderRadius.lv2} 0 0;
      animation: ${fadeIn} 0.5s;
      z-index: 10;
    `;
  }}
`;

export const GrayLine = styled.div`
  ${({ theme }) => {
    return css`
      width: 50px;
      height: 4px;
      background-color: ${theme.colors.greyDB};
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      margin-top: 16px;
      border-radius: ${theme.borderRadius.lv1};
    `;
  }}
`;

export const ModalInnerText = styled.p`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.md};
      font-weight: 400;
      margin-top: 28px;
      margin-left: 26px;
      cursor: pointer;
      color: #000;
    `;
  }}
`;
export const ModalBtnWrap = styled.div`
  ${({ theme }) => {
    return css`
      > p {
        &:nth-child(1) {
          margin-top: 50px;
        }
      }
    `;
  }}
`;
