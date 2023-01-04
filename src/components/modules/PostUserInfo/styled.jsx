import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import VerticalBg from '../../../assets/icon-more-vertical.png';

export const UserList = styled.section`
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
`;

export const UserInfoLink = styled(Link)`
  color: black;
  display: flex;
  .user-info {
    display: flex;
    flex-direction: column;
    margin-left: 12px;
    justify-content: center;
    gap: 2px;
    .user-info-flex {
      display: flex;
      align-items: center;
    }
  }
`;

export const UserName = styled.strong`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.md};
      font-weight: 500;
      line-height: 18px;
    `;
  }}
`;

export const UserId = styled.span`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.sm};
      color: ${theme.colors.grey76};
      font-weight: 400;
      line-height: 14px;
    `;
  }}
`;

export const VerticalBtn = styled.button`
  width: 18px;
  height: 18px;
  border: 0;
  outline: 0;
  margin-left: auto;
  background: url(${VerticalBg}) no-repeat;
  background-size: 18px 18px;
  cursor: pointer;
`;

export const CreatedTime = styled.p`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.xs};
      color: ${theme.colors.grey76};
    `;
  }}
`;
