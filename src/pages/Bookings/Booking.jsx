import Card from "../../Componants/room/Cardromm/Card";
import { useLocation } from "react-router";
import React from "react";
import Button from "../../Componants/Layout/Button/Button";
function Booking() {
const location = useLocation();
const [Bookings, setBookings] = React.useState(() => (
    location.state?.Room ? [location.state.Room] : []
));
    return (
        <div className="w-full flex flex-col items-center justify-center h-screen space-x-0 space-y-4">
            <h1>My Bookings</h1>
            <p>Welcome to your bookings page!</p>
            <div className="w-3/4 mx-auto flex flex-col space-y-10 ">
                {Bookings.length > 0 ? (
                    Bookings.map((booking) => (
                        <div key={booking?._id} className="relative w-full">  
                         <Button title="X" cls="absolute top-0 right-0 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" handleClick={() => {
                            setBookings((prevBookings) => prevBookings.filter((b) => b._id !== booking._id));
                         }} />
                         <p className="absolute top-2 bg-white px-2 py-1 rounded-lg left-30  z-5000 font-bold ">{location?.state?.checkIn}</p>
                        <Card key={booking?._id} hotelid={booking?.hotel?._id} id={booking?._id} img={booking?.images?.[0]} title={booking?.hotel?.name} roomType={booking?.roomType} isAvailable={booking?.isAvailable} amenities={booking?.amenities} price={booking?.pricePerNight} hotelName={booking?.hotel?.name} room={booking} />
                        </div>
                    ))
                ) : (
                    <p className="text-gray-600 text-center">You have no bookings at the moment.</p>
                )}
            {/* checkout */}
            <div>

            </div>
            </div>
        </div>
    );
}

export default Booking;