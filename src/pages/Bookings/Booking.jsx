import Card from "../../Componants/room/Cardromm/Card";
import { useLocation, useNavigate } from "react-router";
import React, { useEffect } from "react";
import Button from "../../Componants/Layout/Button/Button";
import { userDummyData } from "../../assets/assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faCamera } from "@fortawesome/free-solid-svg-icons";
function Booking() {
const navigator=useNavigate();
useEffect(()=>{
    if(!localStorage.getItem('token')){
        navigator('/login')
    }
},[])
const location = useLocation();
const savedUser = localStorage.getItem("user");
const user = savedUser ? JSON.parse(savedUser) : userDummyData[0];
const [profileImage, setProfileImage] = React.useState(user.image || "");
const [Bookings, setBookings] = React.useState(() => (
    location.state?.Room ? [location.state.Room] : []
));

    const handleImageUpdate = (event) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => {
            const image = reader.result;
            setProfileImage(image);
            localStorage.setItem("user", JSON.stringify({ ...user, image }));
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="flex min-h-screen w-full flex-col items-center gap-6 bg-slate-50 px-4 py-10">
            <div className="w-full max-w-4xl">
                <h1 className="text-3xl font-bold text-slate-900">My Bookings</h1>
                <p className="mt-1 text-slate-500">Welcome to your bookings page!</p>
            </div>

            <div className="flex w-full max-w-4xl items-center gap-5 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <label className="group relative h-20 w-20 shrink-0 cursor-pointer" title="Update profile photo">
                    {profileImage ? (
                        <img
                            src={profileImage}
                            alt={`${user.username} profile`}
                            className="h-20 w-20 rounded-full object-cover ring-4 ring-blue-50"
                        />
                    ) : (
                        <FontAwesomeIcon icon={faCircleUser} className=" text-7xl text-slate-300" />
                    )}
                    <span className="absolute text-7xl  inset-0 flex items-center justify-center rounded-full bg-black/50 text-white opacity-0 transition-opacity group-hover:opacity-100">
                        <FontAwesomeIcon icon={faCamera} />
                    </span>
                    <input type="file" accept="image/*" className="hidden" onChange={handleImageUpdate} />
                </label>
                <div>
                    <p className="text-sm font-medium text-slate-500">User Information</p>
                    <h2 className="text-xl font-bold text-slate-900">{user.username}</h2>
                    <p className="text-sm text-slate-600">{user.email}</p>
                    <p className="text-sm capitalize text-slate-500">{user.role}</p>
                </div>
            </div>

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