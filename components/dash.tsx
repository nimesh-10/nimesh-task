// import EditeData from '@/components/editeindex';
// import Editetable from '@/components/editetable';
// import Model from '@/components/model';
// import ProtectedRoute from '@/components/ProtectedRoute';
// import React, { useState, useEffect } from 'react';
// import { toast } from 'react-toastify';

// const Dash = () => {
//   const [todos, setTodos] = useState([]);
//   const [model, setModel] = useState(false);
//   const [selectedIndex, setSelectedIndex] = useState(null);
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [editingTodo, setEditingTodo] = useState({ name: '', age: '', phone: '' });

//   useEffect(() => {
//     const savedTodos = localStorage.getItem('todos');
//     if (savedTodos) {
//       setTodos(JSON.parse(savedTodos));
//     }
//   }, []);

//   const handleDelete = (index) => {
//     setSelectedIndex(index);
//     setModel(true);
//   };

//   const confirmDelete = () => {
//     if (selectedIndex !== null) {
//       const newTodos = todos.filter((_, i) => i !== selectedIndex);
//       setTodos(newTodos);
//       localStorage.setItem('todos', JSON.stringify(newTodos));
//       setModel(false);
//       toast.success("Todo deleted successfully in table!")
//       setSelectedIndex(null);
//     }
//   };

//   const cancelDelete = () => {
//     setModel(false);
//     setSelectedIndex(null);
//     toast.success("Todo not deleted in table!")

//   };

//   const handleEdit = (index) => {
//     setEditingIndex(index);
//     setEditingTodo(todos[index]);
//   };

//   const handleSaveEdit = (values) => {
//     const updatedTodos = todos.map((todo, index) => (index === editingIndex ? values : todo));
//     setTodos(updatedTodos);
//     localStorage.setItem('todos', JSON.stringify(updatedTodos));
//     toast.success("Successfull Change Todo")
//     setEditingIndex(null);
//   };

//   const handleCancelEdit = () => {
//     setEditingIndex(null);
//   };






//   useEffect(() => {
//     const savedTodos = localStorage.getItem('todos');
//     if (savedTodos) {
//       setTodos(JSON.parse(savedTodos));
//     }
//   }, []);


//   return (
//     <ProtectedRoute>
//       <div className='w-full flex flex-row justify-center'>
//       <div className="w-full h-1/2 mx-auto lg:p-3 md:p-3 overflow-scroll lg:overflow-hidden">
//         <div className="mt-10">
//           <h2 className="text-2xl font-semibold mb-6 text-gray-600 hover:text-gray-900 text-center underline decoration-gray-600 hover:decoration-gray-900">Todo List</h2>

//           <div className="lg:shadow-xl md:shadow-xl p-3 lg:p-10">
//             <table className="min-w-full bg-white border border-black">
//               <thead className="bg-gray-200 hover:bg-gray-300">
//                 <tr>
//                   <th className="p-4 text-center font-semibold text-black text-[16px] border border-black hover:text-red-500">Name</th>
//                   <th className="p-4 text-center font-semibold text-black text-[16px] border border-black hover:text-red-500">Age</th>
//                   <th className="p-4 text-center font-semibold text-black text-[16px] border border-black hover:text-red-500">Phone Number</th>
//                   <th className="p-4 text-center font-semibold text-black text-[16px] border border-black hover:text-red-500">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {todos.map((todo, index) => (
//                   <tr key={index} className="bg-white w-screen hover:bg-gray-100 transition">
//                     {editingIndex === index ? (
//                       <EditeData
//                         editingTodo={editingTodo}
//                         handleSaveEdit={handleSaveEdit}
//                         handleCancelEdit={handleCancelEdit}
//                       />
//                     ) : (
//                       <Editetable
//                         todo={todo}
//                         handleDelete={handleDelete}
//                         handleEdit={handleEdit}
//                         index={index}
//                       />
//                     )}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {model && (
//           <Model cancelDelete={cancelDelete} confirmDelete={confirmDelete}/>
//           )}

//           {model && <div className="fixed inset-0 bg-black opacity-70 z-40" />}
//         </div>
//       </div>
//       </div>
//     </ProtectedRoute>
//   );
// };

// export default Dash;







