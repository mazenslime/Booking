import React, { useEffect, useState } from 'react'
import Fillter from '../../Componants/filters/Fillter'
import HotelCard from '../../Componants/hotel/HotelCard/HotelCard'
import { useParams, useSearchParams } from 'react-router'
import { readSearchParams, searchHotels } from '../../utils/search'

function SearchLoc() {
    const { Location } = useParams()
    const [searchParams] = useSearchParams()
    const decodedLocation = Location ? decodeURIComponent(Location) : ''
    const { q, date, guests } = readSearchParams(searchParams, decodedLocation)
    const [data, setData] = useState([])

    useEffect(() => {
        setData(searchHotels(q, guests, date))
    }, [q, date, guests])

    return (
        <div className="flex flex-col space-y-8">
            <div className="flex gap-2">
             <Fillter label={'Fillter'} data={data} setData={setData}/>
             <Fillter label={'Sort'} data={data} setData={setData}/>
            </div>
            <div className="flex flex-col space-y-8">
                {
                    data.length > 0 ? (
                        data.map((hotel)=>{
                            return <HotelCard key={hotel._id} hotel={hotel} btnlabel={'view details'}  />
                        })
                    ) : (
                        <div className='w-full flex justify-center items-center h-full py-16'>
                            <h1 className='text-2xl font-bold'>No hotels found</h1>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default SearchLoc;
