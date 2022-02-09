/* eslint-disable global-require */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import footerImg from './images/undraw_nature.png'
import HomePage from './Routes/HomePage/HomePage'
import Results from './Routes/ResultsPage/Results'
import './styles/App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="main-heading">Bird Songs</h1>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="results" element={<Results />} />
        </Routes>
        <footer>
          <img src={footerImg} alt="nature" />
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
