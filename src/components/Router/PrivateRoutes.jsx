import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = ({ authorization }) => {
  console.log(authorization);
  return authorization ? <Navigate to='/' /> : <Outlet />;
};

export default PrivateRoutes;
