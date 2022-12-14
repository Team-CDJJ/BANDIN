import styled, { css } from 'styled-components';

export const CommentSection = styled.section`
  ${({ theme }) => {
    return css`
      width: 100vw;
      padding: 13px 16px 12px;
      /* 상단바가 아니므로 margin-top 적용 X */
      position: fixed;
      bottom: 0;
      border-top: 0.5px solid ${theme.colors.greyDB};
    `;
  }}
`;

export const CommentInner = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      > a {
        cursor: pointer;
      }
      > a > img {
        width: 36px;
        height: 36px;
      }
    `;
  }}
`;

export const CommentInput = styled.input`
  ${({ theme }) => {
    return css`
      position: absolute;
      margin-left: 54px;
      border: none;
      padding: 5px;
      width: 65%;

      &::placeholder {
        font-size: ${theme.fontSizes.md};
        font-weight: 400;
      }
    `;
  }}
`;

export const CommentBtn = styled.button`
  ${({ theme }) => {
    return css`
      font-size: 14px;
      font-weight: 500;
      background-color: transparent;
      color: #c4c4c4;
      border: none;
      cursor: pointer;
    `;
  }}
`;
