import styled, { css } from 'styled-components';

export const ProfilePostNavWrapper = styled.section`
  ${({ theme }) => {
    return css`
      width: 100%;
      height: 44px;
      padding: 9px 16px;
      border-bottom: 0.5px solid ${theme.colors.greyDB};
    `;
  }}
`;

export const BtnWrapper = styled.div`
  width: 68px;
  height: 26px;
  display: flex;
  margin-left: auto;
  gap: 16px;

  .list-btn,
  .album-btn {
    width: 26px;
    > img {
      width: 26px;
    }
  }
`;
