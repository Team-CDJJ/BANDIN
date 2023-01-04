import styled, { css } from 'styled-components';

export const CommentSection = styled.section`
  ${({ theme }) => {
    return css`
      width: 100vw;
      padding: 13px 16px 12px;
      height: 61px;
      position: fixed;
      bottom: 0;
      border-top: 0.5px solid ${theme.colors.greyDB};
      background-color: #fff;
    `;
  }}
`;

export const CommentInner = styled.div`
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

export const CommentForm = styled.form`
  display: flex;
  margin-left: 18px;
  width: 100%;
`;

// atoms
export const CommentInput = styled.input`
  ${({ theme }) => {
    return css`
      border: none;
      width: 100%;
      padding: 5px;
      margin-right: 18px;

      &::placeholder {
        font-size: ${theme.fontSizes.md};
        color: #c4c4c4;
        font-weight: 400;
      }
    `;
  }}
`;

// atoms
export const CommentBtn = styled.button`
  ${({ theme }) => {
    return css`
      display: block;
      font-size: ${theme.fontSizes.md};
      font-weight: 500;
      min-width: 28px;
      height: 28px;
      background: transparent;
      border: none;
      cursor: pointer;
      /* 버튼 활성화 유무 */
      color: ${theme.colors.mainColor};
      &:disabled {
        color: #c4c4c4;
      }
    `;
  }}
`;
