import styled from 'styled-components';
import uploadBtnImg from '../../../assets/upload-img.png';

export const ProfileImgInputWrapper = styled.div`
  text-align: center;
  position: relative;
  width: 120px;
  height: 110px;
  margin: 0 auto;
  margin-bottom: 30px;
`;

export const UploadBtn = styled.button`
  width: 36px;
  height: 36px;
  background: url(${uploadBtnImg}) no-repeat center/ 36px 36px;
  border-radius: 50%;
  border: none;
  position: absolute;
  bottom: 0;
  right: 0;
`;
