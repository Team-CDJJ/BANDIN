import { useState } from 'react';
import { Box, ErrorP, Input, InputLabel } from './styled';

const InputBox = ({
  label,
  inputRef,
  type,
  id,
  name,
  min,
  max,
  placeholder,
  onChange,
  required,
  isValid,
  errorMsg,
  display,
}) => {
  const [inputValueState, setInputValueState] = useState('');

  const putInputValue = (event) => {
    setInputValueState(event.target.value);
  };

  return (
    <Box>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input
        ref={inputRef}
        id={id}
        type={type}
        name={name}
        minLength={min}
        maxLength={max}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        onInput={putInputValue}
      />
      {inputValueState.length !== 0 && (
        <ErrorP className={isValid && 'green'} display={display}>
          {errorMsg}
        </ErrorP>
      )}
    </Box>
  );
};

export default InputBox;
