import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import GarageRouter from './Routers/Routers.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Provider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={GarageRouter} />
    </AuthProvider>
  </React.StrictMode>,
)
