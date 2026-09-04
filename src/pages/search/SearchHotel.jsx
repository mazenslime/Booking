import React, { useEffect, useState } from 'react'
import Fillter from '../../Componants/filters/Fillter'
import HotelCard from '../../Componants/hotel/HotelCard/HotelCard'
import { useSearchParams } from 'react-router'
import { readSearchParams, searchHotels } from '../../utils/search'

function SearchHotel() {
  const [searchParams] = useSearchParams()
  const { q, date, guests } = readSearchParams(searchParams)
  const [hotels, setHotels] = useState([])

  useEffect(() => {
    setHotels(searchHotels(q, guests, date))
  }, [q, date, guests])

  return (
    <div className="flex flex-col space-y-8">
      {hotels.length > 0 ? (
        hotels.map((hotel) => (
          <HotelCard key={hotel._id} hotel={hotel} btnlabel={'View Details'} />
        ))
      ) : (
        <div className="flex w-full items-center justify-center py-16">
          <h1 className="text-2xl font-bold">No hotels found</h1>
        </div>
      )}
    </div>
  )
}

export default SearchHotel
