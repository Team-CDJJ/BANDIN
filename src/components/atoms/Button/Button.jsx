import { Btn } from './styled';

const Button = ({ type, size, state, tit, onClick }) => {
  return (
    <Btn type={type} size={size} state={state} onClick={onClick}>
      {tit}
    </Btn>
  );
};

export default Button;
