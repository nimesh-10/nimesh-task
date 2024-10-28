import React from 'react'

const NotifyModel = ({closenotifybox}) => {
  return (
    <div>
       <div className="bg-white w-[90%] lg:w-[50%] md:w-[70%] flex justify-center items-center flex-col lg:h-1/2 shadow-lg p-6 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 rounded-lg">
                <h1 className="text-lg font-medium mb-4">Comming soon...</h1>
                <div className="flex gap-4">
                  <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition" onClick={closenotifybox} >
                    Yes
                  </button>
                </div>
              </div>
    </div>
  )
}

export default NotifyModel
