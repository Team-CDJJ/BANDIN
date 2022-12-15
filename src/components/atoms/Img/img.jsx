import ImgStyle from './styled';

const Img = ({ width, height, src, alt, borderRadius }) => {
  return (
    <ImgStyle
      width={width}
      height={height}
      src={src}
      alt={alt}
      borderRadius={borderRadius}
    ></ImgStyle>
  );
};

export default Img;
