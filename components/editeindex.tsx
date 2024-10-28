import React from 'react';
import { useFormik } from 'formik';

const EditeData = ({ editingTodo, handleSaveEdit, handleCancelEdit }) => {
  const formik = useFormik({
    initialValues: {
      name: editingTodo.name || '',
      age: editingTodo.age || '',
      phone: editingTodo.phone || '',
    },
    enableReinitialize: true,  
    onSubmit: (values) => {
      handleSaveEdit(values);  
    },
  });

  return (
    <>
      <td className="p-2 border text-center border-black">
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          className="border border-black p-2 w-1/2"
        />
      </td>
      <td className="p-2 border text-center border-black">
        <input
          type="number"
          name="age"
          value={formik.values.age}
          onChange={formik.handleChange}
          className="border border-black p-2 w-1/2"
        />
      </td>
      <td className="p-2 border text-center border-black">
        <input
          type="text"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          className="border border-black p-2 w-1/2"
        />
      </td>
      <td className="p-2 border text-center border-black">
        <div className="flex justify-center gap-2">
          <button className="bg-green-500 text-white px-3 py-1 rounded-full hover:bg-green-600 transition" onClick={formik.handleSubmit}>
            Save
          </button>
          <button className="bg-gray-500 text-white px-3 py-1 rounded-full hover:bg-gray-600 transition" onClick={handleCancelEdit}>
            Cancel
          </button>
        </div>
      </td>
    </>
  );
};

export default EditeData;
