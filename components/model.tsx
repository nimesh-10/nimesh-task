import React from 'react'

const Model = ({confirmDelete, cancelDelete}) => {
  return (
    <div className="bg-white w-[90%] lg:w-[40%] md:w-[70%] shadow-lg p-6 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 rounded-lg">
    <h1 className="text-lg font-medium mb-4">Are you sure you want to delete this item?</h1>
    <div className="flex gap-4">
      <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition" onClick={confirmDelete}>
        Yes
      </button>
      <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition" onClick={cancelDelete}>
        No
      </button>
    </div>
  </div>
  )
}

export default Model
