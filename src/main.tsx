import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import Layout from './routes/Layout.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index={true} element={<App/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
