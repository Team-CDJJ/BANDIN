import styled, { css } from 'styled-components';
import LikeIcon from '../../../assets/icon-heart.png';
import ChatIcon from '../../../assets/icon-message-circle.png';

export const CommonPostWrapper = styled.div`
  width: 358px;
  margin: 0 auto;
`;

export const CommonPostSection = styled.div`
  width: 304px;
  margin-left: auto;

  > a {
    display: flex;
    width: 100%;
    height: 100%;
    overflow-x: scroll;
    gap: 8px;
  }
`;

export const PostTxt = styled.p`
  ${({ theme }) => {
    return css`
      margin: 16px 0;
      line-height: 18px;
      font-size: ${theme.fontSizes.md};
    `;
  }}
`;

export const IconGroup = styled.div`
  display: flex;
  margin: 12px 0 16px 0;
`;

export const LikeBtn = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  background: url(${LikeIcon}) no-repeat center / 20px 20px;
  cursor: pointer;
`;

export const Count = styled.p`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.sm};
      color: ${theme.colors.grey76};
      line-height: 20px;
      margin-left: 6px;
    `;
  }}
`;

export const ChatBtn = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  margin-left: 16px;
  background: url(${ChatIcon}) no-repeat center / 20px 20px;
  cursor: pointer;
`;

export const PostUploadTime = styled.p`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.xs};
      color: ${theme.colors.grey76};
    `;
  }}
`;
