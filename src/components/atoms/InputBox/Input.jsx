import { Box, Input, InputLabel } from './styled';

const InputBox = ({
  label,
  type,
  id,
  min,
  max,
  placeholder,
  onChange,
  required,
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
    </Box>
  );
};

export default InputBox;
