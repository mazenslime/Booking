import React from 'react'
import Button from '../Button/Button'
import { useNavigate } from 'react-router'
function Slider() {
    const navigator=useNavigate()
    function handleLogout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.reload();
        navigator('/') // Refresh the page to update the UI
    }
    return(
        <div className='absolute z-3000 right-5 px-4 py-1 text-black mt-20 w-48 bg-white border border-gray-300 rounded shadow-lg'>
            {/* some data to user */}
            <Button title="Logout" cls='bg-transparent  font-bold ' handleClick={handleLogout} />
        </div>
    )
}

export default Slider 