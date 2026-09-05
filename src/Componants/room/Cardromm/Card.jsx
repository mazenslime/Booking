import { useState } from 'react'
import Button from '../../Layout/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useOutletContext } from 'react-router'
function Card({hotelid,id,img='',title='',roomType='',isAvailable='',amenities=[],price='',hotelName='',room}){
  const [Width,setwidth]=useState(window.innerWidth)
  const Navgator=useNavigate()
  const { Loveroom, setLoveroom } = useOutletContext([]);
  const Love = Loveroom.some((favoriteRoom) => favoriteRoom?._id === id)
  function click(){
    Navgator(`/hotel/${hotelid}/${id}`)
  }
  function toggleFavorite(){
    setLoveroom((previousRooms) => Love
      ? previousRooms.filter((favoriteRoom) => favoriteRoom?._id !== id)
      : room ? [...previousRooms, room] : previousRooms
    )
  }
  window.addEventListener('resize',()=>{
    setwidth(window.innerWidth)
  })
  return (
    <div className={`flex ${Width<700?'flex-col':''}  items-start min-h-50  `}>
      <div className={`relative  h-full ${Width<700?'w-full':'w-1/3'} `}>
        {
                Love==true?
                <FontAwesomeIcon icon={faHeart} className='absolute top-2 right-2 z-1000 text-red-500 cursor-pointer' onClick={toggleFavorite} />
                :
                <FontAwesomeIcon icon={faHeart} className='absolute top-2 right-2 z-1000 text-gray-300/50 cursor-pointer' onClick={toggleFavorite}  />
        }
        {
        isAvailable==true?
          <div className='absolute top-2 left-2 bg-[#2E5BFF] z-1000   text-white px-2 py-1 rounded-full'>Available</div>
            :
          <div className='absolute top-2 left-2  bg-red-500 z-1000 text-white px-2 py-1 rounded-full'>Available</div>
        }
        <img className='relative h-full w-full' src={img} alt={title} />
      </div>
      {/* information */}
      <div className='w-2/3 px-4 py-2  flex flex-col  justify-between'>
        {/* top info */}
        <div className='flex justify-between items-start'>
          <div>
            <h2 className={`font-bold text-lg `}>{hotelName}</h2>
            <div className='flex flex-wrap gap-y-2 mt-1'>
             {
              amenities.map((amenity, index)=>{
                return <span key={index} className='bg-gray-200 font-semibold text-gray-800 px-2 py-1 rounded-md mr-2'>{amenity}</span>
              })
             }
            </div>
          </div>
        </div>
        {/* Bottom info */}
        <div className='flex justify-between  items-end py-4'>
          <div className='w-1/2'>
            <h2 className='font-bold '>price :{price}$</h2>
            <div>
                <span className='font-semibold text-gray-600 '>{isAvailable?'Available':'Not Available'}</span>
            </div>
            <p className='text-gray-600'>roomType :{roomType}</p>
          </div>
          <div className='w-1/2 flex justify-end'>
            {/* button */}
            <Button title={'View detiles'} cls=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center' handleClick={click}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card