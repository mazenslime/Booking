import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation, useNavigate, useOutletContext, useSearchParams } from 'react-router'
import Destinationinput from '../../Componants/search/destinationinput/Destinationinput'
import DatePicker from '../../Componants/search/DatePicker/DatePicker'
import GuestSelector from '../../Componants/search/GuestSelector/GuestSelector'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faHotel, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { buildSearchPath, readSearchParams } from '../../utils/search'

function tabClass({ isActive }) {
  return `flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
    isActive
      ? 'bg-blue-500 text-white shadow-sm'
      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
  }`
}

function Search() {
  const favoriteContext = useOutletContext()
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const locationParam = location.pathname.replace(/^\/search\/?/, '').split('/')[0]
  const decodedLocation = locationParam ? decodeURIComponent(locationParam) : ''
  const current = readSearchParams(searchParams, decodedLocation)

  const [destination, setDestination] = useState(current.q)
  const [date, setDate] = useState(current.date)
  const [guest, setGuest] = useState(current.guests || '')
  const [error, setError] = useState('')

  useEffect(() => {
    setDestination(current.q)
    setDate(current.date)
    setGuest(current.guests || '')
  }, [current.q, current.date, current.guests])

  const isRooms = location.pathname.startsWith('/search/rooms')

  function handleSearch() {
    if (!destination && !date && !guest) {
      setError('Please enter a destination')
      setTimeout(() => setError(''), 3000)
      return
    }
    navigate(buildSearchPath({
      q: destination,
      date,
      guests: guest,
      type: isRooms ? 'rooms' : 'hotels',
    }))
  }

  return (
    <div className="w-3/4 mx-auto py-8">
      <div className="flex flex-wrap items-end gap-2 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <Destinationinput
          lable="Destination"
          clslable="text-gray-500/50 text-lg px-4 font-semibold"
          cls="gap-3 align-start grow"
          palce="city, hotel, or room"
          value={destination}
          setValue={setDestination}
          error={error}
        />
        <DatePicker
          lable="Date"
          clslable="text-gray-500/50 text-lg px-4 font-semibold"
          cls="gap-3 align-start"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <GuestSelector
          lable="Guest"
          clslable="text-gray-500/50 text-lg px-4 font-semibold"
          cls="gap-3 align-start"
          palce="2"
          value={guest}
          onChange={(e) => setGuest(e.target.value)}
        />
        <button
          type="button"
          className="mt-5 cursor-pointer rounded-lg bg-[#2E5BFF] px-3 py-2 text-xl text-white"
          onClick={handleSearch}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>

      <nav className="mt-6 mb-8 flex flex-wrap gap-2 border-b border-gray-200 pb-4">
        <NavLink
          to={buildSearchPath({ q: destination, date, guests: guest, type: 'hotels' })}
          className={() => tabClass({ isActive: !isRooms })}
        >
          <FontAwesomeIcon icon={faHotel} />
          Hotels
        </NavLink>
        <NavLink
          to={buildSearchPath({ q: destination, date, guests: guest, type: 'rooms' })}
          className={() => tabClass({ isActive: isRooms })}
        >
          <FontAwesomeIcon icon={faBed} />
          Rooms
        </NavLink>
      </nav>

      <Outlet context={favoriteContext}/>
    </div>
  )
}

export default Search
