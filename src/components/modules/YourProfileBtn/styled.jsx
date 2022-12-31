import styled, { css } from 'styled-components';
import ShareIcon from '../../../assets/icon-share.png';
import MsgIcon from '../../../assets/icon-message-circle.png';

const CircleBtn = styled.button`
  ${({ theme }) => {
    return css`
      width: 34px;
      height: 34px;
      border: 1px solid ${theme.colors.greyDB};
      border-radius: 50%;
      background: url(${({ className }) =>
          className === 'msg' ? MsgIcon : ShareIcon})
        no-repeat center / 20px 20px;
    `;
  }}
`;

export default CircleBtn;
