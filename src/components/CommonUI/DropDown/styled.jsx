import styled, { css } from 'styled-components';

import DownArrow from '../../../assets/down-arrow.png';
import UpArrow from '../../../assets/up-arrow.png';

export const DropDownSection = styled.section`
  position: relative;
  width: 100%;
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
    right: 11px;
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
      width: 100%;
      font-size: ${theme.fontSizes.xl};
      overflow: hidden;
      position: absolute;
      max-height: ${(props) => (props.show ? 'none' : '0')};
      /* display: ${(props) => (props.display ? 'block' : 'none')}; */
    `;
  }}
`;

export const OptionLi = styled.li`
  ${({ theme }) => {
    return css`
      width: 100%;
      height: 44px;
      line-height: 44px;
      font-size: ${theme.fontSizes.md};
      border: 1px solid ${theme.colors.greyDB};
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
