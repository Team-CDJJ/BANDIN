import { Route, Routes } from 'react-router-dom';
// import { useRecoilState } from 'recoil';
// import { useEffect } from 'react';
// import { isLogin } from './atoms';

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
import PrivateRotuer from './components/Router/PrivateRouter';
import PrivateRotuerRev from './components/Router/PrivateRouterRev';

const App = () => {
  // const token = localStorage.getItem('token');
  // const navigate = useNavigate();
  // const [isLoginState, setIsLoginState] = useRecoilState(isLogin);
  // console.log(isLoginState);
  // console.log(token);

  // useEffect(() => {
  //   setIsLoginState(() => {
  //     return !!token;
  //   });
  // }, []);

  return (
    <Routes>
      <Route
        path='/'
        element={
          <PrivateRotuer>
            <Login />
          </PrivateRotuer>
        }
      />
      <Route
        path='/home'
        element={
          <PrivateRotuerRev>
            <Home />
          </PrivateRotuerRev>
        }
      />
      <Route path='/emaillogin' element={<EmailLogin />} />
      <Route path='/chatlist' element={<ChatList />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signup/setupprofile' element={<SetUpProfile />} />
      <Route path='/follower' element={<Follower />} />
      <Route path='/following' element={<Following />} />
      <Route path='/search' element={<UserSearch />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  );
};

export default App;
