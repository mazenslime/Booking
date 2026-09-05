
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'

function Cheackout() {
    const location = useLocation()
    const navigate = useNavigate()
    const room = location.state?.Room
    const checkIn = location.state?.checkIn || new Date().toISOString().split('T')[0]
    const [submitted, setSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        checkIn: checkIn,
        checkOut: '',
        requests: ''
    })
    function handleSubmit(event) {
        event.preventDefault()
        const bookingData = {
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            checkIn: event.target.checkIn.value,
            checkOut: event.target.checkOut.value,
            requests: event.target.requests.value
        }
        setFormData(bookingData)
        setSubmitted(true)
        console.log('navegate');
        
        navigate('/Booking', { state: { Room: room, checkIn: bookingData.checkIn } })
    }

    if (!room) {
        return (
            <main className='min-h-screen bg-[#F8FAFC] px-6 py-16 text-center'>
                <h1 className='text-2xl font-bold text-[#0F172A]'>No room selected</h1>
                <p className='mt-2 text-gray-500'>Choose a room before continuing to checkout.</p>
                <button type='button' onClick={() => navigate('/search/rooms')} className='mt-6 rounded-xl bg-[#6D88FF] px-5 py-2 font-bold text-white cursor-pointer'>Browse rooms</button>
            </main>
        )
    }
    const roomPrice = Number(room.pricePerNight || room.price || 0)
    const hotelName = room.hotel?.name || room.hotelName || 'Selected hotel'
    const image = room.images?.[0] || room.img

    return (
        <main className='min-h-screen bg-[#F8FAFC] px-4 py-8 sm:px-8'>
            <div className='mx-auto max-w-5xl'>
                <div className='mb-8'>
                    <p className='text-sm font-semibold uppercase tracking-wide text-[#6D88FF]'>Secure booking</p>
                    <h1 className='mt-1 text-3xl font-bold text-[#0F172A]'>Complete your booking</h1>
                    <p className='mt-2 text-gray-500'>Enter your details to reserve this room.</p>
                </div>

                <div className='grid gap-6 lg:grid-cols-[1fr_340px]'>
                    <form onSubmit={handleSubmit} className='rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7'>
                        <h2 className='text-xl font-bold text-[#0F172A]'>Guest information</h2>
                        <div className='mt-5 grid gap-4 sm:grid-cols-2'>
                            <label className='text-sm font-semibold text-gray-600'>First name
                                <input name='firstName' type='text' required className='mt-2 w-full rounded-xl border border-gray-300 px-3 py-2.5 font-normal text-gray-800 outline-none focus:border-[#6D88FF] focus:shadow-[0_0_10px_rgba(109,136,255,0.25)]' />
                            </label>
                            <label className='text-sm font-semibold text-gray-600'>Last name
                                <input name='lastName' type='text' required className='mt-2 w-full rounded-xl border border-gray-300 px-3 py-2.5 font-normal text-gray-800 outline-none focus:border-[#6D88FF] focus:shadow-[0_0_10px_rgba(109,136,255,0.25)]' />
                            </label>
                            <label className='text-sm font-semibold text-gray-600'>Email address
                                <input name='email' type='email' required className='mt-2 w-full rounded-xl border border-gray-300 px-3 py-2.5 font-normal text-gray-800 outline-none focus:border-[#6D88FF] focus:shadow-[0_0_10px_rgba(109,136,255,0.25)]' />
                            </label>
                            <label className='text-sm font-semibold text-gray-600'>Phone number
                                <input name='phone' type='tel' required className='mt-2 w-full rounded-xl border border-gray-300 px-3 py-2.5 font-normal text-gray-800 outline-none focus:border-[#6D88FF] focus:shadow-[0_0_10px_rgba(109,136,255,0.25)]' />
                            </label>
                            <label className='text-sm font-semibold text-gray-600'>Check-in
                                <input name='checkIn' type='date' defaultValue={checkIn} min={checkIn} required className='mt-2 w-full rounded-xl border border-gray-300 px-3 py-2.5 font-normal text-gray-800 outline-none focus:border-[#6D88FF] focus:shadow-[0_0_10px_rgba(109,136,255,0.25)]' />
                            </label>
                            <label className='text-sm font-semibold text-gray-600'>Check-out
                                <input name='checkOut' type='date' min={checkIn} required className='mt-2 w-full rounded-xl border border-gray-300 px-3 py-2.5 font-normal text-gray-800 outline-none focus:border-[#6D88FF] focus:shadow-[0_0_10px_rgba(109,136,255,0.25)]' />
                            </label>
                        </div>
                        <label className='mt-4 block text-sm font-semibold text-gray-600'>Special requests
                            <textarea name='requests' rows='4' placeholder='Optional' className='mt-2 w-full resize-none rounded-xl border border-gray-300 px-3 py-2.5 font-normal text-gray-800 outline-none focus:border-[#6D88FF] focus:shadow-[0_0_10px_rgba(109,136,255,0.25)]' />
                        </label>
                        <button type='submit' className='mt-6 w-full rounded-xl bg-[#6D88FF] px-4 py-3 font-bold text-white cursor-pointer hover:bg-[#5874ed]'>Confirm booking</button>
                        {submitted && <p className='mt-4 text-center font-semibold text-green-600'>Booking request submitted successfully.</p>}
                    </form>

                    <aside className='h-fit rounded-2xl border border-gray-200 bg-white p-5 shadow-sm'>
                        {image && <img src={image} alt={hotelName} className='h-48 w-full rounded-xl object-cover' />}
                        <p className='mt-5 text-sm text-gray-500'>Your selection</p>
                        <h2 className='mt-1 text-xl font-bold text-[#0F172A]'>{hotelName}</h2>
                        <p className='mt-1 text-gray-600'>{room.roomType || 'Room'} · {room.isAvailable ? 'Available' : 'Not available'}</p>
                        <div className='mt-5 border-t border-gray-200 pt-4'>
                            <div className='flex justify-between text-gray-600'><span>Price per night</span><span>${roomPrice}</span></div>
                            <div className='mt-3 flex justify-between text-lg font-bold text-[#0F172A]'><span>Total</span><span>${roomPrice}</span></div>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    )
}


export default Cheackout