import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import PlaceOrder from './pages/Placeorder/PlaceOrder'
import Cart from './pages/Cart/Cart'
import Homes from './pages/Homes/Homes'
import Footer from './components/Footer/Footer'
import Loginpopup from './components/LoginPopup/Loginpopup'





const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
      {showLogin ? <Loginpopup setShowLogin={setShowLogin}/> : null}



      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/" element={<Homes />} />
        </Routes>

      </div>
      <Footer />
    </>
  );

}

export default App