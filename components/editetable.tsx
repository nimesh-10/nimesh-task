import React from 'react';

const Editetable = ({ todo, handleDelete, handleEdit, index }) => {
  return (
    <>
      <td className="p-2 text-center ">{todo.name}</td>
      <td className="p-2 text-center ">{todo.age}</td>
      <td className="p-2 text-center ">{todo.phone}</td>
      <td className="p-2 text-center ">
        <div className="flex justify-center gap-2">
          <button
            className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition"
            onClick={() => handleDelete(index)}
          >
            Delete
          </button>
          <button
            className="bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-600 transition"
            onClick={() => handleEdit(index)}
          >
            Update
          </button>
        </div>
      </td>
    </>
  );
};

export default Editetable;





