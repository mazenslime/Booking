import React from 'react'
import Card from '../room/Cardromm/Card'

function RoomsSection({Romms}) {
    console.log(Romms)
  return (
    <div className='flex flex-col gap-4 '>
        <h2 className='font-bold text-xl '>AVilable Rooms</h2>
        <div>
            {
                Romms?.map((Room)=>{
                    return <Card key={Room._id} room={Room} hotelid={Room.hotel._id} id={Room._id} img={Room.images[0]} roomType={Room.roomType}  isAvailable={Room.isAvailable} amenities={Room.amenities} price={Room.pricePerNight} btnlable={'Book Now'} hotelName={Room?.hotel?.name} />
                })
            }
        </div>
    </div>
  )
}

export default RoomsSection