import styled from 'styled-components';
import uploadBtnImg from '../../../assets/upload-img.png';

const StyledUploadBtn = styled.button`
  width: 50px;
  height: 50px;
  background: url(${uploadBtnImg}) no-repeat center/ 50px 50px;
  border-radius: 50%;
  border: none;
  position: absolute;
  bottom: 0;
  right: 0;
`;

export default StyledUploadBtn;
