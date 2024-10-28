import EditeData from '@/components/editeindex';
import Editetable from '@/components/editetable';
import AddTodo from '@/components/form'
import useSessionTimeout from '@/components/hooks/sessiontimeout';
import Model from '@/components/model';
import ProtectedRoute from '@/components/ProtectedRoute';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const Dashboard = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);
  
  useSessionTimeout(100000);

  const [model, setModel] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingTodo, setEditingTodo] = useState({ name: '', age: '', phone: '' });

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  const handleDelete = (index) => {
    setSelectedIndex(index);
    setModel(true);
  };

  const confirmDelete = () => {
    if (selectedIndex !== null) {
      const newTodos = todos.filter((_, i) => i !== selectedIndex);
      setTodos(newTodos);
      localStorage.setItem('todos', JSON.stringify(newTodos));
      setModel(false);
      toast.success("Todo deleted successfully in table!")
      setSelectedIndex(null);
    }
  };

  const cancelDelete = () => {
    setModel(false);
    setSelectedIndex(null);
    toast.success("Todo not deleted in table!")

  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditingTodo(todos[index]);
  };

  const handleSaveEdit = (values) => {
    const updatedTodos = todos.map((todo, index) => (index === editingIndex ? values : todo));
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    toast.success("Successfull Change Todo")
    setEditingIndex(null);
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
  };



  // const router = useRouter()
  const handleAddTodo = (newTodo) => {
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    // router.push("/dashboard")
  };
  return (
    
      <div className='mt-5 flex flex-col  items-center'>  
         
      <AddTodo handleAddTodo={handleAddTodo} />
      {/* <Dash /> */}


      <ProtectedRoute>
      {/* <div className='w-full flex flex-row justify-center mt-10'> */}
      <div className="w-full h-[74%] mx-auto lg:p-3 md:p-3 overflow-scroll lg:overflow-hidden">
  <div>
    <h2 className="text-2xl font-semibold mb-6 text-gray-700 text-center underline decoration-gray-700 hover:decoration-gray-900">
      Todo List
    </h2>

    <div className="shadow-md p-5 rounded-lg bg-white">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-center font-semibold text-gray-800 text-[16px] border-b border-gray-300">Name</th>
            <th className="p-4 text-center font-semibold text-gray-800 text-[16px] border-b border-gray-300">Age</th>
            <th className="p-4 text-center font-semibold text-gray-800 text-[16px] border-b border-gray-300">Phone Number</th>
            <th className="p-4 text-center font-semibold text-gray-800 text-[16px] border-b border-gray-300">Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index} className="bg-white hover:bg-gray-50 transition">
              {editingIndex === index ? (
                <EditeData
                  editingTodo={editingTodo}
                  handleSaveEdit={handleSaveEdit}
                  handleCancelEdit={handleCancelEdit}
                />
              ) : (
                <Editetable
                  todo={todo}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                  index={index}
                />
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {model && (
      <Model cancelDelete={cancelDelete} confirmDelete={confirmDelete} />
    )}

    {model && <div className="fixed inset-0 bg-black opacity-70 z-40" />}
  </div>
</div>

      {/* </div> */}
    </ProtectedRoute>

    </div>
  )
}

export default Dashboard


