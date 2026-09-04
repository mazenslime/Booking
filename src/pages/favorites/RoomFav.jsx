import Card from "../../Componants/room/Cardromm/Card"
import { useOutletContext } from "react-router";

function RoomFav() {
    const { Loveroom } = useOutletContext();
    if (Loveroom.length === 0) {
        return (
            <div className="flex min-h-60 flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50 px-6 py-12 text-center">
                <h2 className="text-xl font-bold text-gray-800">No favorite rooms yet</h2>
                <p className="mt-2 text-gray-500">Save a room from a hotel page to see it here.</p>
            </div>
        )
    }

    return (
        <div className="flex flex-col space-y-6">
                {Loveroom.map((room) => (
                    <Card
                    key={room._id}
                    room={room}
                    hotelid={room?.hotel?._id}
                    id={room._id}
                        img={room.images[0]}
                        roomType={room.roomType}
                        isAvailable={room.isAvailable}
                        amenities={room.amenities}
                        price={room.pricePerNight}
                        btnlable="Book Now"
                        hotelName={room?.hotel?.name}
                    />
            ))}
        </div>
    )
}

export default RoomFav
