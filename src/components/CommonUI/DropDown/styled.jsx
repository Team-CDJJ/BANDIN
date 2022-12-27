import styled, { css } from 'styled-components';

import DownArrow from '../../../assets/down-arrow.png';

export const TopContainer = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
`;

export const DropDownSection = styled.section`
  position: relative;
  width: 284px;
  height: 48px;
  text-align: center;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    background: url(${DownArrow}) no-repeat;
    height: 21px;
    width: 20px;
    top: 19px;
    right: 15px;
  }
`;

export const CurrentTit = styled.h1`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.xl};
      font-weight: 500;
      line-height: 48px;
    `;
  }}
`;

export const SelectUl = styled.ul`
  ${({ theme }) => {
    return css`
      position: absolute;
      width: 100%;
      overflow: hidden;
      font-size: ${theme.fontSizes.xl};
      max-height: ${(props) => (props.show ? 'none' : '0')};
    `;
  }}
`;

export const OptionLi = styled.li`
  ${({ theme }) => {
    return css`
      width: 100%;
      font-size: ${theme.fontSizes.md};
      height: 44px;
      line-height: 44px;
      border: 1px solid #dbdbdb;
      margin-top: -1px;
      background-color: #fff;
      color: ${theme.colors.grey76};
      &:hover,
      :focus {
        transition: all 0.3s;
        background-color: ${theme.colors.mainColor};
        color: white;
      }
    `;
  }}
`;
