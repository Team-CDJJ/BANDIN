import { Box, ErrorP, Input, InputLabel } from './styled';

const InputBox = ({
  label,
  type,
  id,
  min,
  max,
  placeholder,
  onChange,
  required,
  errorMsg,
}) => {
  return (
    <Box>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input
        id={id}
        type={type}
        minLength={min}
        maxLength={max}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
      <ErrorP>{errorMsg}</ErrorP>
    </Box>
  );
};

export default InputBox;
