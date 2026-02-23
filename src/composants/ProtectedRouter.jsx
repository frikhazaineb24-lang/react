import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, element, redirectPath = "/login" }) => {
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }
  return element;
};

export default ProtectedRoute;