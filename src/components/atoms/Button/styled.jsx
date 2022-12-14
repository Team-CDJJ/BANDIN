import styled, { css } from 'styled-components';

export const Btn = styled.button`
  ${({ theme }) => {
    return css`
      width: ${({ size }) => {
        switch (size) {
          case 'xs':
            return '56px';
          case 'sm':
            return '90px';
          case 'md':
            return '120px';
          case 'lg':
            return '322px';
          default:
            return '120px';
        }
      }};

      height: ${({ size }) => {
        switch (size) {
          case 'xs':
            return '28px';
          case 'sm':
            return '32px';
          case 'md':
            return '340px';
          case 'lg':
            return '44px';
          default:
            return '44px';
        }
      }};

      border: ${({ txtcolor }) =>
        txtcolor === '#000' ? '1px solid theme.colors.greyDB' : 'none'};

      border-radius: ${({ size }) => {
        switch (size) {
          case 'xs':
            return '26px';
          case 'sm':
            return '32px';
          case 'md':
            return '30px';
          case 'lg':
            return '44px';
          default:
            return '44px';
        }
      }};

      font-weight: ${({ size }) => (size === 'xs' ? '400' : '500')};
      font-size: ${({ size }) =>
        size === 'xs' ? 'theme.fontSizes.sm' : 'theme.fontSizes.md'};
      line-height: ${({ size }) => (size === 'xs' ? '15px' : '18px')};

      background-color: ${({ state }) => {
        switch (state) {
          case 'active':
            return theme.colors.mainColor;
          case 'disabled':
            return theme.colors.mainDisabled;
          default:
            return '#fff';
        }
      }};

      color: ${({ txtcolor }) => (txtcolor === '#000' ? 'grey76' : '#fff')};
    `;
  }}
`;

export default Btn;
