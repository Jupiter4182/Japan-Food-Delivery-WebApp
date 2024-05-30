import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src={assets.logo} alt="" />
        <img className='profile' src={assets.profile_image} alt="" />
        <div className="control-logout">
        <ul className='nav-profile-dropdown'>
                    <li ><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                    <hr />
                    <li ><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                </ul>
        </div>
        
    </div>
  )
}

export default Navbar