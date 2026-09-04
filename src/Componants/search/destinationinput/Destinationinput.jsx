import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'

function Destinationinput({lable='',clslable='',clsinp='',cls='',palce,value,setValue,error}) {
  return (
    <div className={`flex flex-col gap-2 justify-start ${cls}`}>
        <label htmlFor="inp" className={`text-lg font-bold ${clslable}`}>{lable}</label>
        <div className={`w-full px-4 py-2 bg-white ${clsinp}`}>
            <FontAwesomeIcon icon={faLocationDot}  className='w-1/10 text-[#2E5BFF]' />
            <input type="text" id='inp' placeholder={error ? error : palce} className={`w-9/10 bg-transparent outline-none ${error ? 'text-red-500' : ''}`} value={value} onChange={(e)=>setValue(e.target.value)}/>
        </div>
    </div>
  )
}

export default Destinationinput