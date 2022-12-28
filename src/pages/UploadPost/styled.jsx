import styled, { css } from 'styled-components';

export const UploadWrapper = styled.main`
  width: 100%;
  margin-top: 44px;
  padding: 20px 16px;
  display: flex;
  > img {
    display: flex;
  }

  .upload-from {
    width: 100%;
    display: flex;
    flex: 1;
  }

  > button {
    position: absolute;
    /* top: 100%; */
  }
`;

export const StyledTextArea = styled.textarea`
  ${({ theme }) => {
    return css`
      width: 100%;
      height: 100%;
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
