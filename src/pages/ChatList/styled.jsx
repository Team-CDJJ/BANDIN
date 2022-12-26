import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import ProfileImg from '../../assets/profile.png';

export const Section = styled.section`
  margin: 70px 16px 0 16px;
`;

export const ChatLink = styled(Link)`
  ${({ theme }) => {
    return css`
      position: relative;
      display: flex;
      margin-bottom: 20px;
      cursor: pointer;
      &::before {
        content: '';
        display: inline-block;
        background-image: url(${ProfileImg});
        background-size: 42px 42px;
        background-position: center;
        background-repeat: no-repeat;
        width: 47px;
        height: 42px;
        border-radius: 50px;
        box-sizing: border-box;
        border: 0.5px solid ${theme.colors.greyDB};
      }
      &:not(:last-child)::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        background-color: ${theme.colors.mainColor};
        width: 12px;
        height: 12px;
        border-radius: 50px;
      }
    `;
  }}
`;

export const TextContainer = styled.div`
  display: inline-block;
  margin-left: 12px;
  width: 100%;
`;

export const ChatName = styled.strong`
  ${({ theme }) => {
    return css`
      display: block;
      margin-bottom: 4px;
      font-size: ${theme.fontSizes.md};
      color: #000;
      line-height: 18px;
      text-align: left;
    `;
  }}
`;

export const ChatTxt = styled.p`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.sm};
      color: ${theme.colors.grey76};
      line-height: 15px;
      text-align: left;
    `;
  }}
`;

export const ChatDate = styled.span`
  ${({ theme }) => {
    return css`
      float: right;
      font-size: ${theme.fontSizes.sm};
      color: ${theme.colors.greyDB};
      line-height: 15px;
      text-align: right;
    `;
  }}
`;
