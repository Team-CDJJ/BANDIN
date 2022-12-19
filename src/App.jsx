import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { isLogin } from './atoms';

import Home from './pages/Home/Home';
import EmailLogin from './pages/EmailLogin/EmailLogin';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import SetUpProfile from './pages/SetUpProfile/SetUpProfile';
import Follower from './pages/Follower/Follower';
import Following from './pages/Following/Following';
import NotFound from './pages/404/404';
import UserSearch from './pages/Search/Search';
import ChatList from './pages/ChatList/ChatList';

const App = () => {
  const token = localStorage.getItem('token');
  // const [isLoginState, setIsLoginState] = useState(false);
  const [isLoginState, setIsLoginState] = useRecoilState(isLogin);
  console.log(isLoginState);

  useEffect(() => {
    setIsLoginState(() => {
      // eslint-disable-next-line no-unneeded-ternary
      return token ? true : false;
    });
  }, []);

  // useEffect(() => {
  //   if (token === null) {
  //     setIsLoginState(false);
  //   } else {
  //     setIsLoginState(true);
  //   }
  // }, token);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            isLoginState ? <Home /> : <Navigate replace={true} to='/login' />
          }
        />
        <Route path='/login' element={<Login />} />
        <Route path='/login/emaillogin' element={<EmailLogin />} />
        <Route path='/chatlist' element={<ChatList />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signup/setupprofile' element={<SetUpProfile />} />
        <Route path='/follower' element={<Follower />} />
        <Route path='/following' element={<Following />} />
        <Route path='/search' element={<UserSearch />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
