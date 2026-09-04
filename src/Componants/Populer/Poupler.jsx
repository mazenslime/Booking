import React from 'react'
import PouplerCard from './PouplerCard';
import photo from '../../assets/unnamed.jpg'
import photo1 from '../../assets/unnamed1.jpg'
import photo2 from '../../assets/unnamed2.jpg'
import photo3 from '../../assets/unnamed3.jpg'
import { Link } from 'react-router';
import {hotelDummyData,cities} from '../../assets/assets/assets'
function Poupler() {
  return (
    <div className='mt-30  px-10 py-20 '>
    <div className='flex justify-between'>
            <h2 className='font-extrabold text-3xl mb-10'>Popular Destinations</h2>
            <Link to={'/search/hotel'} className='font-medium text-lg text-[#2E5BFF]'>view all</Link>
    </div>
    <div className='flex justify-between gap-2'>
        {
            hotelDummyData.map((dest,i)=>{
                return(
                    <PouplerCard info={dest} citie={cities[i]} />
                )
            })
        }
    </div>
    </div>
  )
}

export default Poupler