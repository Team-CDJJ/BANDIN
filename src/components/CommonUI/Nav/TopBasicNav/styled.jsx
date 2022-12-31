import styled, { css } from 'styled-components';
import arrowLeft from '../../../../assets/icon-arrow-left.png';
import moreVertical from '../../../../assets/icon-more-vertical.png';

export const TopBasicNavSection = styled.header`
  ${({ theme }) => {
    return css`
      width: 100vw;
      padding: 12px 12px 12px 16px;
      height: 48px;
      display: flex;
      align-items: center;
      position: fixed;
      top: 0;
      z-index: 100;
      border-bottom: 0.5px solid ${theme.colors.greyDB};
      background-color: #fff;
    `;
  }}
`;

export const InnerBasicNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const PrevBtn = styled.button`
  background: url(${arrowLeft}) no-repeat center;
  width: 22px;
  height: 22px;
  cursor: pointer;
`;

export const TopBasicNavBtn = styled.div`
  background: url(${moreVertical}) no-repeat center;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
