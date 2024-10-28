import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { FaBell, FaSearch, FaUserAlt } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import { logout } from './redux/authSlice';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import NotifyModel from './notifymodel';


const Navbar = ({ setShow }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [opennotify, setOpennotify] = useState(false)
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userPassword');
    localStorage.removeItem('userName');

    dispatch(logout());
    toast.success("Successfully Logged Out");
    setTimeout(() => {
      router.push('/');
    }, 1000);
  };

  const opennotifybox = () => {
    setOpennotify(true)
  }
  const closenotifybox = () => {
    setOpennotify(false)
  }

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const userName = useSelector((state) => state.auth);

  return (
    <div className="p-4 bg-[#4053AE] shadow-xl mobile-width mobile navhide sticky top-0 z-50">
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-5'>
          <RxHamburgerMenu
            onClick={() => setShow(true)}
            className='cursor-pointer text-white'
            fontSize={30} 
          />
          <h1 className='text-3xl text-white font-extrabold'>Dashboard.</h1>
        </div>
        <div className='flex gap-2  focus-within:ring-2 bg-white focus-within:ring-blue-500 items-center p-3 w-[50%]'>
          <FaSearch  />
          <div className='border-l-black border h-5'></div>
          <input type='text' placeholder='Search' className='outline-none  w-full ' />
        </div>
        <div className='relative flex  items-center gap-5 p-2' ref={dropdownRef}>
          <div className='flex items-center gap-5'>
            <Image src='/user2-160x160.jpg' alt='User' height={30} width={30} className='rounded-full border border-white' />
            <h2 className='text-xl text-white hover:text-black'>Welcome {userName?.user?.name}</h2>
          </div>
          
          
          <FaBell className='text-white cursor-pointer hover:text-black' onClick={opennotifybox} />
          {opennotify && <NotifyModel closenotifybox={closenotifybox} />}
          {opennotify && <div className="fixed inset-0 bg-black opacity-70 z-40" />}
         
          <FaUserAlt onClick={toggleDropdown} className='cursor-pointer text-white hover:text-black' />
          {dropdownOpen && (
            <div className="absolute right-5 top-10 mt-1 w-48 bg-white border  shadow-lg z-50">
              <Link href="/dashboard/userdetails">
                <div className="px-4 py-2 hover:bg-blue-500 cursor-pointer hover:text-white">User Details</div>
              </Link>
              <div
                onClick={handleLogout}
                className="px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer"
              >
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;


