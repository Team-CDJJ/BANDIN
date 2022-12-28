import styled, { css } from 'styled-components';

export const AlertWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 252px;
  height: 110px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-color: #fff;
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
