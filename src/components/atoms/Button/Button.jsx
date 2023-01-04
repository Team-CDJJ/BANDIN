import { Btn } from './styled';

const Button = ({ type, size, state, tit, onClick, disabled }) => {
  return (
    <Btn
      type={type}
      size={size}
      state={state}
      onClick={onClick}
      disabled={disabled}
    >
      {tit}
    </Btn>
  );
};

export default Button;
