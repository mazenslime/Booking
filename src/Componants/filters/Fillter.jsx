import React, { useState } from 'react'

function Fillter({label}) {
  const [open,setopen]=useState(false)
  return (
    <div className='w-full min-h-20 z-2000 px-4 py-1 flex flex-col gap-x-2 '>
      <div className='w-full px-4 py-2 text-center font-semibold border-1 border-[#2E5BFF] rounded-lg  cursor-pointer' onClick={()=>setopen(!open)}>
        {label}
      </div>
      {
        open&&<div className='m-h-30 w-full text-white text-center  bg-[#0F172A] rounded-lg transition-all duration-300'>
        <h1>All</h1>
      </div>
      }
    </div>
  )
}

export default Fillter