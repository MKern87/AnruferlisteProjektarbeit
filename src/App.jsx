import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Stammdaten from './stammdaten/Stammdaten'

function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Stammdaten />} /> 
      </Routes>
    </BrowserRouter>
      
    
  )
}

export default App
