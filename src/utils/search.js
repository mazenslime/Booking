import { hotelDummyData, roomsDummyData } from '../assets/assets/assets'

export const ROOM_CAPACITY = {
    'Single Bed': 1,
    'Double Bed': 2,
    'Luxury Suite': 4,
}

export function normalizeText(value = '') {
    return String(value).toLowerCase().replace(/[\s\-_]/g, '')
}

export function readSearchParams(searchParams, locationParam = '') {
    const pathQuery = ['hotel', 'rooms', ''].includes(locationParam) ? '' : locationParam
    return {
        q: pathQuery || searchParams.get('q') || '',
        date: searchParams.get('date') || '',
        guests: Number(searchParams.get('guests')) || 0,
    }
}

export function buildSearchPath({ q = '', date = '', guests = '', type = 'hotels' } = {}) {
    const params = new URLSearchParams()
    if (date) params.set('date', date)
    if (guests) params.set('guests', String(guests))
    const query = params.toString()
    const suffix = query ? `?${query}` : ''

    const dest = q.trim()
    if (type === 'rooms') {
        if (dest) params.set('q', dest)
        const roomQuery = params.toString()
        return `/search/rooms${roomQuery ? `?${roomQuery}` : ''}`
    }
    if (dest) {
        return `/search/${encodeURIComponent(dest)}${suffix}`
    }
    return `/search/hotel${suffix}`
}

function matchesHotel(hotel, query) {
    if (!query.trim()) return true
    const n = normalizeText(query)
    return [hotel.city, hotel.name, hotel.address, hotel.description]
        .filter(Boolean)
        .some((field) => normalizeText(field).includes(n))
}

function roomFitsGuests(room, guests) {
    if (!guests) return true
    const capacity = ROOM_CAPACITY[room.roomType] || 2
    return capacity >= guests
}

function roomFitsDate(room, date) {
    if (!date) return true
    return room.isAvailable === true
}

export function searchRooms(query = '', guests = 0, date = '', rooms = roomsDummyData) {
    return rooms.filter((room) => {
        const hotel = room.hotel || {}
        const textMatch =
            !query.trim() ||
            matchesHotel(hotel, query) ||
            normalizeText(room.roomType).includes(normalizeText(query))
        return textMatch && roomFitsGuests(room, guests) && roomFitsDate(room, date)
    })
}

export function searchHotels(query = '', guests = 0, date = '', hotels = hotelDummyData, rooms = roomsDummyData) {
    const matchingRooms = searchRooms(query, guests, date, rooms)
    const hotelIdsFromRooms = new Set(matchingRooms.map((room) => room.hotel?._id))

    return hotels.filter((hotel) => {
        const textMatch = matchesHotel(hotel, query)
        if (!textMatch) return false
        if (!guests && !date) return true
        return hotelIdsFromRooms.has(hotel._id)
    })
}
