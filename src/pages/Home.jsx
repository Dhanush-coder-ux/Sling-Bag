import NavBar from '../section/NavBar'
import Hero from '../section/Hero'
import LatestProduct from '../section/LatestProduct'
import ProductSlide from '../components/ProductSlide'
import { useContext, useEffect } from 'react'
import { BagContext } from '../context/BagContext'




const Home = () => {
  return (
    <div className='max-sm:mb-20'>
        <NavBar/>
        {/* Hero Section */}
        <Hero/>
        {/* <LatestProduct/> */}
        

    </div>
  )
} 

export default Home
