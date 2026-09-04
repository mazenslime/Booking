import React, { useEffect } from 'react'
import HeroHotel from '../../Componants/hotel/HeroHotel'
import INFO from '../../Componants/hotel/INFO'
import About from '../../Componants/hotel/About'
import Navehotel from '../../Componants/hotel/NaveHotel'
import TopAnimatss from '../../Componants/hotel/TopAnimats'
import CardRoom from '../../Componants/hotel/RoomsSection'
import {hotelDummyData} from '../../assets/assets/assets'
import {roomsDummyData} from '../../assets/assets/assets'
import { useOutletContext, useParams } from 'react-router'
function Hotelpage(){
    const { LoveHotel, setLoveHotel } = useOutletContext()
    const {hotelId}=useParams();
    const [hotel,setHotel]=React.useState({})
    const [rooms,setRooms]=React.useState([])
    const RoomRef=React.useRef(null)
    const REVIEWRef=React.useRef(null)
    const LocRef=React.useRef(null)
    const overRif=React.useRef(null)
    const isFavorite = LoveHotel.some((favoriteHotel) => favoriteHotel._id === hotel?._id)
    function toggleFavorite() {
        setLoveHotel((previousHotels) => isFavorite
            ? previousHotels.filter((favoriteHotel) => favoriteHotel._id !== hotel._id)
            : [...previousHotels, hotel]
        )
    }
    useEffect(()=>{
        const hotelData=hotelDummyData.find((hotel)=>hotel._id==hotelId)
        const roomData=roomsDummyData.filter((room)=>room.hotel._id==hotelId)
        setHotel(hotelData)
        setRooms(roomData)
    },[hotelId])
    return(
        <>
        <HeroHotel image={hotel?.image} />
        <div className='pl-10 py-10 w-3/4 flex flex-col gap-y-6'>
            <INFO contact={hotel?.contact} address={hotel?.address} Location={hotel?.location} rating={hotel?.rating} reviews={hotel?.reviews} name={hotel?.name} isFavorite={isFavorite} onToggleFavorite={toggleFavorite} ref={overRif} />
            <About title={hotel?.name} name={hotel?.name}  description={hotel?.description} ref={overRif} />
            <Navehotel overRif={overRif} RoomRef={RoomRef} REVIEWRef={REVIEWRef} LocRef={LocRef} />
            <TopAnimatss amenities={hotel?.amenities} cls={'bg-gray-200 font-semibold text-gray-800 px-2 py-1 rounded-md mr-2'}/>
            <CardRoom Romms={rooms} />
        </div>
        </>
    )
}

export default Hotelpage