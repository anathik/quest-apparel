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
        <Route exact path="/" component={SplashPage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/shoplist" component={SplashPage} />
        <Route path="/archives" component={SplashPage} />
        <Route path="/sales" component={SplashPage} />
        <Route path="/login" component={SplashPage} />
        <Route path="/bag" component={SplashPage} />
      </div>
    </Router>
  )
}

export default App
