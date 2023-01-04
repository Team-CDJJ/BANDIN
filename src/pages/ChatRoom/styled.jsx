import styled, { css } from 'styled-components';

export const TopContainer = styled.div`
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.greyF2};
      height: 100vh;
    `;
  }}
`;

export const ChatRoomMoreModal = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  background-color: transparent;
  padding: 12px 0px;
  right: 12px;
  border: none;
`;

export const ChatRoomSection = styled.section`
  position: absolute;
  bottom: 0;
  padding: 0 16px 81px;
  width: 100%;
`;

export const EachPersonWrapper = styled.div`
  display: flex;
  margin-bottom: 9px;
`;

export const ProfileImg = styled.img`
  ${({ theme }) => {
    return css`
      width: 42px;
      height: 42px;
      margin-right: 12px;
      cursor: pointer;
      border: 1px solid ${theme.colors.greyDB};
      border-radius: ${theme.borderRadius.circle};
    `;
  }}
`;

export const BoxAndTimeWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const TheOtherPersonTextBox = styled.div`
  ${({ theme }) => {
    return css`
      padding: 12px;
      max-width: 240px;
      border: 1px solid #c4c4c4;
      border-radius: 0 ${theme.borderRadius.lv2} ${theme.borderRadius.lv2};
      background-color: #fff;
    `;
  }}
`;

export const TalkingAbout = styled.p`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.md};
      font-weight: 400px;
    `;
  }}
`;

export const TheOtherPersonTime = styled.p`
  ${({ theme }) => {
    return css`
      font-weight: 400;
      font-size: ${theme.fontSizes.xs};
      color: ${theme.colors.grey76};
      margin-left: 6px;
    `;
  }}
`;

export const MyBoxAndTimeWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: right;
  margin-bottom: 10px;
  > img {
    width: 240px;
    border-radius: 10px;
  }
`;

export const MyTime = styled.p`
  ${({ theme }) => {
    return css`
      font-weight: 400;
      font-size: ${theme.fontSizes.xs};
      color: ${theme.colors.grey76};
      margin-right: 6px;
    `;
  }}
`;

export const MyTextBox = styled.div`
  ${({ theme }) => {
    return css`
      padding: 12px;
      background-color: ${theme.colors.mainColor};
      border-radius: ${theme.borderRadius.lv2} 0 ${theme.borderRadius.lv2}
        ${theme.borderRadius.lv2};
    `;
  }}
`;

export const MyTalk = styled.p`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.md};
      font-weight: 400px;
      color: #fff;
    `;
  }}
`;
