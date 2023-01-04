import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Login from '../Login/Login';
import logo from '../../assets/logo-txt.png';
import SplashPage from './styled';

const Splash = () => {
  const [showUp, setShowUp] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowUp(false);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  });

  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      navigate('/home');
    }
  }, []);

  return showUp ? (
    <SplashPage>
      <img src={logo} alt='' className='logo' />
    </SplashPage>
  ) : (
    <Login />
  );
};

export default Splash;
