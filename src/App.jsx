import { Route, Routes } from 'react-router-dom';

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
import ModifyProfile from './pages/ModifyProfile/ModifyProfile';
import PrivateRotuer from './components/Router/PrivateRouter';
import PrivateRotuerRev from './components/Router/PrivateRouterRev';
import Splash from './pages/Splash/Splash';
import MyProfile from './pages/MyProfile/MyProfile';
import AddProduct from './pages/AddProduct/AddProduct';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Splash />} />
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
      <Route path='/profile/:accountName' element={<MyProfile />} />
      {/* <Route path='/myprofile/:accountname' element={<MyProfile />} /> */}
      <Route path='/follower' element={<Follower />} />
      <Route path='/following' element={<Following />} />
      <Route path='/myprofile/addproduct' element={<AddProduct />} />
      <Route path='/search' element={<UserSearch />} />
      <Route path='/modifyprofile' element={<ModifyProfile />} />
      <Route path='/myprofile' element={<MyProfile />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  );
};

export default App;
