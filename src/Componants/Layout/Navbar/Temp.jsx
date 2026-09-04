import React from 'react'
import Button from '../Button/Button'

function CheackLogin() {
  return (
    <div className='flex items-center gap-2'>
       <Button title={'Login'} cls='bg-white cursor-pointer font-bold'/>
       <Button title={'rejester'} cls='text-white cursor-pointer font-bold'/>
    </div>
  )
}

export default CheackLogin