import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'

import Layout from './routes/Layout.tsx'
import Home from './routes/home.tsx'
import Location from './routes/Location.tsx'
import Gallery from './routes/Gallery.tsx'
import Order from './routes/Order.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route index={true} element={<Home/>} />
            <Route path="/location" element={<Location/>} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/order" element={<Order/>} />
          </Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
