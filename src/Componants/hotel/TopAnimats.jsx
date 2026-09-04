import React from 'react'
import {facilityIcons} from '../../assets/assets/assets'
function TopAnimats({amenities,cls}) {
  return (
    <div className={`flex gap-2 `}>
        {
            amenities?.map((ele)=>{
                return <h3 className={`flex gap-3 ${cls}`}><span>{ele}</span><img src={facilityIcons[ele]} className='w-5 h-5'/></h3>
            })
        }
    </div>
  )
}

export default TopAnimats