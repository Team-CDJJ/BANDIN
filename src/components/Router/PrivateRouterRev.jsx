import { Navigate } from 'react-router-dom';

const PrivateRotuerRev = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to='/' />;
};

export default PrivateRotuerRev;
