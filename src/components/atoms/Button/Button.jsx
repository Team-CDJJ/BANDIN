import { Btn } from './styled';

const Button = ({ type, size, state, txtcolor, tit, onClick }) => {
  return (
    <Btn
      type={type}
      size={size}
      state={state}
      txtcolor={txtcolor}
      onClick={onClick}
    >
      {tit}
    </Btn>
  );
};

export default Button;
