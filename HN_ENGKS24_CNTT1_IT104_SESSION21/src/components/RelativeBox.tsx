import React from 'react'

export default function RelativeBox() {
  return (
    <div className="relative w-[300px] h-[200px] bg-sky-200 p-4 rounded-lg">
      <p className="text-gray-700 font-medium">Relative parent</p>

      <button
        className="
          absolute 
          bottom-4 
          left-4 
          bg-sky-500 
          hover:bg-sky-600 
          text-white 
          px-4 
          py-2 
          rounded-md 
          shadow-md 
          transition
        "
      >
        Absolute child
      </button>
    </div>
  )
}
