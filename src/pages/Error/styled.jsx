import styled, { css } from 'styled-components';

export const ErrorSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Error404Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const ErrorTitle = styled.h2`
  width: 130px;
  height: 233px;
  margin-bottom: 27px;
`;

export const ErrorTxt = styled.p`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.md};
      color: ${theme.colors.grey76};
      margin-bottom: 27px;
    `;
  }}
`;

export const PrevButton = styled.button`
  ${({ theme }) => {
    return css`
      width: 120px;
      height: 44px;
      background-color: ${theme.colors.mainColor};
      color: #ffffff;
      padding: 13px 25px;
      border: none;
      border-radius: 44px;
      cursor: pointer;
    `;
  }}
`;
