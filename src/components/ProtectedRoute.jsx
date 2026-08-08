import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute({ children }) {
  const { isAuthenticated, role } = useAuth();

  if (!isAuthenticated || role !== 'ADMIN') {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}

export default ProtectedRoute;