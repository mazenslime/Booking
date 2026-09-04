import HotelCard from "../../Componants/hotel/HotelCard/HotelCard"
import { useOutletContext } from "react-router";

function HotelFav() {
    const { LoveHotel } = useOutletContext();
    if (LoveHotel.length === 0) {
        return (
            <div className="flex min-h-60 flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50 px-6 py-12 text-center">
                <h2 className="text-xl font-bold text-gray-800">No favorite hotels yet</h2>
                <p className="mt-2 text-gray-500">Save a hotel from search or a hotel page to see it here.</p>
            </div>
        )
    }

    return (
        <div className="flex flex-col space-y-6">
            {LoveHotel.map((hotel) => (
                    <HotelCard
                        key={hotel._id}
                        hotel={hotel}
                        btnlabel="View Details"
                    />
            ))}
        </div>
    )
}

export default HotelFav
