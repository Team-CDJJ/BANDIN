import ImgStyle from './styled';

const Img = ({ width, height, src, alt, borderRadius, className }) => {
  return (
    <ImgStyle
      className={className}
      width={width}
      height={height}
      src={src}
      alt={alt}
      borderRadius={borderRadius}
    ></ImgStyle>
  );
};

export default Img;
