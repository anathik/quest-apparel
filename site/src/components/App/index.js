import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import SplashPage from '../pages/SplashPage'
import ShopPage from '../pages/ShopPage'

import './index.css'

const App = () => {
  console.log("LOL")
  return (
    <Router>
      <div className="App">
        <SplashPage />
      </div>
    </Router>
  )
}

export default App
