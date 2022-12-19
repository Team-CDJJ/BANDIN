import styled, { css } from 'styled-components';

// TopContainer는 아마 수정해야 할 것 같음
// 이 상태에서는 TopMainNav에서는 DropDown 안눌림
export const TopContainer = styled.div`
  position: absolute;
`;

export const TopMainNavSection = styled.section`
  ${({ theme }) => {
    return css`
      padding: 10px 16px;
      height: 48px;
      width: 100%;
      position: fixed;
      top: 0;
      border-bottom: 0.5px solid ${theme.colors.greyDB};
      background: #fff;
    `;
  }}
`;

export const TopMainNavInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TopMainNavSpan = styled.span`
  > img {
    width: 21px;
  }
`;

export const MainSearchBtn = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
`;
