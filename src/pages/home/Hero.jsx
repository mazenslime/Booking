import React from 'react'
import Destinationinput from '../../Componants/search/destinationinput/Destinationinput'
import DatePicker from '../../Componants/search/DatePicker/DatePicker'
import GuestSelector from '../../Componants/search/GuestSelector/GuestSelector'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router'
import { buildSearchPath } from '../../utils/search'
function Hero() {
  const navigate=useNavigate()
  const [destination,setDestination]=React.useState('')
  const [date,setDate]=React.useState('')
  const [guest,setGuest]=React.useState('')
  const [error,setError]=React.useState('')
  const handleSearch=()=>{
    if(destination || date || guest){
      navigate(buildSearchPath({ q: destination, date, guests: guest }))
    }else{
      setError('Please enter a destination')
      setTimeout(()=>{
        setError('')
      },3000)
    }
  }
  return (
    <div className={`w-full relative background h-lvh`}>
        <div className={`w-3/4 min-h-fit mx-auto relative top-7/10 justify-center items-center  flex gap-2 bg-white  py-4 rounded-lg`}>
            <Destinationinput lable="Destnation" clslable='text-gray-500/50 text-lg px-4 font-semibold' cls=' gap-3 align-start' palce={'france,parise'} value={destination} setValue={setDestination} error={error}/>
            <DatePicker lable="Date" clslable='text-gray-500/50 text-lg  px-4 font-semibold' cls=' gap-3 align-start' value={date} onChange={(e)=>setDate(e.target.value)}/>
            <GuestSelector lable="Guest" clslable='text-gray-500/50 text-lg  px-4 font-semibold' cls='gap-3 align-start' palce={'2'} value={guest} onChange={(e)=>setGuest(e.target.value)}/>
            <div className='bg-[#2E5BFF] px-2 py-2 text-white mt-5 rounded-lg text-xl cursor-pointer ' onClick={handleSearch}>
                <FontAwesomeIcon icon={faMagnifyingGlass}  />
            </div>
        </div>
  </div>
);
}
export default Hero;