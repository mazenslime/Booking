import React from 'react'

function HeroHotel({image}) {
  return (
    <div className='relative h-150 w-full'>
        <img className='w-full h-full object-cover' src={image} alt="image hotel" />
    </div>
  )
}

export default HeroHotel