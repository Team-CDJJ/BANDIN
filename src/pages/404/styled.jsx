import styled, { css } from 'styled-components';

export const NotFoundSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const NotFoundImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const NotFoundSectionTitle = styled.h1`
  width: 130px;
  height: 233px;
  margin-bottom: 27px;
`;

export const NotFoundTxt = styled.p`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.md};
      color: ${theme.colors.grey76};
      margin-bottom: 27px;
    `;
  }}
`;
