import React,{ useState } from 'react';

import Cart from "./pages/Cart/Cart.jsx";
import Home from "./pages/Home/Home.jsx";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder.jsx";
import Navbar from './components/Navbar/Navbar.jsx';
import LoginPopup from './components/LoginPopup/LoginPopup.jsx';
import Footer from './components/Footer/Footer.jsx';
import { createBrowserRouter, createRoutesFromElements, Route,Routes,BrowserRouter,Link,Outlet, RouterProvider} from 'react-router-dom'
import Verify from './pages/Verify/Verify.jsx';
import Myorders from './pages/Myorders/Myorders.jsx';



const App = () => {
 
 

  return (
    
    <>
   
      <div className='app'>
        {/* <RouterProvider router={router} /> */}
        <BrowserRouter>

        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/myorders" element={<Myorders />} />
      </Routes>
    </BrowserRouter>
      </div>
      <Footer />

    </>

 
  )
}

export default App