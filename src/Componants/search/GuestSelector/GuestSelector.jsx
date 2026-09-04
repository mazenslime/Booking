import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'

function GuestSelector({lable='',clslable='',clsinp='',cls='',palce='',value='',onChange}) {
  return (
    <div className={`flex flex-col gap-2 justify-start ${cls}`}>
        <label htmlFor="search-guests" className={`text-lg font-bold ${clslable}`}>{lable}</label>
        <div className={`w-full px-4 py-2 bg-white ${clsinp}`}>
            <FontAwesomeIcon icon={faUser} className='w-1/10 text-[#2E5BFF]' />
            <input
              type="number"
              id="search-guests"
              min="1"
              placeholder={palce}
              className='w-9/10 bg-transparent outline-none'
              value={value}
              onChange={onChange}
            />
        </div>
    </div>
  )
}

export default GuestSelector
