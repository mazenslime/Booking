import React from 'react'
import Button from '../Button/Button'
import { useNavigate } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router'
function Slider() {
    const navigator=useNavigate()
    function handleLogout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.reload();
        navigator('/') // Refresh the page to update the UI
    }
    return(
        <div className='absolute z-3000 right-1 top-8 w-48 text-center   text-black   px-2 py-1 bg-white border border-gray-300 rounded shadow-lg'>
            <Link to='/Booking' className='flex items-center justify-center gap-x-2'>< FontAwesomeIcon className='text-xl' icon={faCircleUser}/><span>profile</span></Link>
            {/* some data to user */}
            <Button title="Logout" cls='bg-transparent  font-bold ' handleClick={handleLogout} />
        </div>
    )
}

export default Slider 