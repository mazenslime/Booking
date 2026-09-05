import React from 'react'
import Button from '../Button/Button'
import { useNavigate } from 'react-router'
function CheackLogin() {
  const navigator=useNavigate()
  function handleClicked(e){
        console.log(e.target.innerText);
        if(e.target.innerText==='Login'){
            navigator('/login')
        }
        if(e.target.innerText==='rejester'){
            navigator('/register')
        }
  }
  return (
    <div className='flex items-center gap-2'>
       <Button title={'Login'} cls='bg-white cursor-pointer font-bold' handleClick={(e)=>{handleClicked(e)}}/>
       <Button title={'rejester'} cls='text-white cursor-pointer font-bold' handleClick={(e)=>{handleClicked(e)}}/>
    </div>
  )
}

export default CheackLogin