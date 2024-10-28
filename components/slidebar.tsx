// import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './redux/authSlice';
import Image from 'next/image';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from 'react-icons/md';
import { toast } from 'react-toastify';

const Slidebar = () => {
  const router = useRouter();
  // const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const userName = useSelector((state) => state.auth);

  useEffect(() => {
    if (userName?.user?.name) {
      setShow(true);
    }
  }, [userName]);

  // const handleLogout = () => {
  //   localStorage.removeItem('userEmail');
  //   localStorage.removeItem('userPassword');
  //   localStorage.removeItem('userName');

  //   dispatch(logout());
  //   toast.success("Successfully Logout User");
  //   setTimeout(() => {
  //     router.push('/');
  //   }, 1000);
  // };

  // Close sidebar and redirect
  const handleLinkClick = (href) => {
    if (window.innerWidth <= 768) {
      setShow(false);
    }
    router.push(href);
  };

  return (
    <>
      
      <div className={`flex min-h-screen border justify-between transition-all duration-500 nav-mobile
                      ${show ? 'w-[70%]  md:w-[40%]  lg:w-[20%]' : 'w-16 hidden sm:block'} 
                     bg-[#343a40] p-5  text-white z-50 overflow-hidden`}>

        <div className='fixed'>
          {show && (
            <>
              <span className=' text-3xl text-white  flex justify-center font-dash'>Dashboard</span>
              <div className='flex gap-3 flex-row items-center mt-10'>
                {/* <Image src='/user2-160x160.jpg' alt='User' height={30} width={30} className='rounded-full' /> */}
                {/* <h1 className='text-[18px] text-size text-[#c2c7d0] lg:text-[15px] hover:text-white'>Welcome {userName?.user?.name}.</h1> */}
              </div>
              <ul className='mt-10 flex flex-col gap-3'>
                <li className="cursor-pointer p-2 text-size text-xl text-white hover:text-black hover:bg-white hover:shadow-md hover:rounded-2xl" onClick={() => handleLinkClick('/dashboard')}>Todolist</li>
                {/* <li className="cursor-pointer p-2 text-xl text-size text-[#c2c7d0] hover:text-black hover:bg-white hover:shadow-md hover:rounded-2xl" onClick={() => handleLinkClick('/dashboard/userdetails')}>Account Details</li> */}
                {/* <li className="cursor-pointer p-2 text-xl text-size text-[#c2c7d0] hover:text-black hover:bg-white hover:shadow-md hover:rounded-2xl" onClick={() => handleLinkClick('/dashboard/todo')}>Add Todo</li> */}
                {/* <li className="cursor-pointer p-2 text-xl text-size text-[#c2c7d0] hover:text-black hover:bg-white hover:shadow-md hover:rounded-2xl" onClick={handleLogout}>Logout</li> */}
              </ul>
            </>
          )}
        </div>
        {/* <span className='mt-1 fixed'>
          {show ? (
            <MdOutlineClose onClick={() => setShow(false)} className='cursor-pointer ml-40' fontSize={30} />
          ) : (
            <RxHamburgerMenu onClick={() => setShow(true)} className='cursor-pointer' fontSize={30} />
          )}
        </span> */}
        </div>       
    </>
  );
}

export default Slidebar;


