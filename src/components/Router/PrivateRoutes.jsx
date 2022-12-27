import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = ({ authorization }) => {
  // const token = localStorage.getItem('token');
  console.log(authorization);
  return authorization ? <Navigate to='/' /> : <Outlet />;
};

export default PrivateRoutes;
