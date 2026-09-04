import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart,faShareNodes,faStar} from '@fortawesome/free-solid-svg-icons'
import Share from '../share/share'
{/* <FontAwesomeIcon icon={faHeart} /> */}
function INFO({contact,address,Location,rating=0,reviews,name,isFavorite,onToggleFavorite}) {
  return (
    <div className='w-full flex-col  '>
        <div className='w-3/4 flex justify-between items-start'>
            <h2 className='font-bold text-xl'>{name}</h2>
            <h3 className='text-gray-600'>{contact}</h3>
            <div className='flex gap-2'>
                {/* icons */}
                <FontAwesomeIcon icon={faHeart} className={isFavorite ? 'text-red-500 cursor-pointer' : 'text-gray-300 cursor-pointer'} onClick={onToggleFavorite} />
                <Share Location={Location} />
            </div>
        </div>
        <div className='flex gap-1'>
            <span>{rating}<FontAwesomeIcon icon={faStar} className='text-amber-300' /></span>
            <p></p>
            <p>reviews:{reviews}</p>
        </div>
    </div>
  )
}


export default INFO