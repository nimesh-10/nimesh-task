import useSessionTimeout from '@/components/hooks/sessiontimeout';
import ProtectedRoute from '@/components/ProtectedRoute';
import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  useSessionTimeout(200000);
  
  const userName = useSelector(state => state.auth)

  return (
    <ProtectedRoute>
    <div className=' flex flex-col gap-3 itemshow'>
      <div className='ml-3 mt-10'>        
        <p className='lg:text-3xl text-2xl text-gray-600  hover:text-black'>Name: {userName?.user?.name}</p>
        <p className='lg:text-3xl text-xl  text-gray-600  hover:text-black'>Email: {userName?.user?.email}</p>
        <p className='lg:text-3xl text-xl  text-gray-600  hover:text-black'>Password: {userName?.user?.password}</p>
        </div>

    </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
