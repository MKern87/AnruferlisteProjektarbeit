import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Stammdaten from './stammdaten/Stammdaten'
import Eintrag from './eintragNeu/Eintrag'

function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Stammdaten />} />
        <Route path = '/Eintrag' element = {<Eintrag />} />
      </Routes>
    </BrowserRouter>

    
      
    
  )
}

export default App
