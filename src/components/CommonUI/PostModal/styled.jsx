import styled, { css } from 'styled-components';

export const PostModalArticle = styled.article`
  ${({ theme }) => {
    return css`
      width: 100%;
      height: 92px;
      background-color: #fff;
      position: absolute;
      bottom: 0;
      border: 1px solid ${theme.colors.greyDB};
      border-radius: ${theme.borderRadius.lv2} ${theme.borderRadius.lv2} 0 0;
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

export const LeaveChatRoom = styled.p`
  margin-top: 50px;
  margin-left: 26px;
  cursor: pointer;
  font-size: 14px;
  color: #000;
`;
