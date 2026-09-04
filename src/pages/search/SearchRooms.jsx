import React, { useEffect, useState } from 'react'
import Fillter from '../../Componants/filters/Fillter'
import Card from '../../Componants/room/Cardromm/Card'
import { useSearchParams } from 'react-router'
import { readSearchParams, searchRooms } from '../../utils/search'

function SearchRooms() {
  const [searchParams] = useSearchParams()
  const { q, date, guests } = readSearchParams(searchParams)
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    setRooms(searchRooms(q, guests, date))
  }, [q, date, guests])

  return (
    <div className="flex flex-col space-y-8">
      {rooms.length > 0 ? (
        rooms.map((room) => (
          <div key={room._id} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <Card
              hotelid={room.hotel._id}
              id={room._id}
              img={room.images[0]}
              roomType={room.roomType}
              isAvailable={room.isAvailable}
              amenities={room.amenities}
              price={room.pricePerNight}
              btnlable={'Book Now'}
              hotelName={room?.hotel?.name}
              room={room}
            />
          </div>
        ))
      ) : (
        <div className="flex w-full items-center justify-center py-16">
          <h1 className="text-2xl font-bold">No rooms found</h1>
        </div>
      )}
    </div>
  )
}

export default SearchRooms
