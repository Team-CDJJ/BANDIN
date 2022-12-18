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
  font-size: 14px;
  font-weight: 500;
  background: transparent;
  color: #c4c4c4;
  border: none;
  cursor: pointer;
`;
