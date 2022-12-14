import { Btn } from './styled';

const Button = ({ size, state, txtcolor, tit, onClick }) => {
  return (
    <Btn size={size} state={state} txtcolor={txtcolor} onClick={onClick}>
      {tit}
    </Btn>
  );
};

export default Button;
