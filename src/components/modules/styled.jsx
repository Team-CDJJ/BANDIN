import styled from 'styled-components';
import uploadBtnImg from '../../assets/upload-img.png';

export const ProfileImgInputWrapper = styled.div`
  text-align: center;
  margin-bottom: 30px;
  position: relative;
`;

export const UploadBtn = styled.button`
  width: 36px;
  height: 36px;
  background: url(${uploadBtnImg}) no-repeat center/ 36px 36px;
  border-radius: 50%;
  border: none;
  position: absolute;
  bottom: 0;
  right: 100px;
`;
