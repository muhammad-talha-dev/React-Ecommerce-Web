import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Games from './pages/Games'
import Library from './pages/Library'
import Page404 from './pages/Page404'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Games" element={<Games />} />
        <Route path="/Library" element={<Library />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  )
}

export default App