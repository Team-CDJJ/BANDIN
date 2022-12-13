import { useState } from 'react';

import logo from '../../assets/logo.png';
import SplashPage from './styled';

const Splash = () => {
  const [display, setDisplay] = useState('block');

  setTimeout(() => {
    setDisplay('none');
  }, 1500);
  return (
    <SplashPage display={display}>
      <img src={logo} alt='' className='logo' />
    </SplashPage>
  );
};

export default Splash;
