import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './layout/MainLayout.jsx'
import Homepage from './pages/homepage/Homepage.jsx'
import Timeline from './pages/timeline/Timeline.jsx'
import { router } from './routes/Routes.jsx'
 


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
 
  </StrictMode>,
)
