import React from 'react'
import { useNavigate } from 'react-router'
const PouplerCard = ({info,citie}) => {
  const navigate=useNavigate()
  function go(ele){
    navigate(`/search/${ele}`)
  }
  return (
    citie &&
    <div className={`relative  w-1/4 min-h-100 flex flex-col justify-items-center cursor-pointer overflow-clip  `} onClick={()=>{go(citie)}}>
        <img src={info?.image} alt=""  className='w-full h-full  rounded-lg hover:scale-125 object-cover duration-300  ' />
        <div className={`absolute bottom-2 left-2`}>
            <h3 className='font-semibold text-xl text-white '>{info?.name}</h3>
            <p className={`font-light text-white `}>{citie}</p>
        </div>
    </div>
  )
}

export default PouplerCard