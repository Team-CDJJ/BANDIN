import styled, { css } from 'styled-components';

export const UserList = styled.li`
  width: 100%;
  list-style: none;
`;

export const ProfileLink = styled.a`
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

export const UserId = styled.strong`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.sm};
      color: ${theme.colors.grey76};
      font-weight: 400;
      line-height: 15px;
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
