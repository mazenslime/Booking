import { useRef } from "react"
import {roomsDummyData} from '../../assets/assets/assets'
import { useOutletContext, useParams } from "react-router";
import HeroHotel from "../../Componants/room/PageRoom/HeroHotel";
import INFO from '../../Componants/room/PageRoom/INFO'
import About from '../../Componants/room/PageRoom/About'
import Naveroom from '../../Componants/room/PageRoom//NaveHotel'
import TopAnimatss from '../../Componants/room/PageRoom/TopAnimats'
import Reviews from '../../Componants/room/PageRoom/Reviews'
export default function Room(){
    const { Loveroom, setLoveroom } = useOutletContext()
    const {id}=useParams();
    const room=roomsDummyData.find((item)=>item._id==id) || {}
    const RoomRef=useRef(null)
    const REVIEWRef=useRef(null)
    const LocRef=useRef(null)
    const overRif=useRef(null)
    const isFavorite = Loveroom.some((favoriteRoom) => favoriteRoom._id === room?._id)
    function toggleFavorite() {
        setLoveroom((previousRooms) => isFavorite
            ? previousRooms.filter((favoriteRoom) => favoriteRoom._id !== room._id)
            : [...previousRooms, room]
        )
    }
    return(
        <>
        <HeroHotel images={room?.images} />
        <div className='pl-10 py-10 w-3/4 flex flex-col gap-y-6'>
            <INFO contact={room?.hotel?.contact} address={room?.hotel?.city} Location={room?.hotel?.location} rating={room?.hotel?.rating} reviews={room?.hotel?.reviews} name={room?.name} roomType={room['roomType']} price={room?.pricePerNight} isFavorite={isFavorite} onToggleFavorite={toggleFavorite} ref={overRif}  />
            <About title={room?.hotel?.name} name={room?.hotel?.name}  description={room?.hotel?.description} ref={overRif} />
            <Naveroom overRif={overRif} RoomRef={RoomRef} REVIEWRef={REVIEWRef} LocRef={LocRef} />
            <TopAnimatss amenities={room?.amenities} cls={'bg-gray-200 font-semibold text-gray-800 px-2 py-1 rounded-md mr-2'}/>
            <div ref={REVIEWRef}>
                <Reviews rating={room?.hotel?.rating} reviewCount={room?.hotel?.reviews} />
            </div>
        </div>
        </>
    )
}
