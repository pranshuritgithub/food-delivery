import './App.css'
import React from 'react'
import Home from './page/Home'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div>
      <Home />
      <ToastContainer />
    </div>
  )
}

export default App
