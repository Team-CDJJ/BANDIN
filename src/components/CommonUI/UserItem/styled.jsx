import styled, { css } from 'styled-components';

export const UserList = styled.div`
  width: 70%;
  display: flex;
`;

export const ProfileImg = styled.img`
  ${({ theme }) => {
    return css`
      width: 50px;
      height: 50px;
      border: 0.5px solid ${theme.colors.greyDB};
      border-radius: 50%;
    `;
  }}
`;

export const UserInfo = styled.div`
  width: 100%;
  margin-left: 12px;
`;

export const UserName = styled.strong`
  ${({ theme }) => {
    return css`
      display: block;
      margin: 5px 0px 6px 0px;
      font-size: ${theme.fontSizes.md};
      font-weight: 500;
      line-height: 18px;
    `;
  }}
`;

export const UserId = styled.p`
  ${({ theme }) => {
    return css`
      width: 85%;
      font-size: ${theme.fontSizes.sm};
      color: ${theme.colors.grey76};
      font-weight: 400;
      line-height: 15px;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-break: break-all;
      overflow: hidden;
    `;
  }}
`;

export const Keyword = styled.span`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.mainColor};
    `;
  }}
`;
