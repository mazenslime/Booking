import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import { useState } from 'react'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Index from './pages/home/index.jsx';
import Hotelpage from './pages/hotel/Hotelpage.jsx';
import Search from './pages/search/Search.jsx';
import SearchHotel from './pages/search/SearchHotel.jsx';
import SearchLoc from './pages/search/SearchLocation.jsx';
import SearchRooms from './pages/search/SearchRooms.jsx';
import Favorites from './pages/favorites/Favourits.jsx'
import RoomFav from './pages/favorites/RoomFav.jsx'
import HotelFav from './pages/favorites/HotelFav.jsx'
import Room from './pages/Room/Room.jsx'

const Route=createBrowserRouter([
  {
    path:'/',
    element:<StrictMode>
        <App />
    </StrictMode>,
    children:[
  {
    index: true,
    element: <Index/>

  },
  {
    path:'/login',
    element: <login />
  },
  {
    path:'/register',
  },
  {
    path:'/search',
    element:<Search/>,
      children:[
        {
          index: true,
          element:<SearchHotel/>,
        },
        {
          path:'hotel',
          element:<SearchHotel/>,
        },
        {
          path:'rooms',
          element:<SearchRooms/>,
        },
        {
          path:':Location',
          element:<SearchLoc/>
        }
    ]
  },
  {
    path:'/hotel/:hotelId',
    element:<Hotelpage/>,
  },
  {
    path:'/hotel/:hotelId/:id',
    element:<Room/>
  },
  {
    path:'/checkout'
  },
  {
    path:'/booking/confirmation/:bookingId'
  },
  {
    path:'/favorites',
    element:<Favorites/>,
    children:[
      {
        index: true,
        element:<HotelFav/>
      },
      {
        path:'rooms',
        element:<RoomFav/>
      }
    ]
  },
  {
    path:'/bookings',
    children:[
      {
        path:'/bookings/:bookingId'
      }
    ]
  },
  {
    path:'profile'
  },
  {
    path:'settings'
  }
  ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={Route}/>
)
