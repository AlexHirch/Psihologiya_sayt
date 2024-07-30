import React from 'react'
import "./app.scss"
import Navbar from './component/navbar'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <HomePage/>
    </div>
  )
}

export default App