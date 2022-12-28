import styled, { css } from 'styled-components';

export const CountNum = styled.dd`
  ${({ theme }) => {
    return css`
      font-size: 12px;
      line-height: 12px;
      font-weight: 400;
      display: inline-block;
      vertical-align: top;
      color: ${theme.colors.grey76};
      margin-left: 6px;
    `;
  }}
`;

export const HeartBtn = styled.button`
  border: none;
  outline: 0;
  background: none;
  display: flex;
  align-items: center;
`;
