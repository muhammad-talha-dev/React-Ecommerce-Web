import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Games from './pages/Games'
import Library from './pages/Library'
import Page404 from './pages/Page404'
import Signup from './pages/Signup'
import Login from './pages/Login'
import WebHeader from './components/WebHeader'
import Footer from './components/Footer'
import GamePage from './pages/GamePage'

function App() {
  return (
    <>

      <WebHeader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/library" element={<Library />} />
        <Route path="/game/:GameId" element={<GamePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Page404 />} />
      </Routes>

      <Footer />

    </>
  )
}

export default App