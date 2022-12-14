import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home/Home';
import EmailLogin from './pages/EmailLogin/EmailLogin';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
// import Home from './pages/Home/Home';
import Following from './pages/Following/Following';
import TopBasicNav from './components/CommonUI/Nav/TopBasicNav/TopBasicNav';
import TopSearchNav from './components/CommonUI/Nav/TopSearchNav/TopSearchNav';
import TopMainNav from './components/CommonUI/Nav/TopMainNav/TopMainNav';
import TopUploadNav from './components/CommonUI/Nav/TopUploadNav/TopUploadNav';
import TopChatNav from './components/CommonUI/Nav/TopChatNav/TopChatNav';
import TabMenu from './components/CommonUI/TabMenu/TabMenu';
import Comment from './components/CommonUI/Comment/Comment';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/' element={<Login />} />
        <Route path='/emaillogin' element={<EmailLogin />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/following' element={<Following />} />
        <Route path='/topbasicnav' element={<TopBasicNav />} />
        <Route path='/topsearchnav' element={<TopSearchNav />} />
        <Route path='/topmainnav' element={<TopMainNav />} />
        <Route path='/topuploadnav' element={<TopUploadNav />} />
        <Route path='/topchatnav' element={<TopChatNav />} />
        <Route path='/tabmenu' element={<TabMenu />} />
        <Route path='/comment' element={<Comment />} />
        {/* <Route path='/comment' element={<Comment />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
