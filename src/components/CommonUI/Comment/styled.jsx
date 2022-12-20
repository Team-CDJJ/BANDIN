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
  > a {
    cursor: pointer;
  }
  > a > img {
    width: 36px;
    height: 36px;
  }
`;

export const CommentForm = styled.form`
  position: absolute;
  margin-left: 54px;
  width: 80%;
`;

// atoms
export const CommentInput = styled.input`
  ${({ theme }) => {
    return css`
      border: none;
      width: 80%;
      padding: 5px;

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
      font-size: ${theme.fontSizes.md};
      font-weight: 500;
      background: transparent;
      border: none;
      margin-left: 27px;
      cursor: pointer;
      color: ${theme.colors.mainColor};
      &:disabled {
        color: #c4c4c4;
      }
    `;
  }}
`;
