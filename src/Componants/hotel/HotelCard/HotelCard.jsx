import Button from '../../Layout/Button/Button'
import { useNavigate, useOutletContext } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faHeart } from '@fortawesome/free-solid-svg-icons'
function HotelCard({hotel, btnlabel=''}) {
    const navigate = useNavigate();
     const { LoveHotel,setLoveHotel } = useOutletContext();
    const Love = LoveHotel.some((favoriteHotel) => favoriteHotel._id === hotel._id)
    function handleViewDetails() {
        navigate(`/hotel/${hotel._id}`);
    }
    function toggleFavorite() {
        setLoveHotel((previousHotels) => Love
          ? previousHotels.filter((favoriteHotel) => favoriteHotel._id !== hotel._id)
          : [...previousHotels, hotel]
        )

    }
  return (
        <div className={`flex items-crnter `}>
          <div className='relative w-1/4 h-full'>
            {/* icon */}
            {
                Love==true?
                <FontAwesomeIcon icon={faHeart} className='absolute top-2 right-2 z-1000 text-red-500 cursor-pointer' onClick={toggleFavorite} />
                :
                <FontAwesomeIcon icon={faHeart} className='absolute top-2 right-2 z-1000 text-gray-300/50 cursor-pointer' onClick={toggleFavorite}  />
            }
            <img className='relative max-h-50 w-full' src={hotel.image} alt={hotel.name} />
          </div>
          {/* information */}
          <div className='w-3/4 px-4 py-2 flex flex-col justify-between'>
            {/* top info */}
            <div className='flex justify-between items-start border-b-2 border-gray-300 pb-2'>
              <div className='flex flex-col gap-0.5'>
                <h2 className='text-xl font-bold'>{hotel?.name}</h2>
                <p className='text-gray-600'>{hotel?.description}</p>
                <div className='flex flex-wrap gap-2 mt-1'>
                  {/* spans */}
                  {
                    hotel?.amenities?.map((amenity, index) => (
                      <span key={index} className='bg-gray-200 font-semibold text-gray-800 px-2 py-1 rounded-md mr-2'>
                        {amenity}
                      </span>
                    ))
                  }
                </div>
              </div>
              <div className='flex items-center gap-1'>
                <span className='font-bold'>{hotel?.rating}</span>
                <FontAwesomeIcon icon={faStar} className='text-amber-300' />
              </div>
            </div>
            {/* Bottom info */}
            <div className='flex justify-between items-center py-4'>
              <div>
                <p className='text-gray-600'>{hotel?.city}</p>
              </div>
              <div>
                {/* button */}
                <Button title={btnlabel} handleClick={handleViewDetails} cls='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'/>
              </div>
            </div>
          </div>
        </div>
  )
}

export default HotelCard