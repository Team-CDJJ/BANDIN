import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home/Home';
import EmailLogin from './pages/EmailLogin/EmailLogin';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
// import Home from './pages/Home/Home';
import Following from './pages/Following/Following';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/' element={<Login />} />
        <Route path='/emaillogin' element={<EmailLogin />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/following' element={<Following />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
