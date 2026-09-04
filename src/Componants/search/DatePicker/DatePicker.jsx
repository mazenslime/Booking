import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCalendarDays} from '@fortawesome/free-solid-svg-icons'

function DatePicker({lable='',clslable='',clsinp='',cls='',palce='',value='',onChange}) {
  return (
    <div className={`flex flex-col gap-2 justify-start ${cls}`}>
        <label htmlFor="search-date" className={`text-lg font-bold ${clslable}`}>{lable}</label>
        <div className={`w-full px-4 py-2 bg-white ${clsinp}`}>
            <FontAwesomeIcon htmlFor="search-date" icon={faCalendarDays} className='w-2/10 text-[#2E5BFF] ' />
            <input
              type="date"
              id="search-date"
              placeholder={palce}
              className='w-5/10  outline-none'
              value={value&&formatDateTime(new Date())}
              onChange={onChange}
            />
        </div>
    </div>
  )
}

export default DatePicker
