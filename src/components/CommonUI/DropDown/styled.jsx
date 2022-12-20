import styled, { css, keyframes } from 'styled-components';

import DownArrow from '../../../assets/down-arrow.png';
import UpArrow from '../../../assets/up-arrow.png';

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
  padding: 13.5px 0;
  text-align: center;
  background-color: #fff;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    background: url(${DownArrow}) no-repeat;
    height: 21px;
    width: 20px;
    top: 19px;
    right: 30px;
  }
`;

export const CurrentTit = styled.h1`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.xl};
      font-weight: 500;
      text-align: center;
      padding: 1px 0;
    `;
  }}
`;

export const SelectUl = styled.ul`
  ${({ theme }) => {
    return css`
      position: absolute;
      top: 48px;
      width: 100%;
      height: 240px;
      overflow: hidden;
      font-size: ${theme.fontSizes.xl};
      max-height: ${(props) => (props.show ? 'none' : '0')};
      /* display: ${(props) => (props.display ? 'block' : 'none')}; */
    `;
  }}
`;

export const OptionLi = styled.li`
  ${({ theme }) => {
    return css`
      width: 100%;
      font-size: ${theme.fontSizes.xl};
      font-weight: 500;
      padding: 14px 0;
      height: 48px;
      border-bottom: 1px solid #dbdbdb;
      background-color: #fff;
      transition: all 0.3s;
      color: #767676;
      &:hover,
      :focus {
        background-color: ${theme.colors.mainColor};
        color: white;
      }
    `;
  }}
`;
