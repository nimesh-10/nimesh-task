import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { login } from '@/components/redux/authSlice';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import Link from 'next/link';

const SignUp = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);

  const initialValues = {
    name: "",
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .max(16, "Password limit up to 16 characters")
      .required('Password is required'),
  });

  const onSubmit = async (values) => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  
    // Check if the email already exists
    const emailExists = existingUsers.some(user => user.email === values.email);
  
    if (emailExists) {
      toast.error("User with this email already exists.");
      return;
    }
    existingUsers.push(values);
    localStorage.setItem('users', JSON.stringify(existingUsers));
  
    dispatch(login({
      name: values.name,
      email: values.email,
    }));
    
    toast.success("Successfully signed up!");
    router.push('/dashboard');
  };
  

  return (
    <div className='bg-[#e6e6e6]'
    style={{
      backgroundImage: "url('/india_3.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      width: '100%',
    }}>
    <div className="flex items-center justify-center w-[100vw] h-screen">
      <div className="lg:w-full w-[90%] sm:max-w-md p-6 md:mt-10 mt-5 bg-white rounded-lg  shadow-2xl transform transition-all relative ">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="lg:space-y-5 space-y-1">
            <div className="flex justify-center absolute -lg:top-5 -top-10 left-[40%] sm:left-[45%]">
              <Image src="/imageedit_1_4528183390 (1).png" alt="reload" width={60} height={60} />
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-center text-indigo-500 hover:text-indigo-600 mt-10">Dashboard</h2>
            <p className="text-center text-gray-600 hover:text-gray-900 mt-4 sm:mt-6 mb-6 sm:mb-8 text-lg sm:text-2xl font-login">Welcome to the Dashboard🙏</p>

            <div>
              <div className='flex'>
                <label htmlFor="name" className="block text-lg sm:text-[20px] font-medium text-gray-600 hover:text-gray-800">Name:</label>
                <span className="text-red-500">*</span>
              </div>
              <div className="flex items-center rounded-md border-2  focus-within:ring-2 focus-within:ring-blue-500">
                <FaUserCircle className="mx-3 text-gray-500" />
                <Field type="text" id="name" name="name" placeholder="Enter Your Name" className="w-full rounded-md px-4 py-2 sm:py-3 focus:outline-none" />
              </div>
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <div className='flex'>
                <label htmlFor="email" className="block text-lg sm:text-[20px] font-medium text-gray-600 hover:text-gray-800">Email:</label>
                <span className="text-red-500">*</span>
              </div>
              <div className="flex items-center border-2  rounded-md focus-within:ring-2 focus-within:ring-blue-500">
                <AiOutlineMail className="mx-3 text-gray-500" />
                <Field type="email" id="email" name="email" placeholder="Enter Your Email" className="w-full rounded-md px-4 py-2 sm:py-3 focus:outline-none" />
              </div>
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <div className='flex'>
                <label htmlFor="password" className="block text-lg sm:text-[20px] font-medium text-gray-600 hover:text-gray-800">Password:</label>
                <span className="text-red-500">*</span>
              </div>
              <div className="flex items-center border-2  rounded-md  focus-within:ring-2 focus-within:ring-blue-500">
                <AiOutlineLock className="mx-3 text-gray-500" />
                <Field type="password" id="password" name="password" placeholder="Enter Your Password" className="w-full rounded-md px-4 py-2 sm:py-3 focus:outline-none" />
              </div>
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
            </div>

            <div className='flex justify-center'>
              <button type='submit'>
                <a href="#_" className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                  <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                  <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                  <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Sign Up</span>
                </a>
              </button>
            </div>
          </Form>
        </Formik>
        <h2 className='text-[15px] font-thin flex justify-center mt-4 items-center'>Allready have an Account?
          <Link href={"/"}> <span className='text-[15px] text-blue-500'>Login</span> </Link>
        </h2>
        <div className='border-b-2 mt-1'></div>
        <div className='flex  flex-col justify-center items-center mt-2'>
        <h1 className='text-[10px]'>By continuing you agree to our Terms & Policy</h1>
        <h2 className='text-[10px]'>© 2022 NextSpeed Technologies Private Limited. All rights reserved. </h2>
      </div>
      </div>
    </div>
  </div>
  );
};

SignUp.PrimaryLayout = false;

export default SignUp;
