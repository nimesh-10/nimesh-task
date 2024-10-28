// // pages/add-todo.js
// import React, { useState, useEffect } from 'react';
// import AddTodo from '@/components/form';
// import ProtectedRoute from '@/components/ProtectedRoute';

// const AddTodoData = () => {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     const savedTodos = localStorage.getItem('todos');
//     if (savedTodos) {
//       setTodos(JSON.parse(savedTodos));
//     }
//   }, []);

//   // const router = useRouter()
//   const handleAddTodo = (newTodo) => {
//     const updatedTodos = [...todos, newTodo];
//     setTodos(updatedTodos);
//     localStorage.setItem('todos', JSON.stringify(updatedTodos));
//     // router.push("/dashboard")
//   };

//   return (
//     <ProtectedRoute>
//     <div className='w-full  p-6 min-h-screen m-auto lg:flex lg:justify-center lg:flex-col lg:items-center'>
//       <AddTodo handleAddTodo={handleAddTodo} />
//     </div>
//     </ProtectedRoute>
//   );
// };

// export default AddTodoData;
