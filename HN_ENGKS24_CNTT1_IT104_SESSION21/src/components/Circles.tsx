import React from 'react'

export default function Circles() {
  return (
    <div className="flex gap-2">
      {/* Hình tròn xanh dương */}
      <div className="w-[200px] h-[200px] rounded-full bg-[#3b82f6]"></div>

      {/* Hình tròn đỏ */}
      <div className="w-[200px] h-[200px] rounded-full bg-[#ef4444]"></div>

      {/* Hình tròn xanh lá */}
      <div className="w-[200px] h-[200px] rounded-full bg-[#22c55e]"></div>
    </div>
  )
}
