import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass,faHeart} from '@fortawesome/free-solid-svg-icons'
import CheackLogin from './Temp'
import { useNavigate } from 'react-router'
function Navbar() {
  const navigator=useNavigate()
  return (
    <div className='w-full flex justify-between items-center bg-white px-10 py-10 '>
        <div>
            <h1 className='text-blue-500 font-bold text-2xl cursor-pointer' onClick={()=>{navigator('/')}}>Zearo</h1>
        </div>
        <div className=' flex gap-4 items-center'>
            <div>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="cursor-pointer" onClick={()=>{navigator('/search')}} />
            </div>
            <div>
                <FontAwesomeIcon icon={faHeart} className="text-red-500 cursor-pointer" onClick={()=>{navigator('/favorites')}} />
            </div>
            <div>
               <CheackLogin/>
            </div>
        </div>
    </div>
  )
}

export default Navbar