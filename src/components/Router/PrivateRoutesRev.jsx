import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutesRev = ({ authorization }) => {
  // const token = localStorage.getItem('token');
  return authorization ? <Outlet /> : <Navigate to='/' />;
};

export default PrivateRoutesRev;
