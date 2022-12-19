import styled, { css } from 'styled-components';

// export const TopContainer = styled.div`
//   position: absolute;
// `;

export const TopMainNavSection = styled.section`
  ${({ theme }) => {
    return css`
      width: 100%;
      height: 48px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: fixed;
      top: 0;
      border-bottom: 0.5px solid ${theme.colors.greyDB};
      background: #fff;
    `;
  }}
`;

export const TopMainNavSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 53px;
  > img {
    width: 21px;
  }
`;
