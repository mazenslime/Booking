import React from 'react'

function NaveHotel({overRif,RoomRef,REVIEWRef,LocRef,children}) {
  return (
    <div className='w-full flex gap-2 items-center'>
        <a href={overRif.current || '#overview'} className='font-semibold text-gray-800 hover:text-blue-500'>Overvie</a>
        <a href={RoomRef.current || '#rooms'} className='font-semibold text-gray-800 hover:text-blue-500'>rooms</a>
        <a href={REVIEWRef.current || '#reviews'} className='font-semibold text-gray-800 hover:text-blue-500'>Reviews</a>
        <a href={LocRef.current || '#location'} className='font-semibold text-gray-800 hover:text-blue-500'>Location</a>
        {children}   
    </div>
  )
}

export default NaveHotel