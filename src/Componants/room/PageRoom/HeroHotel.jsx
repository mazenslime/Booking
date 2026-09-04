import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faMinus} from "@fortawesome/free-solid-svg-icons"
function HeroHotel({images=[]}) {
  console.log(images);
  
  const [img,setimags]=useState(0)
  return (
    <div className='relative h-150 w-full'>
        <img className='w-full h-full object-cover' src={images?.[img]} alt="image hotel" />
        <div className='absolute  bottom-5 left-4/10 space-x-6 bg-transparent '>
          {
            images.map((ele,i)=>{
              return <span className={`font-bold cursor-pointer  ${img==i?'text-[#0F172A]':'text-white'}   bg-transparent text-4xl duration-300`} onClick={()=>{setimags(i)}}><FontAwesomeIcon icon={faMinus} /></span>
            })
          }
        </div>
    </div>
  )
}

export default HeroHotel