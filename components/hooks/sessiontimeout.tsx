import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';

const useSessionTimeout = (timeoutDuration) => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    let timeoutId;

    const resetTimer = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        // Clear user data from localStorage
        localStorage.removeItem('userName'); // Adjust the key based on your storage
        localStorage.removeItem('userEmail'); // Adjust the key based on your storage
        localStorage.removeItem('userPassword'); // Adjust the key based on your storage
        // Dispatch logout action in Redux
        dispatch(logout());
        // Redirect to login page
        router.push('/');
      }, timeoutDuration);
    };

    const handleUserActivity = () => {
      resetTimer();
    };

    resetTimer();

    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('keypress', handleUserActivity);
    window.addEventListener('click', handleUserActivity);
    window.addEventListener('scroll', handleUserActivity);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keypress', handleUserActivity);
      window.removeEventListener('click', handleUserActivity);
      window.removeEventListener('scroll', handleUserActivity);
    };
  }, [router, timeoutDuration, dispatch]);
};

export default useSessionTimeout;
