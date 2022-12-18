import styled, { css } from 'styled-components';
import AddProductBtnImg from '../../../assets/img-button.png';

export const ProductImgInputWrapper = styled.div`
  ${({ theme }) => {
    return css`
      position: relative;
      width: 322px;
      height: 204px;
      background-color: ${theme.colors.greyDB};
      border: 0.5px solid ${theme.colors.greyDB};
      border-radius: 10px;
      margin-bottom: 30px;
    `;
  }}
`;

export const AddProductBtn = styled.button`
  width: 36px;
  height: 36px;
  background: url(${AddProductBtnImg}) no-repeat center/ 36px 36px;
  border-radius: 50%;
  border: none;
  position: absolute;
  bottom: 12px;
  right: 12px;
`;
