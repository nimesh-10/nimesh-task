import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { HiOutlineCake, HiPhone, HiUser } from 'react-icons/hi';

const AddTodo = ({ handleAddTodo }) => {
  const initialValues = {
    name: '',
    phone: '',
    age: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required.'),
    phone: Yup.string()
      .required('Phone is required.')
      .min(10, "Minimum 10 digits for phone number.")
      .max(10, "Maximum 10 digits for phone number."),
    age: Yup.number()
      .required('Age is required.')
      .positive('Age must be positive.')
      .integer('Age must be an integer.'),
  });

  const onSubmit = (values, { resetForm }) => {
    handleAddTodo(values);
    toast.success("Todo added successfully in table!");
    resetForm();
  };

  return (
    <div className="w-full h-[70%] max-w-lg mx-auto p-4 md:p-6 lg:p-6 mt-16 lg:m-10 border border-gray-900 bg-white shadow-lg rounded-lg">
      <h2 className="lg:text-3xl text-[25px] md:text-2xl font-bold text-gray-600 mb-6 text-center hover:text-gray-800 underline">
        Add New Todo </h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="space-y-6">
          <div>

            <div className='flex items-center'>
              <label className="block text-[18px] font-medium text-gray-600 hover:text-gray-800">Name:</label>
              <span className="text-red-500">*</span>
            </div>
            <div className="flex items-center border  border-gray-300  focus-within:ring-2 focus-within:ring-blue-500">
              <HiUser className="text-blue-500 mx-3" />
              <Field name="name" placeholder="Enter Your Name." className="w-full px-4 py-2 sm:py-3 focus:outline-none" />
            </div>
            <ErrorMessage name="name" component="div" className="text-red-500 mt-1" />

          </div>

          <div>

            <div className='flex items-center'>
              <label className="block text-[18px] font-medium text-gray-600 hover:text-gray-800">Phone Number:</label>
              <span className="text-red-500">*</span>
            </div>
            <div className="flex items-center border  border-gray-300  focus-within:ring-2 focus-within:ring-blue-500">
              <HiPhone className="text-blue-500 mx-3" />
              <Field name="phone" placeholder="Enter Your Phone Number." className="w-full px-4 py-2 sm:py-3 focus:outline-none" />
            </div>
            <ErrorMessage name="phone" component="div" className="text-red-500 mt-1" />
          </div>

          <div>

            <div className='flex  items-center'>
              <label className="block text-[18px] font-medium text-gray-600 hover:text-gray-800">Age:</label>
              <span className="text-red-500">*</span>
            </div>
            <div className="flex items-center border  border-gray-300  focus-within:ring-2 focus-within:ring-blue-500">
              <HiOutlineCake className="text-blue-500 mx-3" />
              <Field name="age" type="number" placeholder="Enter Your Age." className="w-full px-4 py-2 sm:py-3 focus:outline-none" />
            </div>
            <ErrorMessage name="age" component="div" className="text-red-500 mt-1" />
          </div>
          <div className='flex justify-center'>
            {/* <button type="submit" className="w-1/2 p-3 lg:w-1/3 md:w-1/3 bg-blue-500 hover:bg-blue-700 text-white font-semibold text-[13px] lg:text-[17px] rounded-md transition duration-300 ease-in-out">
              Add Todo
            </button> */}
            <button type='submit'>
              <a href="#_" className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Add Todo</span>
              </a>
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AddTodo;




// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { toast } from 'react-toastify';
// import { HiUser, HiPhone, HiOutlineCake } from 'react-icons/hi';

// const AddTodo = ({ handleAddTodo }) => {
//   const initialValues = {
//     name: '',
//     phone: '',
//     age: '',
//   };

//   const validationSchema = Yup.object({
//     name: Yup.string().required('Name is required.'),
//     phone: Yup.string()
//       .required('Phone is required.')
//       .min(10, "Minimum 10 digits for phone number.")
//       .max(10, "Maximum 10 digits for phone number."),
//     age: Yup.number()
//       .required('Age is required.')
//       .positive('Age must be positive.')
//       .integer('Age must be an integer.'),
//   });

//   const onSubmit = (values, { resetForm }) => {
//     handleAddTodo(values);
//     toast.success('Todo added successfully!');
//     resetForm();
//   };

//   return (
//     <div className="flex justify-center items-center">
//       <div className="flex bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-2xl">
//         <div className="hidden lg:block w-1/2 bg-teal-500 p-8">
//           <h2 className="text-4xl font-bold text-white mb-4">Your Todos</h2>
//           <p className="text-lg text-white">Manage your todos effectively and stay organized!</p>
//         </div>
//         <div className="w-full lg:w-1/2 p-8">
//           <h2 className="text-3xl font-bold text-gray-800 mb-6">Add a New Todo</h2>
//           <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={onSubmit}
//           >
//             <Form className="space-y-6">
//               <div className="flex flex-col">
//                 <label className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
// <HiUser className="text-teal-500 mr-2" />
//                   Name:
//                 </label>
//                 <Field
//                   name="name"
//                   placeholder="Enter your name"
//                   className="block w-full p-4 border-2 border-gray-300 rounded-md focus:border-teal-500 focus:ring-teal-500 focus:outline-none transition duration-200"
//                 />
//                 <ErrorMessage name="name" component="div" className="text-red-500 mt-1" />
//               </div>

//               <div className="flex flex-col">
//                 <label className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
// <HiPhone className="text-teal-500 mr-2" />
//                   Phone Number:
//                 </label>
//                 <Field
//                   name="phone"
//                   placeholder="Enter your phone number"
//                   className="block w-full p-4 border-2 border-gray-300 rounded-md focus:border-teal-500 focus:ring-teal-500 focus:outline-none transition duration-200"
//                 />
//                 <ErrorMessage name="phone" component="div" className="text-red-500 mt-1" />
//               </div>

//               <div className="flex flex-col">
//                 <label className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
// <HiOutlineCake className="text-teal-500 mr-2" />
//                   Age:
//                 </label>
//                 <Field
//                   name="age"
//                   type="number"
//                   placeholder="Enter Your age"
//                   className="block w-full p-4 border-2 border-gray-300 rounded-md focus:border-teal-500 focus:ring-teal-500 focus:outline-none transition duration-200"
//                 />
//                 <ErrorMessage name="age" component="div" className="text-red-500 mt-1" />
//               </div>

//               <div className="flex justify-center">
//                 <button
//                   type="submit"
//                   className="w-full py-3 px-6 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 transition duration-300"
//                 >
//                   Add Todo
//                 </button>
//               </div>
//             </Form>
//           </Formik>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddTodo;
