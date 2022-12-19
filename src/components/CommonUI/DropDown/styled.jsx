import styled, { css } from 'styled-components';

import DownArrow from '../../../assets/down-arrow.png';
import UpArrow from '../../../assets/up-arrow.png';

export const DropDownSection = styled.section`
  position: relative;
  width: 100%;
  padding: 14px 0;
  text-align: center;
  background-color: #ffffff;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    background: url(${DownArrow}) no-repeat;
    height: 21px;
    width: 20px;
    top: 19px;
    right: 61px;
    /* 가상 요소 선택자에 중첩으로 놓고 focus 효과 넣는 방법 모르겠음 */
    /* &:focus {
      &::after {
        content: '';
        position: absolute;
        background: url(${UpArrow}) no-repeat;
        height: 21px;
        width: 20px;
        top: 19px;
        right: 61px;
      }
    } */
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
      height: 250px;
      overflow: hidden;
      font-size: ${theme.fontSizes.xl};
      border-top: 1px solid ${theme.colors.greyDB};
      max-height: ${(props) => (props.show ? 'none' : '0')};
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
      border-bottom: 1px solid ${theme.colors.greyDB};
      background-color: #fff;
      transition: all 0.3s;
      > a {
        color: #000;
      }
      &:hover,
      :focus {
        background-color: ${theme.colors.mainColor};
        > a {
          color: white;
        }
      }
    `;
  }}
`;
