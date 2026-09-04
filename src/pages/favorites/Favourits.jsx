import { NavLink, Outlet, useOutletContext } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed, faHeart, faHotel } from "@fortawesome/free-solid-svg-icons"

function tabClass({ isActive }) {
    return `flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
        isActive
            ? "bg-blue-500 text-white shadow-sm"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
    }`
}

function Favorites() {
    const favoriteContext = useOutletContext()
    return (
        <div className="w-3/4 mx-auto py-8">
            <header className="mb-8">
                <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-red-50">
                        <FontAwesomeIcon icon={faHeart} className="text-red-500" />
                    </span>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Your Favorites</h1>
                        <p className="text-gray-500">Hotels and rooms you saved for later.</p>
                    </div>
                </div>
                <nav className="mt-6 flex flex-wrap gap-2 border-b border-gray-200 pb-4">
                    <NavLink to="/favorites" end className={tabClass}>
                        <FontAwesomeIcon icon={faHotel} />
                        Hotels
                    </NavLink>
                    <NavLink to="/favorites/rooms" className={tabClass}>
                        <FontAwesomeIcon icon={faBed} />
                        Rooms
                    </NavLink>
                </nav>
            </header>
            <Outlet context={favoriteContext} />
        </div>
    )
}

export default Favorites
