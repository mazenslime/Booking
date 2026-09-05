import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart,faStar} from '@fortawesome/free-solid-svg-icons'
import Share from '../../share/share'
import Button from '../../Layout/Button/Button'
import { useNavigate } from 'react-router';
function INFO({Room,contact,address,Location,rating=0,reviews,name,roomType,price,isFavorite,onToggleFavorite}) {
  const navigate = useNavigate();
  function handleCheckIn() {    
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }else{
      const checkIn = new Date().toISOString().split('T')[0];
      navigate('/checkout',{state:{Room,checkIn}});
    }
  }
  return (
    <div className='w-full flex-col gap-4  '>
      <div className='w-3/4 flex justify-between items-start'>
            <h2 className='font-bold text-xl'>{address}</h2>
            <h3 className='text-gray-600'>{contact}</h3>
            <div className='relative flex gap-2 space-x-3 items-center'>
                {/* icons */}
                <Button title={'cheackin'} cls='text-white font-bold py-2 px-4 rounded' handleClick={handleCheckIn} />
                <FontAwesomeIcon icon={faHeart} className={isFavorite ? 'text-red-500 cursor-pointer' : 'text-gray-300 cursor-pointer'} onClick={onToggleFavorite} />
                <Share Location={Location} />
            </div>
        </div>
        <div className='flex gap-5'>
            <span>{rating}<FontAwesomeIcon icon={faStar} className='text-amber-300' /></span>
            <p>roomType:  {roomType}</p>
            <p>price:  {price}</p>
            <p>reviews:  {reviews}</p>
        </div>
    </div>
  )
}


export default INFO