import { Navigate } from 'react-router-dom';

const PrivateRotuer = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? <Navigate to='/home' /> : children;
};

export default PrivateRotuer;
