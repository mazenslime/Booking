import React from 'react'

function About({title,description}) {
  return (
    <div className='w-full space-y-2'>
        <h2 className='font-bold text-xl'>{title}</h2>
        <p>{description}</p>
    </div>
  )
}

export default About