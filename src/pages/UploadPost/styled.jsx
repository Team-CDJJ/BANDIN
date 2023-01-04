import styled, { css } from 'styled-components';

export const UploadWrapper = styled.main`
  margin-top: 44px;
  width: 100%;
  padding: 20px 16px;
  display: flex;
  overflow: hidden;

  > img {
    width: 42px;
  }

  .upload-form {
    flex-grow: 1;
  }

  > label {
    right: 16px;
    bottom: 16px;
  }
`;

export const StyledTextArea = styled.textarea`
  ${({ theme }) => {
    return css`
      width: 95%;
      border: none;
      resize: none;
      margin: 12px;

      &::placeholder {
        font-size: ${theme.colors.md}
        line-height: 18px;
        color: ${theme.colors.grayDB};
      }
      &:focus {
        outline: none;
      }
    `;
  }}
`;

export const ImgBox = styled.ul`
  ${({ theme }) => {
    return css`
      width: 300px;
      display: flex;
      gap: 10px;
      margin-top: 10px;
      overflow-x: scroll;

      .img-list {
        position: relative;
        > img {
          border-radius: ${theme.borderRadius.lv2};
        }

        .delete-btn {
          position: absolute;
          top: 6px;
          right: 6px;
          > img {
            width: 22px;
            height: 22px;
          }
        }
      }
    `;
  }}
`;
