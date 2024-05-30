import React,{ useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header.jsx';
import Navbar from '../../components/Navbar/Navbar.jsx';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu.jsx';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay.jsx';
import LoginPopup from '../../components/LoginPopup/LoginPopup.jsx';

const Home = () => {
  const [category,setCategory] = useState("All");
  
  return (
    <>

    <div className='content'>
 
     
      <Header />
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay  category={category} />
    </div>
    </>
  )
}

export default Home