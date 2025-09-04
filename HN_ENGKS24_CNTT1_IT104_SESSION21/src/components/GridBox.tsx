import React from 'react'

export default function GridBox() {
  return (
    <div className="grid grid-cols-3 gap-4 w-[500px] mx-auto">
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          key={i}
          className="bg-[rgb(217,70,239)] text-white font-semibold py-4 rounded-md text-center"
        >
          0{i + 1}
        </div>
      ))}
    </div>
  )
}
