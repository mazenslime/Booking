import {Outlet} from 'react-router'
import Navbar from './Componants/Layout/Navbar/Navbar'
import { useState } from 'react'
function App() {
  const [Loveroom,setLoveroom]=useState([])
  const [LoveHotel,setLoveHotel]=useState([])
  return (
    <div className='flex flex-col'>
      <Navbar/>
      <Outlet  context={{ Loveroom,LoveHotel,setLoveroom,setLoveHotel }} />
    </div>
  )
}

export default App
