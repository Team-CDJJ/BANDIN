import styled from 'styled-components';

const ImgStyle = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
`;

export default ImgStyle;
