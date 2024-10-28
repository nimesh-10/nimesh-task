// components/ProtectedRoute.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    const user = localStorage.getItem('userEmail'); // Check localStorage for user info
    // Redirect to login if not authenticated
    if (!user && !isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  return <>{isAuthenticated || localStorage.getItem('userEmail') ? children : null}</>;
};

export default ProtectedRoute;
