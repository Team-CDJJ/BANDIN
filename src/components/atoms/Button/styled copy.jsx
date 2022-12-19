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
            return '100%';
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
            return '34px';
          case 'lg':
            return '44px';
          default:
            return '44px';
        }
      }};

      border: ${({ state }) => {
        switch (state) {
          case 'disabeld':
            return 'none';
          case 'active':
            return '1px solid';
          default:
            return 'none';
        }
      }};

      border-color: ${({ state }) =>
        state === 'disabled' ? 'none' : theme.colors.greyDB};

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

      background-color: ${({ state }) => {
        switch (state) {
          case 'active':
            return '#fff';
          case 'disabled':
            return theme.colors.mainDisabled;
          default:
            return theme.colors.mainColor;
        }
      }};

      font-weight: ${({ size }) => (size === 'xs' ? '400' : '500')};
      font-size: ${({ size }) =>
        size === 'xs' ? theme.fontSizes.sm : theme.fontSizes.md};
      line-height: ${({ size }) => (size === 'xs' ? '15px' : '18px')};

      color: ${({ state }) =>
        state === 'active' ? theme.colors.grey76 : '#fff'};
    `;
  }}
`;

export default Btn;
